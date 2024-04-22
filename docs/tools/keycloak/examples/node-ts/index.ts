import express, { Request, Response } from "express";
import session from "express-session";
import Keycloak from "keycloak-connect";
import keycloakSettings from "./keycloak.json";
import { RequestKeycloak } from "./custom-types";
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

app.get("/logout", (req: RequestKeycloak, res: Response) => {
  if (req) {
    req.logout?.();
  }
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
