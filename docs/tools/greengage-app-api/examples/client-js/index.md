## How to to fetch data from an GRAPHQL endpoint

## Javascript
Open [index.html](index.html) to see a live demo for a gql query in javascript.

Please be a

## Curl
```bash 
curl --location --request POST 'https://api-stage.greengage.dev/graphql' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"query {\n    cities {\n        id\n        name\n    }\n}","variables":{}}'
```