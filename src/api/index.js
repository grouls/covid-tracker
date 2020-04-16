import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchTotalData = async country => {
  let endpoint = country ? `${url}/countries/${country}` : url;
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(endpoint);
    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate
    };
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get(`${url}/countries`);
    return countries.map(country => country.name);
  } catch (error) {
    return error;
  }
};
