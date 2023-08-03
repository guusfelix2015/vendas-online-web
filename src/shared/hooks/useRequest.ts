import axios from 'axios';
import { useState } from 'react';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);

  const getRequest = async (url: string) => {
    setLoading(true);
    return await axios({
      method: 'get',
      url: url,
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log('error', error);
        alert('Erro');
      });
  };

  const postRequest = async (url: string, body: unknown) => {
    setLoading(true);
    const returnData = await axios({
      method: 'post',
      url: url,
      data: body,
    })
      .then((response) => {
        alert(`${response.data}`);

        return response.data;
      })
      .catch((error) => {
        console.log('error', error);
        alert('Erro');
      });
    setLoading(false);

    return returnData;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};
