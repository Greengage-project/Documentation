# Discourse Plugin Integration Guide with Keycloak SSO on Bitnami

- Discourse is a popular open-source discussion platform designed for modern community engagement.
- It is highly customizable, supporting numerous plugins for extended functionality.
- For detailed usage instructions and deployment options, refer to the [Discourse User Manual](https://meta.discourse.org/docs).

Integrating Discourse into the GREENGAGE engine amplifies its capabilities by enabling seamless Single Sign-On (SSO) authentication through Keycloak. This guide provides steps to integrate Discourse with Keycloak SSO, ensuring a smooth authentication process for users across various GREENGAGE services.

**Requesting Access Credentials**

- To integrate Discourse with Keycloak SSO, you'll need to request access credentials. ([Follow this guide](/tools/keycloak))

**Receiving Credentials**

- Following your request, you'll receive the necessary credentials via email.
- These credentials will enable the setup of SSO with Keycloak in your Discourse installation.

**Configuring Your Service**

1. **Installing OpenID Connect Plugin for Keycloak Integration**:

   - Navigate to the Discourse installation directory:
     ```
     cd /opt/bitnami/discourse
     ```
   - Install the OpenID Connect plugin:
     ```
     RAILS_ENV=production bundle exec rake plugin:install repo=https://github.com/discourse/discourse-openid-connect
     ```
   - Precompile the assets for the plugin to take effect:
     ```
     RAILS_ENV=production bundle exec rake assets:precompile
     ```
     Detailed guide for installing plugins on Discourse over Bitnami can be found [here](https://docs.bitnami.com/virtual-machine/apps/discourse/configuration/install-plugins/).

2. **Disabling Email Verification**:
   - To disable the email verification typically sent upon first-time registration in Discourse, use the following plugin:
     ```
     cd /opt/bitnami/discourse/plugins
     git clone https://github.com/codergautam/disable-email-verification-discourse.git
     cd ..
     RAILS_ENV=production bundle install
     RAILS_ENV=production bundle exec rake assets:precompile
     ```

These steps will set up Discourse for Keycloak SSO and disable the default email verification, aligning the authentication process with the Keycloak-managed user accounts.

**Step 4: Testing the Integration**

- Test the SSO integration by attempting to log in to Discourse using credentials managed by Keycloak.
- For testing API integrations, verify if you can call the Discourse API using the token obtained from Keycloak.

**Support and Contact**

- For additional support, please reach out to greengage.admin@deusto.es.

**Important Notes:**

- Always keep your credentials confidential and secure.
- In case of any security concerns or compromised credentials, immediately contact the support team.
- Regularly update your integration setup to comply with the latest security standards and feature enhancements.
