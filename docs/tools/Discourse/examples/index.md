# Discourse Deployment Guide

## Integrating Discourse in Docker Environment

### Introduction

**Description**: Discourse is a versatile forum software ideal for creating and managing online communities. Its significance in development lies in its ability to foster engagement and provide a platform for discussions.

**Objective**: Deploying Discourse using Docker enhances application scalability, security, and ease of maintenance.

### Prerequisites

- Docker and Docker Compose installed.
- Basic knowledge of Docker and YAML syntax.

### Project Structure

**Source**: [Discourse Docker Compose Example](https://github.com/Greengage-project/Documentation/tree/main/docs/tools/Discourse/examples/docker-compose.yml)

**Directory Layout**:

- `postgresql`: PostgreSQL container configuration.
- `redis`: Redis container configuration.
- `discourse`: Main Discourse application container setup.
- `sidekiq`: Sidekiq container for background jobs.

### Step-by-Step Setup and Configuration

1. **Download or Clone the Docker Compose YAML File**: Obtain the Docker Compose file for Discourse deployment.

2. **Replace Placeholders with Actual Values**:
   - `[HERE_YOUR_DOMAIN]`: Enter the domain where your Discourse instance will be accessible.
   - `[HERE_ADMIN_EMAIL]`: Provide the email address for the Discourse administrator account.
   - `[HERE_ADMIN_USERNAME]`: Set the username for the Discourse administrator.
   - `[HERE_ADMIN_PASSWORD]`: Choose a secure password for the Discourse administrator account.
   - `[HERE_SMTP_HOST]`: Specify the SMTP server host for sending emails.
   - `[HERE_SMTP_PORT]`: Enter the port number used by your SMTP server.
   - `[HERE_SMTP_USER]`: Provide the SMTP username for email authentication.
   - `[HERE_SMTP_PASSWORD]`: Set the SMTP password for the email account.
   - `[HERE_SMTP_PROTOCOL]`: Indicate the email protocol used by your SMTP server (e.g., TLS).

Each of these placeholders corresponds to essential configuration settings for your Discourse deployment, ensuring proper functionality and access to the application.

### Running the Services

- Run `docker-compose up` to start all services.

### Accessing the Application

- Access Discourse at the specified domain after successful deployment.

### Additional Configuration (Optional)

1. **Integrating Keycloak for Single Sign-On (SSO)**:

   - To enable SSO with Keycloak in Discourse:
     ```
     cd /opt/bitnami/discourse
     RAILS_ENV=production bundle exec rake plugin:install repo=https://github.com/discourse/discourse-openid-connect
     RAILS_ENV=production bundle exec rake assets:precompile
     ```
     This configures Discourse to use Keycloak as the authentication provider, allowing seamless login across connected services.

2. **Disabling Email Verification**:
   - Given that Keycloak is used for user management, you might want to disable the default email verification sent by Discourse:
     ```
     cd /opt/bitnami/discourse/plugins
     git clone https://github.com/codergautam/disable-email-verification-discourse.git
     cd ..
     RAILS_ENV=production bundle install
     RAILS_ENV=production bundle exec rake assets:precompile
     ```
     This step ensures that the email verification step is bypassed, streamlining the registration process in a Keycloak-managed environment.

### Troubleshooting

- **Issues with User and Site Configuration**: If you encounter problems related to configuring users or site settings in your Docker-deployed Discourse instance, refer to the [Bitnami Discourse Container Configuration Guide](https://github.com/bitnami/containers/tree/main/bitnami/discourse#user-and-site-configuration). This resource provides detailed instructions and examples for configuring various aspects of the Discourse application within a Docker environment.
- **General Docker Deployment Issues**: For common Docker-related problems, such as container networking, volume management, or image retrieval issues, consult Docker's official documentation or community forums for guidance and solutions.

### Support and Additional Resources

**Support Channels**: Community forums, email support.

**External Documentation**: [Docker Documentation](https://docs.docker.com), [Discourse Official Documentation](https://docs.discourse.org).

### Docker Integration for Discourse

#### Introduction

- This section focuses on integrating the Discourse forum software within a Docker containerized environment, leveraging Docker's capabilities for efficient deployment and management.

#### Prerequisites

- Knowledge of Docker and Docker Compose.
- Familiarity with YAML syntax.

#### Project Structure

- The Docker Compose file defines multiple services: `postgresql` for the database, `redis` for caching, `discourse` for the main application, and `sidekiq` for background jobs.
- The `volumes` and `networks` sections manage data persistence and inter-container communication.

#### Steps for Integration

- Clone or create a Docker Compose file similar to the provided example.
- Customize the environment variables and service settings as per your requirements.

#### Running the Example

- Execute `docker-compose up` in the directory containing your Docker Compose file to start the Discourse environment.

#### Accessing the Application

- Once the containers are running, access Discourse through the specified domain configured in the `DISCOURSE_HOST` environment variable of the `discourse` service.

For specific details, always refer to the latest official documentation of the tools involved.
