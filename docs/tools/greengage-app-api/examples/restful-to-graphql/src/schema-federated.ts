import gql from 'graphql-tag';

const typeDefs = gql`
    type Breach {
        name: String
        domain: String
    }
`;

export default typeDefs;