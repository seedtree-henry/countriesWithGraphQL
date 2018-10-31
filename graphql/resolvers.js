import { countries } from "./db";

const resolvers = {
  Query: {
    countries: () => countries
  }
};

export default resolvers;
