import { countries, getCountry } from "./db";

const resolvers = {
  Query: {
    countries: (_, { type, value }) => countries(type, value),
    country: (_, { alpha3Code }) => {
      console.log(getCountry(alpha3Code));
      return getCountry(alpha3Code);
    }
  },
  Mutation: {
    addCountry: (
      _,
      { name, alpha3Code, capital, region, subregion, population, gini }
    ) =>
      addCountry(name, alpha3Code, capital, region, subregion, population, gini)
  }
};

export default resolvers;
