import axios, { AxiosInstance } from 'axios';
import { store } from '../../store';
import LocalStorageService from '../services/localStorage';

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const response = error.response;
    if (
      response.status === 401 &&
      response.config &&
      !response.config.__isRetryRequest
    ) {
      LocalStorageService.clearAll();
    }

    return Promise.reject(error);
  }
);

const AxiosClientInstance = (token?: string | null): AxiosInstance => {
  const { token: tokenFromState } = store.getState().session;
  return axios.create({
    headers: {
      Authorization: `Bearer ${tokenFromState || token}`
    }
  });
};

export default AxiosClientInstance;
