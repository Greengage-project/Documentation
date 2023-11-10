# Example

### Step 1: Install and Setup Keycloak

1. Download and install Keycloak from the [official website](https://www.keycloak.org/downloads.html).
2. Start Keycloak by navigating to the `bin` directory of your Keycloak installation and executing the `standalone.sh` (for Linux/macOS) or `standalone.bat` (for Windows) script.
3. Access the Keycloak Admin Console at `http://localhost:8080/auth` and complete the initial setup. Create an admin user for managing Keycloak.

### Step 2: Create a Realm and a Client (OpenID Connect)

1. **Create a New Realm:**

   - Navigate to the Keycloak Admin Console.
   - Click on "Add realm" to create a new realm.
   - Enter the required details for your realm and save.

2. **Register a Client:**

   - Navigate to `Clients` and click `Create`.
   - Provide a `Client ID`, and select the `Client Protocol` as `openid-connect`.
   - Select the `Client Access Type` as `confidential` if your client is a web application that can secure the client secret. Otherwise, select `public` if your client is a native app or a JavaScript app running in the browser.
   - Set `Standard Flow Enabled` to `ON` if you want to use the Authorization Code Flow which is recommended for most scenarios.

3. **Configure OpenID Connect Protocol:**

   - For each client, you can tailor what claims and assertions are stored in the OIDC token by creating and configuring protocol mappers.
   - You may need to set up JSON mapping for certain claim keys in your application to handle roles or other claims passed by Keycloak.

4. **Client Adapters:**

   - Install a Keycloak Adapter in your application environment to communicate and be secured by Keycloak. Keycloak provides adapters for different platforms, and there are also third-party adapters available.

5. **Test Your Setup:**

   - At this point, it would be prudent to test your setup by attempting to authenticate using OpenID Connect. There are various grant types supported by Keycloak for authenticating users including authorization code, implicit, and client credentials.

6. **Additional Configuration (Optional):**

   - Depending on your application's requirements, you might need to configure additional settings in Keycloak or in your application. For instance, you might need to set up user roles, groups, and permissions, or configure multi-factor authentication.

7. **Documentations and Tutorials:**
   - There are various resources available that provide step-by-step guides or tutorials on integrating OpenID Connect with Keycloak, including the [Keycloak official documentation](https://www.keycloak.org/docs/latest/securing_apps/index.html#_oidc).

This extended step should provide a more thorough understanding of how to integrate OpenID Connect with Keycloak. However, the exact steps might vary based on your application's technology stack and your specific requirements.

### Step 3: Configure your System

1. For a JavaScript application, you could use the Keycloak JavaScript adapter.

```javascript
npm install keycloak-js
```

or a middleware as _keycloak-connect_

```javascript
npm install keycloak-connect
```

2. Configure the library with the details of your Keycloak realm and client.

```javascript
// Example configuration for a JavaScript application
const keycloak = Keycloak({
  url: "http://localhost:8080/auth",
  realm: "<your-realm>",
  clientId: "<your-client-id>",
});
```

### Step 4: Integrate Authentication

1. Use the library to add authentication to your system. For a web application, this would typically involve redirecting unauthenticated users to the Keycloak login page, and handling the tokens returned by Keycloak upon successful authentication.

```javascript
// Example integration for a JavaScript application
keycloak
  .init({ onLoad: "login-required" })
  .then((authenticated) => {
    console.log(authenticated ? "Authenticated" : "Not authenticated");
  })
  .catch((error) => {
    console.error("Failed to initialize authentication", error);
  });
```

### Step 5: Integrate Authorization

1. Use the tokens obtained during authentication to make authorized requests to your system's backend, and to check the user's roles and permissions.

```javascript
// Example authorization check in a JavaScript application
if (keycloak.hasRealmRole("admin")) {
  console.log("User is an admin");
}
```

This tutorial provides a high-level overview of the steps involved in integrating Keycloak with your system. The exact steps and code may vary depending on the specifics of your system and the programming languages and frameworks you are using.

---

# Example: Keycloak with a Node.js

### Overview

In this example, we'll demonstrate how to integrate Keycloak with a Node.js application. We'll set up a local development environment and use Docker to run Keycloak. Our Node.js application will provide a simple user interface to authenticate with Keycloak, display a JWT (JSON Web Token), and allow logging out.

### Prerequisites

- Docker and Docker Compose installed.
- Node.js and npm installed.
- Basic understanding of Keycloak, Docker, and Node.js.

### Project Structure

Source: [example](https://github.com/Greengage-project/Documentation/tree/main/docs/examples/keycloak)

```
example/
|-- docker-compose.yml
|-- realm-export.json
|-- keycloak.json
|-- package.json
|-- index.js
|-- run.sh         (for Linux/macOS)
|-- run.bat        (for Windows)
```

### Step 1: Setting Up Keycloak

1. **docker-compose.yml**:

   - This file contains the configuration to run a Keycloak container.
   - Make sure the `docker-compose.yml` file is set up as provided in your project.

2. **realm-export.json**:
   - This file should be configured according to your Keycloak realm requirements.
   - It contains realm, client, user, and role configurations.

### Step 2: Setting Up Node.js Application

1. **package.json**:

   - This file contains your project metadata and dependencies.
   - Ensure `express`, `express-session`, and `keycloak-connect` dependencies are listed.

2. **index.js**:

   - This file contains your Express application setup.
   - It sets up routes for login, logout, and the home page which displays the JWT.

3. **keycloak.json**:

   - This file contains the Keycloak client configuration.
   - Update the `realm`, `resource`, and `credentials` fields with your Keycloak configuration.

4. **Installing Dependencies**:
   - Run the following command to install the necessary packages as listed in your `package.json`:

```bash
npm i
```

### Step 3: Running the Services

1. **Linux/macOS**:

   - Ensure `run.sh` is executable: `chmod +x run.sh`.
   - Execute `run.sh` to start the services: `./run.sh`.

2. **Windows**:
   - Double-click `run.bat` or run it in the command prompt to start the services.

### Accessing the Application

1. Navigate to `localhost:3000/auth` to log in using Keycloak.
2. Once logged in, navigate to `localhost:3000` to view the JWT and its decoded payload.
3. To logout, navigate to `localhost:3000/logout`.

---

**For more information you can visit the official documentation in [https://www.keycloak.org/documentation](https://www.keycloak.org/documentation)**
