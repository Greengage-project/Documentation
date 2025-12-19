import express, { Request, Response } from "express";
import session from "express-session";
import Keycloak from "keycloak-connect";
import keycloakSettings from "./keycloak.json";
import { RequestKeycloak } from "./custom-types";
import axios from "axios";

const app = express();
const memoryStore = new session.MemoryStore();

interface CustomKeycloakOptions extends Keycloak.KeycloakOptions {
  clientId?: string;
}

const keycloak = new Keycloak({
  store: memoryStore,
  scope: "openid",
  clientId: keycloakSettings["resource"],
  bearerOnly: true,
  serverUrl: keycloakSettings["auth-server-url"],
  realm: keycloakSettings["realm"],
} as CustomKeycloakOptions);

app.use(
  session({
    secret: keycloakSettings["credentials"]["secret"],
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
  })
);

app.use(keycloak.middleware());

app.get("/", (req: RequestKeycloak, res: Response) => {
  const isAuthenticated = req?.kauth?.grant !== undefined;
  if (!isAuthenticated) {
    return res.send("Hello World | <a href='/auth'>Login</a>");
  }
  const token = req?.kauth?.grant?.access_token?.token;
  const decodedToken = req?.kauth?.grant?.access_token?.content;
  res.send(`<p> Logged </p> <a href='/logout'>Logout</a>
  <p>Token: ${token}</p>
  <p>Decoded Token: ${JSON.stringify(decodedToken, null, 2)}</p>
  `);
});

app.get("/auth", keycloak.protect(), (_: Request, res: Response) => {
  res.send("Authenticated  | <a href='/logout'>Logout</a>");
});

app.get("/verify-token", async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(400).send("Token not provided");
  }

  try {
    const introspectionResponse = await axios.post(
      `${keycloakSettings["auth-server-url"]}/realms/${keycloakSettings["realm"]}/protocol/openid-connect/token/introspect`,
      new URLSearchParams({
        token: token,
        client_id: keycloakSettings["resource"],
        client_secret: keycloakSettings["credentials"]["secret"],
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const introspectionResult = introspectionResponse.data;

    if (introspectionResult.active) {
      res.send("Token is valid");
    } else {
      res.status(401).send("Token is invalid");
    }
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/logout", (req: RequestKeycloak, res: Response) => {
  if (req) {
    req.logout?.();
  }
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
