import axios from 'axios';
import { useState } from 'react';

import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();

  const getRequest = async (url: string) => {
    setLoading(true);
    return await axios({
      method: 'get',
      url: url,
    })
      .then((response) => {
        return response.data;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
      });
  };

  const postRequest = async (url: string, body: unknown) => {
    setLoading(true);
    const returnData = connectionAPIPost(url, body)
      .then((data) => {
        setNotification('Foii...', 'success');
        return data;
      })
      .catch(() => {
        setNotification('Senha inválida', 'success');
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
