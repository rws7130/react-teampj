// import React from 'react';
import { useUserStore } from './../store/useUserStore';
import createAxiosInstance from './axios';

const MyProduct = ({ endpoint, data }) => {
  const accessToken = useUserStore((state) => state.accessToken);

  const axiosInstance = createAxiosInstance({ endpoint });

  const postApi = async () => {
    const body = { data };
    const config = {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const res = await axiosInstance.post(body, config);
      if (!res) alert('통신상태 이상');
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  const getApi = async () => {
    try {
      const res = await axiosInstance.get();
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return { getApi, postApi };
};

export default MyProduct;
