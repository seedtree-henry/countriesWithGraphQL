import axios from "axios";
const BASE_URL = "https://restcountries.eu/rest/v2";

export const countries = async (type, value) => {
  const result = await axios(`${BASE_URL}/${type}/${value}`).then(function(
    response
  ) {
    const countries = response.data;
    return countries;
  });
  return result;
};
