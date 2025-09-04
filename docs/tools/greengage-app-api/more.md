# Data structure

## General

The greengage app api supports various queries and mutations.

In general, these are functions related to missions and points of interest. All this data is available on a map and is merged via the adaptive map service.

Spatial information will be served as GeoJSON.

### Map
---

#### Cities:

All participating cities and regions can be accessed via the following query.

```gql
query Cities {
  cities {
     id 
     name
  }
}
``````

Output:

```json 
{
  "data": {
    "cities": [
      {
        "id": "9ae477a7-fe24-4da8-b127-9d11c8d89da7",
        "name": "North Brabant"
      }
    ]
  }
}
``````
---

#### City

To request a single city based on it's uniqiue ID you can use the following query:

```gql
query City {
  city(id:"9ae477a7-fe24-4da8-b127-9d11c8d89da7") {
     id 
     name
  }
}
```

Output:

```json 
{
  "data": {
    "city": {
      "id": "9ae477a7-fe24-4da8-b127-9d11c8d89da7",
      "name": "North Brabant"
    }
  }
}
````

The type of City also contains an attribute "grid" (not requested above which allows you request the related GEOJONFeature type).

---

Of course the api also provides methods to create, update and delete new regions. Therefore you will need an account with the permission to do so. Requests for that can be placed at support@sushi.dev


### Current City

If you have a geo location and you want to know which participating city is related to this location you can make use of the following mutation query

```gql
mutation GetCurrentCity($latitude: Float) {
    currentCity(latitude:47.08998207808926, longitude: 15.451401036539828) {
        id
        name
        geo_start {
            latitude
            longitude
        }
        geo_stop {
            latitude
            longitude
        }
        grid {
            data {
            properties {
                missionSet {
                id
                }
                poiSet {
                id
                }
            }
            geometry {
                ... on GeoJSONMultiPolygon {
                coordinates
                }
            }
            }
        }
    }
}
}
```

Output:

```json 
{
  "data": {
    "currentCity": {
      "id": "9ae477a7-fe24-4da8-b127-9d11c8d89da9",
      "name": "Graz",
      "geo_start": {
        "latitude": 47.012595,
        "longitude": 15.349914
      },
      "geo_stop": {
        "latitude": 47.135208,
        "longitude": 15.534402
      },
      "grid": {
        "data": [
          {
            "properties": {
              "missionSet": {
                "id": "NDcuMDE0ODQwNzc3OTM3fDE1LjM0OTkxNHw0Ny4wMTI1OTV8MTUuMzUzMjExNTU3NDM4"
              },
              "poiSet": {
                "id": "NDcuMDE0ODQwNzc3OTM3fDE1LjM0OTkxNHw0Ny4wMTI1OTV8MTUuMzUzMjExNTU3NDM4"
              }
            },
            "geometry": {
              "coordinates": [
                [
                  [
                    15.349914,
                    47.012595
                  ],
                  [
                    15.349914,
                    47.01484077793747
                  ],
                  [
                    15.353211557437902,
                    47.01484077793747
                  ],
                  [
                    15.353211557437902,
                    47.012595
                  ],
                  [
                    15.349914,
                    47.012595
                  ]
                ]
              ]
            }
          },
          ...
        ]
    }
}
```
Pleae be aware that not all possiblities to request the data has been used in the example above. Please always consider to use https://api-stage.greengage.dev/cp due to the fact that it has the complete documentation of the api.

- MissionSet
- PoiSet

will display related missions or point of interests in relation to the given tile.
A tile is a section on the map which displays a certain square (250mx250m).

### Missions and Point of Interests

Missions and points of interest are central components of the Greengage api.

Missions are a wide variety of tasks that need to be completed. Greengage offers numerous different mission types to meet the requirements.

Point of Interests sind hingegen Punkte auf der Karte. Mit ihnen sind Missionen verbunden.

#### Types of point of interest

Currently the following type of points are supported:

- NATURE
- COMMERCE
- ENTERTAINMENT
- DEFAULT (if nothing above apply)

#### Types of missions

- PHOTO
- VALIDATION
- SURVEY
- WALK
- DATASET
- MINDEARTH
- MODE (coming soon)

##### Photo

This type should be used if you want to get images from the participating user.

##### Validation

This type should be used if you want to request validations from users. They have to validate certain data

##### Survey

This type can be used if you want to have certain questions to certain topics. You can define Surveys. Each survey can have multiple questions.
A mission is fullfilled if the user has submitted all answers.

##### Dataset

This type requires a set of information which is defined in the mission.
Examples for that are:

- Ratings
- Data values like height, weight, amount etc.

##### Walk

This type is currently requesting a geojson as submission.

##### Mode (ETA Mid March 2024)

This type will only require MODE-Blobs (at least one). Mission will be completed if user stops the submission.

##### Mindearth

First 3rd party provider for missions. This type of mission will be displayed as an external mission and will require to provide a deeplink into the mindearth/mindview app.

### Survey

There are multiple options to query survey informations

Query:
- surveys
- survey (a single by id)

```gql 
{
  surveys {
    id
    title
    questions {
       question
       options {
          key
          text
       }
    }
  }
}
```

To create, update or delete surveys you can make use of the following mutations. 

- createSurvey
- createSurveyQuestion
- updateSurvey
- updateSurveyQuestion
- deleteSurvey
- deleteSurveyQuestion

If you want to submit data to a survey make use of the 

"submitToSurvey" - Mutation.

> A detailed explaination which data is required for a single mutation or query can be found at https://api-stage.greengage.dev/cp which offers playground for the GQL stuff.