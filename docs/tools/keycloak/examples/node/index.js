const express = require("express");
const session = require("express-session");
const Keycloak = require("keycloak-connect");
const keycloakSettings = require("./keycloak.json");

const app = express();

const memoryStore = new session.MemoryStore();

const keycloak = new Keycloak({
  store: memoryStore, // Use memoryStore here
  scope: "openid",
  clientId: keycloakSettings["resource"],
  bearerOnly: true,
  serverUrl: keycloakSettings["auth-server-url"],
  realm: keycloakSettings["realm"],
});

app.use(
  session({
    secret: keycloakSettings["credentials"]["secret"],
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
