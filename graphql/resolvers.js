import { countries, addCountry, deleteCountry } from "./db";

const resolvers = {
  Query: {
    countries: (_, { type, value }) => countries(type, value)
    // country: (_, { id }) => getById(id)
  },
  Mutation: {
    addCountry: (
      _,
      { name, code3, capital, region, subregion, callingCode, population, gini }
    ) =>
      addCountry(
        name,
        code3,
        capital,
        region,
        subregion,
        callingCode,
        population,
        gini
      )
    // deleteCountry: (_, { id }) => deleteCountry(id)
  }
};

export default resolvers;
