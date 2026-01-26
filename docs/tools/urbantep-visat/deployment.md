# UrbanTEP / VISAT

## Overview

The deployment of UrbanTEP/VISAT is streamlined through the use of Docker, a popular containerization platform that simplifies the process of deploying and managing applications. Docker containers package an application with all the parts it needs, such as libraries and other dependencies, and ship it all out as one package. This ensures consistency across various development, testing, and production environments, and simplifies scalability and updates.

### Prerequisites

Before proceeding with the deployment, ensure the following prerequisites are met:

1. **Docker Installation**: Docker must be installed on the host machine. For installation instructions, refer to the [official Docker documentation](https://docs.docker.com/).

2. **Docker Compose**: For managing multi-container Docker applications, Docker Compose is recommended. Installation instructions can be found on the [Docker Compose documentation page](https://docs.docker.com/compose/).

3. **Access to UrbanTEP/VISAT Docker Images**: Ensure access to the repository containing the Docker images for UrbanTEP/VISAT.

4. **Configuration Files**: Prepare the necessary configuration files (e.g., environment variables, reverse proxy). Start from the downloadable examples: [docker-compose.yml](assets/docker-compose.yml) and [nginx.greengage-dev.gisat.cz.conf](assets/nginx.greengage-dev.gisat.cz.conf).

## Deployment

UrbanTEP/VISAT employs a microservices architecture on the backend, ensuring easy interoperability and support for various data formats and sources. The frontend is modular, built on React architecture, and allows integration with both new and existing tools.

### Deployment Steps

1. Clone Repository: Clone the repository containing the Docker Compose file and other necessary deployment scripts.
   git clone <repository-url>
   cd <repository-directory>
2. Configure Environment: Set up the environment variables as per your specific deployment requirements. This may include database connections, service endpoints, and other critical settings.
3. Run Docker Compose: Use Docker Compose to build and start the containers. This can typically be done with a single command:
   docker-compose up -d
   This command will download the required Docker images, create containers, and start the services defined in the docker-compose.yml file.
4. Verify Deployment: Once the containers are up and running, verify the deployment by accessing the UrbanTEP/VISAT application through a web browser.
5. Upload the data and corresponding metadata configurations to the be-gisdata and be-metadata microservices. After a successful deployment, the OpenAPI documentation is available at be-gisdata/openapi and be-metadata/openapi.

Ensure all services are functioning as expected and that there are no connectivity issues between the microservices.

### Updating the Application

To update UrbanTEP/VISAT, pull the latest Docker images and re-run the Docker Compose:

    docker-compose pull
    docker-compose up -d --force-recreate

This will ensure that you are running the latest version of the application with all the necessary updates and security patches.

### Troubleshooting

In case of issues during deployment, consult the application logs and Docker container logs. Common issues might include:

- Network connectivity problems.
- Configuration errors.
- Incompatibilities between different versions of Docker images.

For detailed troubleshooting, refer to the specific error messages in the logs and the UrbanTEP/VISAT documentation.

You can also email GISAT for assistance: [martin.babic@gisat.cz](mailto:martin.babic@gisat.cz).

## Security

All data transfer occurs over secure HTTPS connections.
