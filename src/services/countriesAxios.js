import axios from "axios";

const API = `https://restcountries.com/v3.1/all`;

const countriesAxios = {
  get: () => axios(API).then(({data}) => data),
  delete: (payload) => axios.delete(API + `/${payload}`).then(({ data }) => data),
}

export default countriesAxios
