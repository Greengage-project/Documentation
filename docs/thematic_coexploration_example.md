# Thematic co-exploration example

## Thematic co-exploration contextualisation

Thematic co-exploration in the context of Citizen Observatories refers to a collaborative approach where citizens actively participate alongside scientists and other stakeholders in exploring specific themes or topics related to environmental monitoring and observation. Citizen Observatories are platforms or frameworks that leverage the collective efforts of individuals, often non-scientists, to gather, share, and analyse environmental data, typically facilitated by digital tools and technologies.

In thematic co-exploration, the focus is on a particular theme or subject matter, such as air quality, water pollution, biodiversity, or climate change phenomena. The key aspects of this approach include:

- **Collaborative Research:** Citizens collaborate with scientists, environmental experts, policy-makers, and other stakeholders. This collaboration is not just about data collection but also involves jointly defining research questions, methodologies, and analysis.
- **Citizen Engagement:** Citizens are not merely data collectors; they are integral to the research process. They contribute through observations, local knowledge, and experiences, thereby adding valuable context and richness to scientific data.
- **Mutual Learning:** There is a reciprocal transfer of knowledge. Scientists can learn from the lived experiences and local knowledge of citizens, while citizens gain a better understanding of scientific methods and environmental issues.
- **Empowerment and Ownership:** By engaging in the research process, citizens gain a sense of ownership and empowerment. This can lead to increased awareness and action on environmental issues at the local level.
- **Technology Use:** Digital tools such as mobile apps, online platforms, and sensor technologies often facilitate thematic co-exploration. These tools enable easy data collection, sharing, and visualization.
- **Community Building:** This approach fosters community engagement and networking, as it brings together people with shared interests in specific environmental issues.
- **Policy Impact:** The insights gained from thematic co-exploration can inform environmental policies and decision-making processes, making them more reflective of local needs and conditions.

In summary, thematic co-exploration in Citizen Observatories represents a participatory, inclusive approach to environmental research and monitoring, emphasizing collaboration, mutual learning, and community engagement.

## Citizen Observer Journey

In GREENGAGE we propose a Citizen Observer Journey that represents the journey that the citizen observers follow when conducting a thematic co-exploration. This journey is a structured pathway designed to empower citizens and stakeholders to actively engage in environmental observation and decision-making processes. It unfolds in three distinct yet interconnected phases, each integral to the overall success and impact of the GREENGAGE thematic co-explorations. These phases are:

1) Community and Co-production Process Management: Throughout this phase, the emphasis is on building a strong, informed, and active community which collaborates through a co-production process.
2) Data Crowdsourcing and Capture: In this phase is where the groundwork of previous phase materialises into concrete data collection activities. This phase is characterized by active participation, leveraging technology to gather vital environmental data.
3) Data Analysis and Insights Generation: In this phase the collected data is transformed into actionable insights. This phase is where the data becomes a powerful tool for understanding and influencing environmental policy. 

## Example of a simple thematic co-exploration

In this example, we will explain the steps to conduct a complete thematic co-exploration process using some of the tools provided by the Greengage platform. To support the explanation, we will use the following video. The steps described below will be timestamped in the video to facilitate the understanding of them.

In the video we will show the use of four tools that are part of the *Data Analysis and Insights Generation* phase, however, 

### Objective

The main objective of this thematic co-exploration is to **analyse the air quality data** from the city of Bristol. The analysis will be conducted to identify the air quality in the city and the different factors that may affect it. Thus, we will **gather the data** from the different sensors deployed in the city and **load** them into the database. Then we will **analyse the data and create visualisations** to facilitate the understanding of the data. Finally, we will load the data and visualisations into the **data catalogue** to facilitate the access to them.

### Dataset

For this example we employed a single dataset from the [Air Quality Data Continuous](https://services2.arcgis.com/a4vR8lmmksFixzmB/arcgis/rest/services/Air_Quality_Data_Continuous_2023/FeatureServer/0/) dataset. This dataset contains the air quality data from the city of Bristol. The data is collected from the different sensors deployed in the city. The data is collected every hour and it is stored in the dataset. The dataset contains the following fields:

- Date_Time
- Site_ID 
- NOx 
- NO2 
- NO 
- PM10 
- O3 
- Temperature 
- ObjectId 
- ObjectId2 
- NVPM10 
- VPM10 
- NVPM2_5 
- PM2_5 
- VPM2_5 
- CO 
- RH 
- Pressure 
- SO2 

Note that **not** all the fields are present in all the rows.

### Analysis and visualisation

In this example, we only analysed a unique dataset, however, in a real scenario we would have to combine several datasets to conduct a complete analysis and extract insights from them. 

explica qué datasets tienen que ser combinados, qué problemas hay que resolver (curation/harmonization) para poder luego aplicar algo de analisis y visualiar

### Outcome



indica cómo a partir de los datos crudos, una vez correlacionados, filtrados, consultados, analizados y visualizados los participantes pueden sacar conclusiones. Esto es lo que es una thematic co-exploration





Importantly, to really deliver a thematic co-exploration is paramount to also tackle the stage 1) Community and co-production process management which is documented in Collaborative Environment - GREENGAGE Documentation

Ya sabes que soy un obsesivo "curator"

Que lo que has hecho está bien, pero lo entiendes tú y quizás yo con esfuerzo

In this example, we will explain the steps to conduct a complete thematic co-exploration process using the tools provided by the Greengage platform. To support the explanation, we will use the following video. The steps described below will be timestamped in the video to facilitate the understanding of them.

[![Citizen Observer Journey](./assets/citizen_observer_journey.png)](https://www.youtube.com/watch?v=6VZLyuLVSPQ)


## Steps covered in this thematic co-exploration

1. [**Data collection**](https://www.youtube.com/watch?v=6VZLyuLVSPQ): In this step, we will collect the data from the different sensors that we have deployed in the city. In this example, we will use the [Apache NiFi](https://nifi.16.171.94.204.nip.io/nifi) tool to collect the data from the open API because it cannot be accessed by [Apache Druid](https://druid.16.171.94.204.nip.io/) directly. Thus, we created a NiFi flow that iteratively gathers the data from the API and stores in a local file.

2. [**Data ingestion and storage**](https://youtu.be/6VZLyuLVSPQ?t=216): In this step, we will ingest the data from the local file to the database. In this example, we will use the [Apache Druid](https://druid.16.171.94.204.nip.io/) tool to ingest the data from the local file.

3. [**Data visualisation and dashboard creation**](https://youtu.be/6VZLyuLVSPQ?t=345): In this step, we will load the data from the database into [Apache Superset](https://superset.16.171.94.204.nip.io/) to create visualisations that may support the decision-making process. Furthermore, we will create a dashboard aggregating the different visualisations to facilitate the understanding of the data.

4. [**Data catalogue**](https://youtu.be/6VZLyuLVSPQ?t=448): In this step, we will add references to the data and the visualisations created in previous steps to the [DataHub](https://datahub.16.171.94.204.nip.io/) tool. DataHub allows to create a catalog of data that shows the schema, documentation, lineage, properties and common queries that can be done to the data. Furthermore, the visualisations can also be referenced from this catalog and the connections between them can be established.