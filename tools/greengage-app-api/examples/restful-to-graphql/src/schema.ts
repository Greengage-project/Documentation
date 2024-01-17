export const schema = `#graphql

    union _Entity = Breach

    scalar _Any
    scalar FieldSet
    scalar link__Import
    scalar federation__Scope
    scalar federation__Policy

    enum link__Purpose {
      SECURITY
      EXECUTION
    }

    type _Service {
      sdl: String!
    }

    directive @link(url: String!, as: String, for: link__Purpose, import: [link__Import]) repeatable on SCHEMA
    
    extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable", ""])

    directive @extends on OBJECT | INTERFACE

    type Breach {
       name: String
       domain: String
    }

    type Query {
      _entities(representations: [_Any!]!): [_Entity]!
      _service: _Service!
      breaches: [Breach]
    }

`;