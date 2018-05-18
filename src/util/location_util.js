export const getCities = async input => {
  let results = [];
  const citiesArray = await fetchCities(input);
  return citiesArray;
};

// fetches cities from API
const fetchCities = async input => {
  let results = await fetch(
    `https://www.metaweather.com/api/location/search/?query=${input}`
  );
  let data = await results.json();

  // if they don't have that city, they just give you nothing in the array
  return data;
};

// Example Output for fetchCities:
// https://www.metaweather.com/api/location/search/?query=san francisco
// [
// {
// title: "San Francisco",
// location_type: "City",
// woeid: 2487956,
// latt_long: "37.777119, -122.41964"
// }
// ]
