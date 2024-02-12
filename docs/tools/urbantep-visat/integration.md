# UrbanTEP / VISAT

## Usage & Integration Guide for Third-Party Services

The framework for building applications (such as UrbanTEP/VISAT) allowing visualisation and efficient analysis of geospatial data. To enable this, at the core of the framework there is a system of interlinked metadata structures, which enables the framework to understand the data on a conceptual level, facilitating easy access to the data tailored to its nature.

For introducing new data sources into the system, the most important (and in case of automated addition of data necessary) aspect is **consistent and unique identification of all concepts and attributes**.


### Data templates

The key concepts are templates - metadata structures that describe a certain type of data irrespective of its specific context such as time and place.

**Layer Template**

Describes a type of spatial layer. An example layer template could be “Land cover”, “Population density”, “World Settlement Footprint” etc.
Any specific data file/table needs to be paired to a layer template, and the same kind of data, typically across different times and locations, needs to be paired with the same layer template each time.

Identifying templates:
- Names of layer types routinely change, for this reason using the name alone is often not enough
- If communicating with our API directly, UUIDs are used. If we are accessing an external system, any form of unique identifier will do
- If there are more variants of similar data (e.g. the same nature of data resulting from two different configurations of a processing algorithm) that are to be distinct, this needs to be reflected in distinct templates
- If the layer type is found within a tree of layer types, it needs to be identified uniquely across the whole tree, not just within the parent node

Parameters needed for basic function:
- Id (see above, needs to be supplied)
- Name (can be statically supplied or defined on our side)
- Corresponding style/symbology (can be statically supplied or defined on our side)

**Attribute**

Describes a type of attribute / indicator connected to a spatial layer. For example, “Land use”, “Primary education rate”, “Area”, 

Parameters needed for basic function:
- Id (similar to layer template)
- Name (can be statically supplied or defined on our side)
- Units (can be statically supplied or defined on our side), e.g. ‘km2’, ‘inhabitants’


### Data sources

Data sources are technical metadata structures, used by components of the system to understand how to work with the data. They describe where the data is stored (local database, filesystem, remote API etc.) and what format it is in (we have DS types for e.g. PostGIS, Cloud Optimised GeoTIFF, WMTS etc.).

Based on data source type, specific methods are used to work with the data and transform it for the rest of the system (which uses mostly custom GeoJSON, only in case of display in map formats more suited for work with large datasets).

Additionally, data sources can also contain information useful for human understanding of the datasets (largely metadata in the usual sense).

Parameters needed for basic function (apart from the data itself):
- Id
- Type
- Type-specific information necessary for data retrieval


### Relations

Relations, linking individual data sources to respective data templates, while not metadata structures per se, are what allows the system, thus the apps built on top of it, and thus ultimately the users to conceptually work with the underlying data according to its nature as opposed to just as datasets in a GIS application.

They also drive the need for the parameters specified with each metadata type, for consistency and identifiability of each instance of them.

Apart from just linking the data to its describing template, the system uses relations to make further sense in the data by utilising other complementary structures, which describe various aspects of the particular data, but mainly of the particular relation, owing to specific requirements of specific applications. That is, the same data can be described slightly differently in different contexts, which is why this is not coupled with either the data itself or the template.
(In effect, these complementary structures modify the relationship between the data and the template.)


### Modifiers (common metadata objects)

Modifiers are items representing a metadata concept (time, place,...) common to multiple data layers (and thus usable to connect data relating to it together), or distinguishing multiple variations of the same data.

These are not required if not used in the application to filter available data or for navigation, but have to be defined in such cases.

**Period**

Describes a time period for which given data is valid. It is used mainly for larger periods common to more datasets (e.g. for time series, it would be used for the whole period covered, but not for individual measurement times)

Parameters needed for basic function:
- Id
- Period (ISO 8601)
- Name - if different from period, e.g. ‘planting season 2015’. It’s not necessary to provide names if they are derived from the period in a consistent way, e.g. “January ‘23”, “February ‘23”, etc.

**Place**

Describes a geographic area to which given data corresponds.

Parameters needed for basic function:
- Id
- Name
- Geometry (polygon, bounding box, point coordinates)

**Case**

In case the same kind of data is available e.g. for multiple different entities, those are differentiated by this data type. A case can represent any kind of subject of the data - e.g. occurrence maps may be available for different species; in that case, ‘occurrence’ would be the layer template and different species would be different cases. This is so that the system can understand that all occurrence maps are the same in nature, yet differentiate among different species.

(currently under development is possibility to link to multiple cases)

Parameters needed for basic function:
- Id
- Name


The last two modifier types, scope and scenario, are largely legacy types and their use cases may be better served by different means in newer versions of the framework. Be sure to consult with us if your specific use cases might benefit from using these.

**Scope**

Scope is used for separating large amounts of data and metadata into distinct logical collections (e.g. thematic datasets, worldwide data vs. locally specific data, etc.)

Parameters needed for basic function:
- Id
- Name

**Scenario**

While the other types describe what the data is, scenarios describe what the data could be. They are used in specific use cases when slightly different versions of the same data (relating to all the same above structures) are prepared either by alternating some aspect of the input, or some parameters of an algorithm the output of which the data is.
For example, we have used scenarios for computing heat islands based on changes in several features in land cover layers, or for comparing how different tolerance values affect the results of an algorithm.

Parameters needed for basic function:
- Id
- Name

The above mentioned metadata structure types are necessary in most of the cases to enable the majority of the system to effectively work with the data. As such, they are used in the majority of cases and/or by the majority of components of the system.
In addition to those, the system utilises other types, either for more specific use cases, or in specific components of the system.


### Area trees

Area trees represent administrative or statistical units, areas of interest, etc. In principle they work very similar to layer templates, with added relations between multiple levels of subdivision (granularity).

Area tree
The basic structure, defining a set (tree) of areas/units. This could, for example, be ‘GADM’.
Each tree contains one or more levels.

Parameters needed for basic function:
- Id
- Name

**Area tree level**

A level is in essence a specialised form of a layer template - it is connected to a data source, which can differ based on modifiers - with additional information about how individual spatial features relate to features in a higher level. An example of an area tree level would be ‘GADM1’, connected to a data source where each feature also has information about the parent feature from ‘GADM0’.

Parameters needed for basic function:
- Id
- Name
- Area tree
- Level (index)


### Style

Describes a style, or symbology, for a layer template. For a wider feature set, we use a custom format, but for simple styling, we’re able to convert to it from e.g. an SLD.
Multiple styles can be used with one layer template, and one style can be used by multiple layer templates.

Parameters needed for basic function:
- Id
- Name (if styles can be changed by the user)


### Tag

To allow for building custom structure or hierarchy upon any existing metadata structure type, any instance of those can be tagged. This enables the structure to be dynamically updated and administered.

Parameters needed for basic function:
- Id
- Name


### Users

Access rights are set for any metadata structure type, and for either users or user groups.
The system is able to work with external authentication providers using OAuth 2 (under development).

**User**

A single user account.

Parameters needed for basic function:
- Id
- e-mail/passphrase or external system and user identification

**User group**

A group of users, which usually holds most access rights. A user may be part of multiple groups.

Parameters needed for basic function:
- Id
- Name

**URL access** (under development)

Apart from logged-in user accounts, access to content can be granted via a key in a link to the application. This can also be combined with standard user access rights.


### View

Any state of the application, or partial state, can be saved, including the displayed map layers, visualisations, map position, open tool windows, etc. 
(under development)

(The framework does not support externally loaded views).
