import axios from "axios";

const commonConfig = {
  withCredentials: true,
  crossdomain: true,
  headers: { "Content-Type": "application/json" }
};

const createProfile = payload => {
  const config = { ...commonConfig, url: null, method: "POST" };

  return axios(config)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
};

const getProfile = () => {
  const config = { ...commonConfig, url: null, method: "GET" };

  return axios(config)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
};

const updateProfile = (payload, id) => {
  const config = { ...commonConfig, url: null, method: "PUT" };

  return axios(config)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
};

export { createProfile, getProfile, updateProfile };
