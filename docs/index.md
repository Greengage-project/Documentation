# Technical Guide for GREENGAGE Project Integration

### Project

The GREENGAGE project is a three-year-long pan-European initiative aimed at strengthening urban governance through citizen-based co-creation and crowd-sourcing. Funded under the Horizon Europe Framework Programme and co-funded by the UK government and Switzerland's State Secretariat for Education, Research and Innovation, this project is led by the Austrian Institute of Technology and comprises 17 research and industry partners from the EU and the UK. The project seeks to encourage innovative governance processes and assist public authorities in formulating climate mitigation and adaptation policies. By leveraging citizen participation and providing innovative digital solutions, GREENGAGE lays the groundwork for co-creating and co-designing innovative solutions to monitor environmental issues at the grassroots level. The developed Citizen Observatories (CO) are intended to be further integrated into urban planning decision-making processes. The project encompasses campaigns in four pilot cities across Europe, focusing on mobility, air quality, and healthy living, with citizens encouraged to observe and co-create data solutions for urban environments through Citizen Observatories.

### Tools

The `tools` directory contains subdirectories for each tool utilized in the project. Each subdirectory includes a detailed description of the tool, its functionality, and its role within the project.

#### Keycloak

- **Directory**: `/tools`
- **Link**: [tools/keycloak](tools/keycloak)
- **Deployed in**: [https://auth1.demo.greengage-project.eu](https://auth1.demo.greengage-project.eu)
- **Description**: Keycloak is an open-source Identity and Access Management solution aimed at modern applications and services. It facilitates the secure transmission of identity information between applications and services, even across different domains.

  - **Examples of programmatic integration/usage**:
    - [Node](tools/keycloak/examples#node)
    - [Python](tools/keycloak/examples#python)

---

#### Collaborative Environment

- **Directory**: `/tools`
- **Link**: [tools/collaborativeEnvironment](tools/collaborativeEnvironment)
- **Deployed in**: [https://demo.greengage-project.eu](https://demo.greengage-project.eu)
- **Description**: The Collaborative Environment is a comprehensive platform designed to facilitate co-production, asset management, and enhanced collaboration among users. It incorporates various interlinkers and modules to streamline workflows and improve organizational processes, supporting integration with different technologies and frameworks.

  - **Examples of programmatic integration/usage**:
    - [Deploy example](tools/collaborativeEnvironment/examples)

---

#### MODE

- **Directory**: `/tools`
- **Link**: [tools/mode](tools/mode)
- **Description**: This module allows to determine the transport mode of a user based on GPS data provided.

  - **Examples of programmatic integration/usage**:
    - [iOS example](tools/mode/examples/ios)
    - [Android example](tools/mode/examples/android)
    - [Backend example](tools/mode/examples/backend)

---

#### Discourse

- **Directory**: `/tools`
- **Link**: [tools/Discourse](tools/Discourse)
- **Deployed in**: [https://discourse.16.171.94.204.nip.io](https://discourse.16.171.94.204.nip.io)
- **Description**: Discourse is a modern, open-source discussion platform designed for building and managing community forums. Known for its user-friendly interface and robust features, it supports real-time discussions, multimedia integration, and comprehensive moderation tools. Ideal for a wide range of communities, from small groups to large enterprises, Discourse fosters engagement, knowledge sharing, and collaboration.

  - **Examples of programmatic integration/usage**:
    - [Deploy example](tools/Discourse/examples)

---

#### DataHub

- **Directory**: `/tools`
- **Link**: [tools/DataHub](tools/datahub)
- **Deployed in**: [https://datahub.16.171.94.204.nip.io](https://datahub.16.171.94.204.nip.io)
- **Description**: DataHub is an open-source metadata platform designed to democratise data discovery. It acts as a centralised system for companies and teams to track, manage, and find data within their organisation. Its primary aim is to streamline the process of accessing and understanding data assets, making it easier for teams to derive insights and make informed decisions.


  - **Examples of programmatic integration**:
    - [Integration example](tools/datahub/examples)

The above README provides a structured outline to document the technical aspects of the GREENGAGE project, offering a solid starting point to further elaborate on the tools and processes involved in the project.

##### Source code in: [https://github.com/Greengage-project/Documentation](https://github.com/Greengage-project/Documentation)
