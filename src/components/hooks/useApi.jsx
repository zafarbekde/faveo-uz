
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const useApi = () => {
  const [cookies] = useCookies(['accessToken', 'refreshToken']);
  const queryClient = useQueryClient();

  const axiosInstance = axios.create({
    baseURL: 'localhost:8080/api/v1/auth',
    headers: {
      Authorization: `Bearer ${cookies.accessToken}`,
    },
  });

  const fetchData = async (key, url) => {
    const response = await axiosInstance.get(url);
    if (response.status !== 200) {
      throw new Error('Error fetching data');
    }
    return response.data;
  };

  const postData = async ({ url, data }) => {
    const response = await axiosInstance.post(url, data);
    if (response.status !== 201) {
      throw new Error('Error posting data');
    }
    return response.data;
  };

  const useFetch = (url, options) => useQuery(['data', url], () => fetchData('data', url), options);
  const usePost = (options) => useMutation(postData, options);

  return { useFetch, usePost, queryClient };
};

export default useApi;