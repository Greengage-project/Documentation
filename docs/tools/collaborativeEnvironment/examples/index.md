# Collaborative Environment Integration Guide

## Integrating Collaborative Environment with Node.js and Python Environments

This guide provides detailed instructions for setting up and integrating the Collaborative Environment with Node.js and Python applications using Docker and Docker Compose.

### Prerequisites

- Docker and Docker Compose installed.
- Node.js and npm installed for Node.js integration.
- Python and pip installed for Python integration.
- Basic understanding of the Collaborative Environment, Docker, and the chosen programming language (Node.js or Python).

### Project Structure

The project structure includes various components like Docker configurations, backend services, interlinkers, and frontend applications. The main components are located in different repositories, which can be cloned for development purposes.

```
Collaborative Environment/
├── docker/                # Docker configurations for various services
├── docs/                  # Documentation files
├── envs/                  # Environment configurations
├── Makefile               # Makefile for automating setup and deployment
...
```

### Step 1: Cloning Repositories and Setting Up the Environment

1. Use the `Makefile` to clone all necessary components:

   ```
   make setup
   ```

2. This will clone repositories such as:
   - Frontend application
   - Backend services (auth, catalogue, coproduction, logging)
   - Interlinkers (survey, googledrive, ceditor)
   - Gamification service

### Step 2: Building and Starting Services

1. Build the containers for all services:

   ```
   make build
   ```

2. Start the services, set up the environment, and seed the database:
   ```
   make up
   ```

### Step 3: Accessing the Application

- Once all services are up and running, access the Collaborative Environment's frontend through the configured local or development URL.

### Additional Commands

- **Stopping Services**: To stop all containers and remove volumes, use `make down`.
- **Pulling Latest Changes**: To update all components, use `make pull`.
- **Restarting Services**: To restart containers, apply migrations and seed data, use `make restart`.
- **Environment Variables Setup**: To configure environment variables, use `make envVariables`.

### Troubleshooting

- Common issues can arise during the setup, such as Docker network conflicts or missing dependencies. Refer to the `README.md` files in each repository for specific troubleshooting steps.

### Support and Additional Resources

- For further assistance, refer to the detailed documentation in the `docs/` directory or visit the official [Collaborative Environment Documentation](https://interlink-project.github.io/interlink-project/).
- Additional support can be obtained through community forums or by contacting the Collaborative Environment support team.


