# GraphQL Resolver a RESTful api

## Installation

### Step 1

Create an .env file with the following content. Add the base path to the API.

```.env 
PORT=3333
URL='https://example.com/'
```

Please be aware that the URL parameter will not be taken if the request header "drupal" is set.

### Step 2

Run the following command:

```bash 
npm i && npm run production
```
