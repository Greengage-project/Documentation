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
- **Deployed in**: [https://discourse.greengage-project.eu](https://discourse.greengage-project.eu)
- **Description**: Discourse is a modern, open-source discussion platform designed for building and managing community forums. Known for its user-friendly interface and robust features, it supports real-time discussions, multimedia integration, and comprehensive moderation tools. Ideal for a wide range of communities, from small groups to large enterprises, Discourse fosters engagement, knowledge sharing, and collaboration.

  - **Examples of programmatic integration/usage**:
    - [Deploy example](tools/Discourse/examples)

---

#### DataHub

- **Directory**: `/tools`
- **Link**: [tools/DataHub](tools/datahub)
- **Deployed in**: [https://datahub.greengage-project.eu/](https://datahub.greengage-project.eu/)
- **Description**: DataHub is an open-source metadata platform designed to democratise data discovery. It acts as a centralised system for companies and teams to track, manage, and find data within their organisation. Its primary aim is to streamline the process of accessing and understanding data assets, making it easier for teams to derive insights and make informed decisions.

  - **Examples of programmatic integration**:
    - [Integration example](tools/datahub/examples)

---

#### Apache Superset

- **Directory**: `/tools`
- **Link**: [tools/Superset](tools/superset)
- **Deployed in**: [https://superset.greengage-project.eu/](https://superset.greengage-project.eu/)
- **Description**: Apache Superset is a sophisticated, open-source data exploration and visualisation platform designed to transform the way analysts and businesses interact with their data. As a versatile web application, it empowers users with tools for deep data exploration and the creation of beautifully rendered visualisations and dashboards. Superset is renowned for its user-friendly interface, democratising data analysis by enabling users of all skill levels to engage with complex datasets, design compelling visual narratives, and derive actionable insights. Offering a rich array of features, including a variety of chart types, interactive dashboards, and an integrated SQL editor, Apache Superset stands out as a comprehensive solution for modern data analytics and business intelligence needs.

  - **Examples of integration of sources with Superset**:
    - [Integration example](tools/superset/examples)

---

#### Apache Druid

- **Directory**: `/tools`
- **Link**: [tools/Druid](tools/druid)
- **Deployed in**: [https://druid.greengage-project.eu](https://druid.greengage-project.eu)
- **Description**: Apache Druid is a high-performance, distributed data store designed for real-time analytics on large-scale datasets. It excels in scenarios where fast queries and ingest are crucial, such as in business intelligence applications, operational analytics, and real-time monitoring. Druid is known for its ability to handle high concurrency, its columnar storage format, and its ability to scale horizontally. It supports streaming and batch data ingestion, and its architecture allows for efficient data summarisation, fast aggregation queries, and low-latency data access. Druid is often used in conjunction with big data technologies like Hadoop and Kafka, making it a popular choice for organisations looking to implement real-time analytics solutions.

  - **Examples of integration of sources with Druid**:
    - [Integration example](tools/druid/examples)

---

#### Apache NiFi

- **Directory**: `/tools`
- **Link**: [tools/NiFi](tools/nifi)
- **Deployed in**: [https://nifi.greengage-project.eu/nifi](https://nifi.greengage-project.eu/nifi)
- **Description**: Apache NiFi is a robust, open-source software solution designed for efficient and reliable data ingestion, processing, and distribution. It is particularly noted for its user-friendly graphical interface that simplifies the design, management, and monitoring of data flows. NiFi supports highly configurable and flexible data routing, system mediation, and transformation capabilities, enabling the handling of diverse data formats and systems. Key features include its scalability to accommodate large volumes of data, built-in data security measures, and extensive audit trails for data provenance. Primarily used in scenarios requiring complex data pipelines, such as real-time data processing and integration across varied systems, Apache NiFi stands out for its ease of use and comprehensive data management capabilities.

  - **Examples of integration of sources with NiFi**:
    - [Integration example](tools/nifi/examples)

---

#### Libelium MQTT sensor integration

- **Directory**: `/tools`
- **Link**: [tools/sensorsIntegration](tools/sensorsIntegration)
- **Description**: This documentation contains all the information necessary to connect and configure the IoT sensors provided by Libelium to MQTT broker and integrate it in other platforms or architectures.

The above README provides a structured outline to document the technical aspects of the GREENGAGE project, offering a solid starting point to further elaborate on the tools and processes involved in the project.

#### Greengage APP

- **Directory**: `/tools`
- **Link**: [tools/greengage-app-api](tools/greengage-app-api)
- **Description**: The greengage app api is mesh of multiple services which are provided via a single gateway. This underlying docuemntation will show you in a simple way how you can interact with application and how you can adopt your application to fit in the ecosystem.

#### Wordpress

- **Directory**: `/tools`
- **Link**: [tools/wordpress](tools/wordpress)
- **Description**: WordPress is a highly popular and versatile Content Management System (CMS) renowned for its ease of use and flexibility. It's an ideal platform for creating a wide range of websites, from personal blogs to large corporate portals. WordPress is known for its extensive theme and plugin ecosystem, which allows users to customize their sites to fit their specific needs and enhance functionality.

  - **Examples of programmatic integration/usage**:
    - [With Keycloak](tools/wordpress/integration/#wpKeycloak)
    - [With Discourse](tools/wordpress/integration/#wpdiscourse)

##### Source code in: [https://github.com/Greengage-project/Documentation](https://github.com/Greengage-project/Documentation)
