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

export const getCountry = async alpha3Code => {
  const result = await axios(`${BASE_URL}/alpha/${alpha3Code}`).then(function(
    response
  ) {
    const country = response.data;
    return country;
  });
  console.log(result);
  return result;
};
