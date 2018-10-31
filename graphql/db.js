export let countries = [
  {
    id: 0,
    name: "Afghanistan",
    code3: "AFG",
    capital: "Kabul",
    region: "Asia",
    subregion: "Southern Asia",
    callingCode: "93",
    population: 27657145,
    gini: 27.8
  }
];

export const getById = id => {
  const country = countries.find(country => id === country.id);
  return country;
};

export const addCountry = (
  name,
  code3,
  capital,
  region,
  subregion,
  callingCode,
  population,
  gini
) => {
  const country = {
    id: `${countries.length}`,
    name,
    code3,
    capital,
    region,
    subregion,
    callingCode,
    population,
    gini
  };
  countries.push(country);
  return country;
};

export const deleteCountry = id => {
  const updatedCountries = countries.filter(country => id !== country.id);
  if (countries.length === updatedCountries.length + 1) {
    countries = updatedCountries;
    return true;
  } else {
    return false;
  }
};
