# GREENGAGE API

## Overview

The GREENGAGE API is a GraphQL-based API that provides access to all functionality of the GREENGAGE platform. It serves as the backend for the GREENGAGE mobile apps and can be used for custom integrations.

**API Endpoint**: `https://api.greengage.dev/graphql`

**Technology**: Apollo Server (GraphQL)

## Important Naming Convention

!!! warning "City vs Observatory"
    In the API, **Observatories are referred to as "City"** (e.g., `city`, `cities`, `updateFavoriteCity`). This naming exists for historical reasons and has been retained for backwards compatibility. When you see "City" in the API, it refers to a **Citizen Observatory**.

## Authentication

The API supports multiple authentication methods:

| Method | Description |
|--------|-------------|
| **Email/Password** | Register and login with email credentials |
| **Keycloak** | OAuth-based authentication via Keycloak |
| **Apple/Google** | Social login (handled via Keycloak) |

### Getting a Token

```graphql
mutation Login {
  login(email: "user@example.com", password: "yourpassword") {
    token
    refresh_token
  }
}
```

### Token Lifetime

!!! info "Token Expiration"
    The access token has a short lifetime of **5 minutes** for security reasons. Use the refresh token to obtain a new access token when it expires.

| Token Type | Lifetime | Purpose |
|------------|----------|---------|
| **Access Token** | 5 minutes | Used for all API requests |
| **Refresh Token** | 30 days | Used only to obtain new access tokens |

### Refreshing Tokens

When your access token expires, use the refresh token to get a new one:

```graphql
mutation RefreshToken($token: String!) {
  refreshToken(token: $token) {
    token
  }
}
```

![Refresh Token](/assets/greengage-app/console/images/refresh-token.png)

!!! warning "Security Best Practice"
    Store tokens securely. Never save them in local storage for web applications. Use secure HTTP-only cookies or secure storage mechanisms instead.

### Using the Token

Include the token in the `Authorization` header:

```
Authorization: Bearer <your-token>
```

## GraphQL Schema

### Core Types

#### City (Observatory)

Represents a Citizen Observatory where citizens can participate.

```graphql
type City {
  id: String!
  name: String
  geo_start: GeoPosition
  geo_stop: GeoPosition
  grid: TilePaginationList
  missionsList: MissionList
  joinable: Boolean
}
```

#### User

```graphql
type User {
  id: ID!
  firstname: String
  lastname: String
  displayname: String
  email: String
  phone: String
  city: City              # The user's current Observatory
  avatar: FairuAsset
  language: String
  score: Int
  badges: [UserBadge]
  created_at: String
  updated_at: String
}
```

#### Mission

Missions are tasks that citizens can complete within an Observatory.

```graphql
type Mission {
  id: ID!
  title: String
  description: String
  asset: FairuAsset
  provider: MissionProvider
  type: MissionType
  duration: Int           # Estimated duration in minutes
  latitude: Float
  longitude: Float
  geojson: GeoJSON
  active: Boolean
  status: MissionStatus
  points: Int
  survey: Survey
  poi: PointOfInterest
  topic: Topic
  completed: Boolean
  created_at: String
  updated_at: String
}
```

#### PointOfInterest (POI)

```graphql
type PointOfInterest {
  id: ID!
  title: String
  description: String
  asset: FairuAsset
  type: PointOfInterestType
  topic: Topic
  latitude: Float
  longitude: Float
  missions: [Mission]
}
```

#### Spot

User-created observations on the map.

```graphql
type Spot {
  id: ID!
  title: String
  description: String
  latitude: Float
  longitude: Float
  topic: Topic
  asset: FairuAsset
  created_at: String
}
```

#### Survey

```graphql
type Survey {
  id: ID!
  title: String
  description: String
  elements: [SurveyElement]
}
```

#### Topic

Topics/Themes for categorizing content.

```graphql
type Topic {
  id: ID!
  title: String
  color: String
}
```

### Queries

#### User Queries

```graphql
# Get current authenticated user
query Me {
  me {
    id
    displayname
    email
    city {
      id
      name
    }
    score
  }
}
```

#### Observatory Queries

