export const resolvers = {
    Query: {
      breaches: async (_, {}, { dataSources }) => {
        const data = (await dataSources.API.getBreaches());
        return data.map((entry) => {
          return {
            name: entry.Name,
            domain: entry.Domain,
         };
        }); 
      },
    },
  };