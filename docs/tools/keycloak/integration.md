# Keycloak Integration Guide for Third-Party Services

To facilitate a centralized user management system, we are utilizing Keycloak as our identity and access management solution. To integrate your service with our Keycloak system, please follow the instructions below to request the necessary credentials.

**Step 1: Requesting Client Credentials**

- Send an email to greengage.admin@deusto.es with the subject line: "[GREENGAGE] Request for Keycloak Client Credentials".
- In the body of the email, please provide the following information:

  - Tool name:
  - Description: (no more than 200 characters):
  - Contact name:(for technical propose)
  - Contact email:(for technical propose)

**Step 2: Receiving Your Credentials**

- Upon receipt of your request, we will review the information and create a unique Client ID and Secret for your service.
- We will then send you an email with your Client ID and Secret, which you will use to configure the integration on your side.

**Step 3: Configuring Your Service**

- Once you have received your Client ID and Secret, incorporate these credentials into your service’s authentication module.
- Ensure that your service is set to communicate with our Keycloak server using the OpenID Connect protocol.

**Step 4: Testing the Integration**

- After configuring your service, conduct thorough testing to ensure that the authentication process works correctly.
- If you encounter any issues during testing, please reach out to us via email for support.

If you have any questions about Keycloak integration, please contact us at greengage.admin@deusto.es with the subject "[Greengage] Keycloak support request"

**Important Notes:**

- Keep your Client Secret confidential. Do not share it with unauthorized personnel or services.
- If you believe your Client Secret has been compromised, contact us immediately to issue a new one.
- Adhere to all security best practices when implementing the integration to safeguard user data.