```graphql
# Get all available Observatories
query GetObservatories {
  cities {
    id
    name
    joinable
    geo_start {
      latitude
      longitude
    }
  }
}

# Get a specific Observatory
query GetObservatory($id: String!) {
  city(id: $id) {
    id
    name
    missionsList {
      missions {
        id
        title
        type
      }
    }
  }
}
```

#### Mission Queries

```graphql
# Get all missions for an Observatory
query GetMissions($cityId: String!) {
  missions(city_id: $cityId) {
    id
    title
    description
    type
    status
    points
    poi {
      title
      latitude
      longitude
    }
  }
}

# Get user's active missions
query MyMissions {
  myMissions {
    id
    title
    status
    completed
  }
}

# Get a specific mission
query GetMission($id: ID!) {
  mission(id: $id) {
    id
    title
    description
    survey {
      elements {
        type
        label
      }
    }
  }
}
```

#### POI Queries

```graphql
# Get POIs for an Observatory
query GetPOIs($cityId: String!) {
  pois(city_id: $cityId) {
    id
    title
    description
    latitude
    longitude
    topic {
      title
      color
    }
    missions {
      id
      title
    }
  }
}
```

#### Spot Queries

```graphql
# Get spots for an Observatory
query GetSpots($cityId: String!) {
  spots(city_id: $cityId) {
    id
    title
    description
    latitude
    longitude
    topic {
      title
    }
  }
}
```

### Mutations

#### Authentication

```graphql
# Register new account
mutation Register($email: String!, $password: String!, $firstname: String, $lastname: String) {
  register(email: $email, password: $password, firstname: $firstname, lastname: $lastname) {
    token
    refresh_token
  }
}

# Login
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    refresh_token
  }
}

# Keycloak login
mutation KeycloakLogin($token: String!) {
  keycloak(token: $token) {
    token
    refresh_token
  }
}

# Refresh token
mutation RefreshToken($refresh_token: String!) {
  refreshToken(refresh_token: $refresh_token) {
    token
    refresh_token
  }
}

# Reset password
mutation ResetPassword($email: String!) {
  resetPassword(email: $email)
}

# Delete account
mutation DeleteAccount {
  deleteAccount
}
```

#### Profile Management

```graphql
# Update profile
mutation UpdateProfile($firstname: String, $lastname: String, $language: String) {
  updateProfile(firstname: $firstname, lastname: $lastname, language: $language) {
    id
    displayname
  }
}

# Change Observatory
mutation ChangeObservatory($city_id: String!) {
  updateFavoriteCity(city_id: $city_id)
}

# Join an Observatory
mutation JoinObservatory($id: String!) {
  joinObservatory(id: $id) {
    id
    name
  }
}
```

#### Mission Operations

```graphql
# Start a mission
mutation StartMission($id: ID!) {
  startMission(id: $id) {
    id
    status
  }
}

# Stop/Cancel a mission
mutation StopMission($id: ID!) {
  stopMission(id: $id) {
    id
    status
  }
}

# Validate a mission
mutation ValidateMission($id: ID!, $valid: Boolean!) {
  validateMission(id: $id, valid: $valid) {
    id
    status
  }
}

# Add data to a mission
mutation AddMissionData($mission_id: ID!, $data: AddMissionDataset!) {
  addMissionDataset(mission_id: $mission_id, data: $data) {
    id
  }
}
```

#### Survey Submission

```graphql
# Submit survey answers
mutation SubmitSurvey($survey_id: ID!, $answers: [SurveyAnswerInput!]!) {
  submitToSurvey(survey_id: $survey_id, answers: $answers) {
    id
  }
}
```

#### Spot Operations

```graphql
# Create a new spot
mutation CreateSpot($input: CreateSpot!) {
  createSpot(input: $input) {
    id
    title
    latitude
    longitude
  }
}

# Update a spot
mutation UpdateSpot($id: ID!, $input: UpdateSpot!) {
  updateSpot(id: $id, input: $input) {
    id
    title
  }
}

# Delete a spot
mutation DeleteSpot($id: ID!) {
  deleteSpot(id: $id)
}
```

### Enums

