const express = require("express");
const session = require("express-session");
const Keycloak = require("keycloak-connect");

const app = express();

const KEYCLOAK_AUTH_SERVER_URL = "http://localhost:8080/auth";

const memoryStore = new session.MemoryStore();

const keycloak = new Keycloak({
  store: memoryStore, // Use memoryStore here
  scope: "openid",
  clientId: "nodejs-microservice",
  bearerOnly: true,
  serverUrl: KEYCLOAK_AUTH_SERVER_URL,
  realm: "nodejs-microservice",
});

app.use(
  session({
    secret: "your-secret-goes-here", // Add a secret to your session configuration
    resave: false,
    saveUninitialized: true,
    store: memoryStore, // Use memoryStore for session storage
  })
);

app.use(keycloak.middleware());

// / no auth required

app.get("/", (req, res) => {
  const isAuthenticated = req.kauth.grant !== undefined;
  if (!isAuthenticated) {
    return res.send("Hello World | <a href='/auth'>Login</a>");
  }
  // get JWT token
  const token = req?.kauth?.grant?.access_token?.token;
  const decodedToken = req?.kauth?.grant?.access_token?.content;
  res.send(`<p> Logged </p> <a href='/logout'>Logout</a>
  <p>Token: ${token}</p>
  <p>Decoded Token: ${JSON.stringify(decodedToken, null, 2)}</p>
  `);
});

// /auth required

app.get("/auth", keycloak.protect(), (req, res) => {
  res.send("Authenticated  | <a href='/logout'>Logout</a>");
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
