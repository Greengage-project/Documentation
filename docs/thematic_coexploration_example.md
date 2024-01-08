# Thematic co-exploration example

In this example, we will explain the steps to conduct a complete thematic co-exploration process using the tools provided by the Greengage platform. To support the explanation, we will use the following video. The steps described below will be timestamped in the video to facilitate the understanding of them.

![Thematic co-exploration example](https://aitonline.sharepoint.com/:v:/r/sites/HEUGREENGAGE337/Shared%20Documents/WP4%20CO%20enabling%20infrastructure%20and%20interoperable/GREEN%20Engine/Sprint3/DEMO_GreengageDatamanager.mp4?csf=1&web=1&e=Yh7rDm)

## Steps conducted in this thematic co-exploration

1. **Data collection**: In this step, we will collect the data from the different sensors that we have deployed in the city. In this example, we will use the [Apache NiFi](https://nifi.16.171.94.204.nip.io/nifi) tool to collect the data from the open API because it cannot be accessed by [Apache Druid](https://druid.16.171.94.204.nip.io/) directly. Thus, we created a NiFi flow that iteratively gathers the data from the API and stores in a local file. The description of this process is timestamped in the video from 00:00 to 03:35.

2. **Data ingestion and storage**: In this step, we will ingest the data from the local file to the database. In this example, we will use the [Apache Druid](https://druid.16.171.94.204.nip.io/) tool to ingest the data from the local file. The description of this process is timestamped in the video from 03:35 to 05:45.

3. **Data visualisation and dashboard creation**: In this step, we will load the data from the database into [Apache Superset](https://superset.16.171.94.204.nip.io/) to create visualisations that may support the decision-making process. Furthermore, we will create a dashboard aggregating the different visualisations to facilitate the understanding of the data. The description of this process is timestamped in the video from 05:45 to 07:30.

4. **Data catalogue**: In this step, we will add references to the data and the visualisations created in previous steps to the [DataHub](https://datahub.16.171.94.204.nip.io/) tool. DataHub allows to create a catalog of data that shows the schema, documentation, lineage, properties and common queries that can be done to the data. Furthermore, the visualisations can also be referenced from this catalog and the connections between them can be established.The description of this process is timestamped in the video from 07:30 to 11:00.