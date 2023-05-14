// Third Party
import axios from 'axios';

// Local Imports
import config from '@config';

const instance = axios.create({
  baseURL: config.baseUrl,
  timeout: 3000,
});

// instance interceptors request
instance.interceptors.request.use(async config => {
  //   const token = await getItem(lsKey.token);
  //   const parsedToken = JSON.parse(token);
  //   const accessToken = token ? parsedToken.access_token : null;
  //   if (accessToken != null) {
  //     console.log('access_token', accessToken);
  //     config.headers.Authorization = `Bearer ${accessToken}`;
  //   }
  return config;
});

// intance interceptor response
instance.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  error => {
    return Promise.reject(error);
  },
);

const get = (url: string, params?: any) => {
  return instance.get(url, {params});
};

const post = (url: string, data: any) => {
  return instance.post(url, data);
};

const postFormData = (url: string, data: any) => {
  // loop through data and convert to form data
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });
  return instance.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export {get, post, postFormData};
