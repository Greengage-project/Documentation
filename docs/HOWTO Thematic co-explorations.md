## #0: Define research questions/hypothesis to be validated to enable policy making

## #1: Preparation of co-production process including configuration of COb's community's teams 

## #2: Setup of the discussion and thematic co-exploration collection platform

## #3: Inventory of available (statistical) and required datasets’ metadata in DataHub from available and to be generated datasets

### Responsible:
Pilot Owners

### Objective
The primary goal of this step is to establish a comprehensive and organised system for managing datasets relevant to our project. By requiring pilot owners to register both existing and forthcoming datasets, we aim to create a centralised repository of metadata that will serve as a foundational resource for the technical team. This registration process will facilitate the subsequent uploading and integration of these datasets into the project's infrastructure. The overarching objective is to develop a detailed and accessible catalog of data, which will not only streamline project operations but also enhance the efficacy of data analysis and decision-making processes. This initiative is instrumental in ensuring that all stakeholders have a clear and consistent understanding of the available resources, thereby optimising the utilisation and impact of the data within the scope of the project.

### How can we achieve it?  
To achieve the following objective Pilot Owners should conduct a comprehensive identification of all existing and potential datasets within the scope of the project. This step aim to create an inventory of datasets, categorising them based on relevance, data type, source, and intended use. Furthermore, it is important to specify the way in which each dataset may be retrieved and accessed. This initial inventory will serve as the foundation for the subsequent registration process in DataHub. 

### Resources
- [Dataset Inventory](https://aitonline.sharepoint.com/:x:/r/sites/HEUGREENGAGE337/_layouts/15/Doc.aspx?sourcedoc=%7B632ec461-1851-463e-87de-01eedb9d2263%7D&action=edit&wdinitialsession=c2406669-913f-4a32-b5b5-3334b3429bd4&wdrldsc=2&wdrldc=1&wdrldr=OnSaveAsWebMethodComplete): Make a copy of the document and add any column if needed.


## #4a: Design of Citizen Science campaigns for data capturing by employing tools to capture crowdsourced data

## #4b: Gather Open Data and government datasets to gain bird's eye view for thematic co-exploration

## #5: Generation of data workflows (Data cleaning, loading and understanding)

### Responsible: Technical Team

### Objective
The objective of this step is a critical phase in the data management process, primarily focused on ensuring the quality and usability of datasets within the project's framework. This stage involves a series of preprocessing steps designed to cleanse the datasets, removing any inconsistencies, errors, or irrelevant information that might hinder analysis. Given that some datasets are updated daily, it's essential to establish automated data ingestion workflows, possibly using tools like Apache NiFi, to streamline the continuous flow of data into the main database, Apache Druid. This approach not only facilitates the efficient and reliable updating of data but also ensures that the datasets are in an optimal format and structure for analysis. The ultimate goal of this process is to enhance data accuracy and integrity, thereby enabling a deeper and more accurate understanding of the data, which is vital for informed decision-making and insightful analysis within the project.

### How can we achieve it?
To successfully load data from an API into Apache Druid using Apache NiFi, a well-structured process needs to be implemented. This process begins with the configuration of Apache NiFi to establish a reliable connection with the target API. Utilizing NiFi's robust set of processors, we can set up a scheduled task to periodically fetch data from the API. This involves using the ‘InvokeHTTP’ processor for making API calls and retrieving data. Once the data is fetched, it passes through a series of processing steps within NiFi - these may include the ‘EvaluateJsonPath’ processor for parsing JSON data, and the ‘UpdateAttribute’ processor to manage metadata. It's crucial to include a data cleansing phase, where any inconsistencies or errors in the data are rectified. This can be achieved through custom scripts or processors within NiFi. After cleaning, the data is formatted into a structure compatible with Apache Druid. Finally, the data is pushed to Apache Druid using the ‘PutDruidRecord’ processor, which ensures the data is correctly ingested into the Druid database. This entire automated workflow facilitates a continuous and efficient data pipeline from the API to Apache Druid, enabling real-time data processing and analytics.

### Resources
- [Apache NiFi documenaion](https://nifi.apache.org/docs.html)
- [Apache Druid documentation](https://druid.apache.org/docs/latest/)


## #6: Conector of dataset X with DataHub (one new row for each dataset)

### Objective

### How can we achieve it?  
To achieve the following objective we should follow several steps that will have different teams in charge:
 - **Registration of Datasets (Technical Team/Pilot Owners):** Once the datasets are identified, the next step is to register them in DataHub. This process will be conducted by the technical team, with the support of the pilot owners. The registration process will involve the creation of a metadata file for each dataset, which will be uploaded to DataHub. The metadata file will include information such as the dataset's name, description, source, and intended use. The technical team will be responsible for creating the ingestion sources for DataHub, while the pilot owners will be responsible for providing the necessary information.
 - **Dataset Verification & Documentation (Technical Team):** With the datasets registered in Datahub, technical team will be responsible for verifying and validating the data. This process will involve checking if the datasets are registered correctly. The technical team will also be responsible for adding the documentation for each dataset in which the retrieval method is specified. This step is crucial in ensuring that the data is reliable and can be used for analysis and decision-making purposes.


- [Documentation of DataHub](https://datahubproject.io/docs/)
- Video of how to create datahub sources (?)

## #7: Generation of thematic co-exploration dashboards

## #8: Generation of storylines

## #9: Generation of policy briefs' inputs
