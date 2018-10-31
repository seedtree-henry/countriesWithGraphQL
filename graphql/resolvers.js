import { countries, getById, addCountry, deleteCountry } from "./db";

const resolvers = {
  Query: {
    countries: () => countries,
    country: (_, { id }) => getById(id)
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
      ),
    deleteCountry: (_, { id }) => deleteCountry(id)
  }
};

export default resolvers;
