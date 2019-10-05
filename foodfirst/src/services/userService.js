import axios from "axios";

//need to add URLs
//Do we use redundant code or try to use heart hooks?

const commonConfig = {
  withCredentials: true,
  crossdomain: true,
  headers: { "Content-Type": "application/json" }
};

const getLogOut = () => {
  const config = { ...commonConfig, url: null, method: "GET" };

  return axios(config)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
};

const postLogIn = payload => {
  const config = { ...commonConfig, url: null, data: payload, method: "POST" };

  return axios(config)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
};

const register = payload => {
  const config = { ...commonConfig, url: null, data: payload, method: "POST" };

  return axios(config)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
};

export { getLogOut, postLogIn, register };
