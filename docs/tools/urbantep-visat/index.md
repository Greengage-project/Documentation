# UrbanTEP / VISAT

### Introduction

VISAT, standing for Visualization and Analytical Toolbox, is a cornerstone technology provided by GISAT within the Urban Thematic and Exploration Platform (UrbanTEP). This tool is ingeniously designed to facilitate the seamless integration, exploration, visualization, and analysis of diverse datasets. Moreover, VISAT is equipped with extensive collaborative features, enhancing data and result sharing among users. Developed on the robust foundation of GISAT's Panther framework, VISAT is presently undergoing substantial technological advancements. Within the GREENGAGE project, the VISAT technology, as an integral part of UrbanTEP, extends its support to Pilot solutions, ensuring capabilities such as data integration and exploration are as effective and efficient as they are in the UrbanTEP environment.

### Framework features

VISAT visualization capabilities are powered by a robust combination of advanced libraries, chiefly Nivo charts and DeckGL, which are integrated into GISAT's Panther framework. This framework is designed to support both front-end and back-end development, providing a seamless web application experience.

#### Charts

Nivo charts, a rich library for creating a wide array of responsive and interactive data visualizations, is built on top of D3.js, a powerful tool for manipulating documents based on data. This foundation allows Nivo charts to offer a high level of detail and customization in visual representations.
VISAT supports a diverse range of Nivo chart types, including but not limited to bar, line, pie, radar, and heatmap charts. Each chart type is designed to be highly customizable to suit different data visualization needs.
The charts are interactive, enabling users to zoom, filter, and drill down into data for more detailed insights. They are also responsive, ensuring optimal viewing across different devices and screen sizes.

#### Map components

DeckGL is a WebGL-powered framework optimized for exploring and visualizing large-scale geospatial data. Its integration into VISAT enables the rendering of large data sets in a performant and visually appealing manner.
DeckGL's layered approach allows for the creation of complex 2D visualizations, combining multiple layers of data (such as maps, scatter plots, and hexagon layers) to create rich, informative visual experiences.
DeckGL supports interactive features like tooltips, clickable objects, and viewport transitions, enhancing the user's ability to engage with and understand spatial data.

### Architecture

Visualization and Analytics Toolbox (VISAT) is based on an open extendable framework, designed as user-friendly and intuitive interface and allows data to be presented using dynamic and interlinked map and non-map component (e.g., charts, tables and graphs). The platform features two interfaces, a Web GUI, and a REST API that handles communication between multiple parts of the application, including front-end and back-end.

![Use case of keycloak](./assets/architecture.png)

#### BackEnd

Backend services - set of microservices, written in JavaScript for the NodeJS environment and dockerized for easier maintenance and better scalability. At the same time, storage technologies are used according to the nature of the data + own spatial data in PostgreSQL / PostGIS. Complex metadata structures and dynamic database schemas are handled using MongoDB

#### FrontEnd

Frontend components - a set of packages written in ReactJS, using Redux for state management, D3JS for graph visualization and LeafletJS and DeckJS for map elements. 
The deployment strategy of the final product is characterized as a Cloud solution (SaaS) and can run on various platforms that support the Docker technology. The GISAT’s framework, used for VISAT creation, is based on open-source development dependencies and includes hundreds of packages that are constantly updated by third-party developers. The most common technologies and dependencies used are NodeJS, Postgres, MongoDB, and S3 storage. Overall, the Urban TEP is a reliable and efficient tool for geospatial data analysis and visualization.


### Use Case Scenario

Description: Detail a typical use case scenario, demonstrating how the tool operates within a workflow or system.
(if possible) Visual Aid: Include a diagram or flowchart to illustrate the use case, making it easier to understand the tool's application in a real-world scenario. 

## References 
    Description: list here a set of external references where User Manual of further information to tool is provide.
    It is suggested to include: a) User manual link and b) Link to PDF of description of tool in GREENGAGE catalogue

- User manual
- [GREENGAGE catalogue entry](https://aitonline.sharepoint.com/:f:/r/sites/HEUGREENGAGE337/Shared%20Documents/WP4%20CO%20enabling%20infrastructure%20and%20interoperable/D4.1%20GREEN%20Engine%20and%20manuals/catalogue?csf=1&web=1&e=tA14VT)
