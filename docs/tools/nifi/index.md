# Apache NiFi

### Introduction

Apache NiFi is a robust, open-source software solution designed for efficient and reliable data ingestion, processing, and distribution. It is particularly noted for its user-friendly graphical interface that simplifies the design, management, and monitoring of data flows. NiFi supports highly configurable and flexible data routing, system mediation, and transformation capabilities, enabling the handling of diverse data formats and systems. Key features include its scalability to accommodate large volumes of data, built-in data security measures, and extensive audit trails for data provenance. Primarily used in scenarios requiring complex data pipelines, such as real-time data processing and integration across varied systems, Apache NiFi stands out for its ease of use and comprehensive data management capabilities.

### Features of Apache NiFi

- **Data Provenance:** It tracks data provenance, recording a detailed history of data flowing through the system, which is key for auditing and understanding the lifecycle of the data.
- **Flow Management:** NiFi enables the management of data flows in real-time, allowing users to route, transform, and process data as it moves through the system.
- **Extensible Architecture:** NiFi can be extended with custom processors, services, and other components, making it adaptable to various data processing needs.
- **Scalability:** Designed to scale out across a cluster of servers to accommodate large volumes of data and high throughput requirements.
- **Flexible Scheduling:** Users can schedule when and how often data processors run, providing control over resource utilisation and timing of data flows.
- **Back Pressure and Prioritisation:** NiFi maintains system stability by applying back pressure and data prioritisation, ensuring smooth handling of data under load.
- **Visual Command and Control:** The visual command and control feature allows users to see exactly how data is flowing through their system in real-time.
Data Buffering: NiFi buffers data between each processing step, ensuring that data is not lost in transit and can handle varying processing loads efficiently.
- **Record-Oriented Data Handling:** It supports record-oriented data handling, allowing for fine-grained data processing, which is particularly useful for complex and structured data types.
- **Integration with Diverse Systems:** NiFi integrates with a wide range of data sources and sinks, enabling interaction with numerous types of data systems and formats.

### Use Case Scenario

#### Context:
In an urban citizen observatory, members of the community actively participate in monitoring and analysing environmental conditions. One of the critical concerns in many cities is air quality, which directly impacts public health and quality of life.

#### Objective:
To monitor, analyse, and visualise air quality data across different parts of the city to identify pollution hotspots, understand temporal trends, and engage the public in environmental awareness and decision-making processes.

#### Implementation Using Apache Druid:

1) Data Collection:

    - Deploy IoT sensors across the city to measure air quality indicators like PM2.5, PM10, NO2, CO2, and Ozone.

2) Data Ingestion and Storage with Apache NiFi:

    - If the data cant be collected directly by Apache Druid we should use Apache NiFi to ingest the data from the IoT sensors.
    - Configure NiFi to gather, preprocess and clean the data, ensuring it's in the correct format for analysis and storage.
    - Set up NiFi to handle the real-time flow of data, managing any necessary transformations or routing.

3) Data Storage and Real-time aggregation:

    - Stream the processed sensor data from Apache NiFi to Apache Druid for real-time ingestion and storage.
    - Configure Druid to handle the high volume of time-series data from the sensors, optimizing for fast access and query performance.

Next steps in the process (Data integation, visualisation and data-driven decision making) are not handled by Apache NiFi, thus, we will not cover them in this guide.

## References 
- [Apache NiFi documentation](https://druid.apache.org/docs/latest/design/)
- [GREENGAGE catalogue entry](https://aitonline.sharepoint.com/:w:/r/sites/HEUGREENGAGE337/_layouts/15/Doc.aspx?sourcedoc=%7BEF4FB6E5-F62F-4311-8B42-6224DE438401%7D&file=Apache_NIFI_GREENGAGE-Academy_Resources.docx&action=default&mobileredirect=true)
