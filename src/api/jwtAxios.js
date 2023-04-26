// api/axiosClient.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import SInfo from 'react-native-sensitive-info';
import axios from 'axios';
import queryString from 'query-string';
import Urls from './url';
import AgentInstance from '../../AgentInstance';

let appConfig = {
  // baseURL: 'https://aptos-v3-api.bluemove.net/api',
  baseURL: 'https://crmic2-dev.vercel.app/api/',
  // baseURL: 'https://api-crm-dev.clickcure.vn/api/',
};

// Set up default config for http requests here
const axiosConfig = axios.create({
  baseURL: appConfig?.baseURL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: {
    encode: params => queryString.stringify(params),
  },
  httpsAgent: AgentInstance,
});

axiosConfig.interceptors.request.use(
  async function (config) {
    console.log('config', config);
    const BearerToken = await SInfo.getItem('token', {});
    if (BearerToken) {
      config.headers = {
        token: BearerToken,
        'Content-Type': 'application/json',
      };
      console.log('config', config);
    }
    config.baseURL = appConfig?.baseURL;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosConfig.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if ((error?.response?.data?.detail ?? '') === 'USER_BLOCKED') {
      SInfo.deleteItem('token', {}).then(() => {});
      return Promise.reject(Error('USER_BLOCKED'));
    }
    if (is401Error(error)) {
      // token expired

      const getToken = async () => {
        try {
          const refreshToken = await AsyncStorage.getItem('refreshToken');
          console.log('refreshToken', refreshToken);
          const {data} = await axiosConfig.post(Urls.REFRESH_TOKEN, {
            RefreshToken: refreshToken,
          });
          // console.log(`response`, response)
          axios.defaults.headers.common.token = data?.accessToken;
        } catch (error) {
          console.log('error', error);
          //log out
        }
      };
      getToken();
    }
    return Promise.reject(error);
  },
);

export const is401Error = error => {
  return (
    error &&
    error.response &&
    error.response.status &&
    error.response.status === 401
  );
};

export default axiosConfig;
