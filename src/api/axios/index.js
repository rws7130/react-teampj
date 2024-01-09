import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

const createAxiosInstance = (url) => {
  const endpoint = url;
  const instance = axios.create({ baseURL: BASE_URL, withCredentials: true });

  // instance.interceptors.request.use((config) => {
  //   if (!config.headers) return config;
  //   const accessToken = getToken('access_token');

  //   if (accessToken) {
  //     config.headers['Authorization'] = accessToken;
  //   }
  //   return config;
  // });

  // instance.interceptors.response.use(
  //   (res) => res,
  //   async (error: AxiosError) => {
  //     const status = error.response?.status;
  //     if (status === 401) {
  //     }
  //     return Promise.reject(error);
  //   }
  // );

  const get = async (params = {}) => {
    try {
      const res = await instance.get(endpoint, params);

      const { data, status } = res;
      return { ...data, status };
    } catch (error) {
      console.error(error);
    }
  };

  const post = async (params = {}, config) => {
    try {
      const res = await instance.post(endpoint, params, config);

      const { data, status } = res;
      return { ...data, status };
    } catch (error) {
      console.error(error);
    }
  };

  return { get, post };
};

export default createAxiosInstance;
