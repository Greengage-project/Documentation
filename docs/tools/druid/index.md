# Apache Druid

### Introduction

Apache Druid is a high-performance, distributed data store designed for real-time analytics on large-scale datasets. It excels in scenarios where fast queries and ingest are crucial, such as in business intelligence applications, operational analytics, and real-time monitoring. Druid is known for its ability to handle high concurrency, its columnar storage format, and its ability to scale horizontally. It supports streaming and batch data ingestion, and its architecture allows for efficient data summarisation, fast aggregation queries, and low-latency data access. Druid is often used in conjunction with big data technologies like Hadoop and Kafka, making it a popular choice for organisations looking to implement real-time analytics solutions.

Apache Druid is intended to be used by data engineers or data scientists who are familiar with data warehousing concepts and are looking for a high-performance, scalable solution for real-time analytics. Thus, this tool will be handled by the Greengage team and the data stored in it will be employed by non-tech users through Apache Superset or other tools.

### Features of Apache Druid

- **Real-time Data Ingestion:** Druid can ingest data in real-time, allowing for immediate data querying and analysis. This feature is crucial for applications that require up-to-the-minute data, like monitoring and event-driven systems.
- **Horizontal Scalability:** It can scale horizontally across commodity servers, enhancing performance and storage capacity linearly with the addition of more resources. This makes it well-suited for handling large and growing datasets.
- **Columnar Storage Format:** Druid stores data in a columnar format, which is optimised for fast querying. This format allows for efficient data compression and rapid aggregation, making it ideal for analytics workloads.
- **Highly Concurrent:** The system can handle a high number of concurrent queries, making it suitable for environments with multiple users or applications accessing the data simultaneously.
- **Fast Aggregations and Filters:** Druid is designed for quick data aggregations and filtering, enabling rapid, on-the-fly data analysis. This is particularly beneficial for business intelligence and reporting use cases.
- **Approximate Queries:** It supports approximate queries, such as top-N and count-distinct, which can be executed faster than exact computations at the cost of some accuracy. This is useful for large-scale data exploration.
- **Data Summarization and Roll-up:** Druid can automatically summarise and roll-up data at ingestion time, reducing the data volume and speeding up query times. This is particularly useful for time-series data.
- **Fault Tolerance:** The system is designed to be fault-tolerant, with data replication and recovery mechanisms in place. This ensures high availability and data integrity.
- **Flexible Data Model:** Druid supports a flexible schema-on-read model, allowing ingestion of semi-structured data and different data types.

### Use Case Scenario

#### Context:
In an urban citizen observatory, members of the community actively participate in monitoring and analysing environmental conditions. One of the critical concerns in many cities is air quality, which directly impacts public health and quality of life.

#### Objective:
To monitor, analyse, and visualise air quality data across different parts of the city to identify pollution hotspots, understand temporal trends, and engage the public in environmental awareness and decision-making processes.

#### Implementation Using Apache Druid:

1) Data Collection:

    - Deploy IoT sensors across the city to measure air quality indicators like PM2.5, PM10, NO2, CO2, and Ozone.

2) Data Ingestion and Storage with Apache Druid:

    - Stream the sensor data into Apache Druid for real-time ingestion and storage.
    - Configure Druid to handle the high volume of time-series data from the sensors, optimising for fast access and query performance.

3) Real-time Data Analysis and Aggregation:

    - Perform real-time data analysis using Druid's fast aggregation and filtering capabilities.
    - Aggregate data at various time intervals to observe trends and detect anomalies in air quality.

4) Integration with Apache Superset for Visualisation:

    - Connect Apache Superset to Apache Druid to leverage its advanced visualisation capabilities.
    - Ensure real-time data is accessible in Superset for immediate analysis and dashboarding.

5) Dashboard Creation and Data-Driven Decision Making (Out of Scope of Apache Druid):

    - Develop an interactive dashboard in Superset, powered by the real-time data processed in Druid.
    - Use insights from the Superset dashboard, underpinned by Apache Druid's real-time analytics, to guide community actions and policy recommendations.



## References 
- [Apache Druid documentation](https://druid.apache.org/docs/latest/design/)