```graphql
enum MissionType {
  SURVEY
  MODE
  WALK
  VALIDATION
  RATING
  EXTERNAL
}

enum MissionStatus {
  OPEN
  ACTIVE
  CLOSED
  COMPLETED
}

enum MissionProvider {
  GREENGAGE
  EXTERNAL
}

enum PointOfInterestType {
  DEFAULT
  STATION
}

enum DatasetType {
  TEXT
  IMAGE
  NUMBER
  BOOLEAN
}
```

### GeoJSON Support

The API supports GeoJSON for geographic data:

```graphql
type GeoJSON {
  type: String!
  features: [GeoJSONFeature!]
}

type GeoJSONFeature {
  type: String!
  geometry: GeoJSONGeometry!
  properties: Tile
}

type GeoPosition {
  latitude: Float
  longitude: Float
}
```

## Example: Complete Workflow

### 1. Login and Get User Info

```graphql
mutation {
  login(email: "user@example.com", password: "password123") {
    token
  }
}
```

### 2. Get Available Observatories

```graphql
query {
  cities {
    id
    name
    joinable
  }
}
```

### 3. Join an Observatory

```graphql
mutation {
  joinObservatory(id: "vienna-observatory") {
    id
    name
  }
}
```

### 4. Get POIs and Missions

```graphql
query {
  pois(city_id: "vienna-observatory") {
    id
    title
    missions {
      id
      title
      type
    }
  }
}
```

### 5. Start and Complete a Mission

```graphql
mutation {
  startMission(id: "mission-123") {
    id
    status
  }
}

# After completing the task
mutation {
  addMissionDataset(
    mission_id: "mission-123"
    data: { values: [{ type: TEXT, value: "Observation notes" }] }
  ) {
    id
  }
}
```

## Error Handling

GraphQL errors are returned in the standard format:

```json
{
  "errors": [
    {
      "message": "Unauthorized",
      "extensions": {
        "code": "UNAUTHENTICATED"
      }
    }
  ]
}
```

Common error codes:

| Code | Description |
|------|-------------|
| `UNAUTHENTICATED` | Token missing or invalid |
| `FORBIDDEN` | User lacks permission |
| `NOT_FOUND` | Resource not found |
| `BAD_USER_INPUT` | Invalid input data |

## Rate Limiting

The API implements rate limiting to ensure fair usage. Current limits:

- **Authenticated requests**: 1000 requests/minute
- **Unauthenticated requests**: 100 requests/minute

## Developer

The GREENGAGE API and Console are developed and maintained by:

| | |
|---|---|
| **Company** | Sushi Dev GmbH |
| **Headquarters** | Wiedner Gürtel 28/6, 1040 Wien, Austria |
| **Branch Office** | Bischofpl. 1/6b, 8010 Graz, Austria |
| **Email** | [office@sushi.dev](mailto:office@sushi.dev) |
| **Phone** | +43 1 934 6339 |

## Webhooks

The GREENGAGE API supports webhooks for real-time event notifications.

!!! note "Current Implementation"
    The current webhooks implementation was originally developed for MindEarth/MindView integration. For general integrations, we recommend using the GraphQL API directly.

### Example Implementation

A basic webhook implementation example is available on GitHub:

**[github.com/sushidev-team/greengage-webhook-example](https://github.com/sushidev-team/greengage-webhook-example)**

### Webhook Events

Webhooks can be triggered for various events including:

- Mission completion
- Spot creation
- Survey submission
- User actions

For custom webhook integrations, please contact the development team.

---

## GraphQL Playground

### Interactive Explorer

Explore and test the API interactively using the **Control Panel**:

**[https://api.greengage.dev/cp](https://api.greengage.dev/cp)**

<video autoplay muted loop controls width="100%">
  <source src="/assets/greengage-app/console/videos/api-basic.mp4" type="video/mp4">
</video>

The Control Panel provides:

- Interactive query builder
- Full schema documentation
- Live query execution
- Response visualization
- Authentication testing

### Apollo Sandbox

The standard Apollo Sandbox is also available at:

**[https://api.greengage.dev/graphql](https://api.greengage.dev/graphql)**

Features:

- Schema introspection
- Query history
- Variable editor
- Response formatting
