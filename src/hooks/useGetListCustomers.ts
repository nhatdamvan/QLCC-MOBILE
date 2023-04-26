import {useInfiniteQuery} from '@tanstack/react-query';
import jwtAxios from 'api/jwtAxios';

const fetchCustomers = async (params: any) => {
  const dataResult = await jwtAxios.post('customers', params);
  return dataResult.data;
};

const useGetListCustomers = (params: any) => {
  const {data, isLoading} = useInfiniteQuery({
    queryKey: ['customers'],
    queryFn: () => fetchCustomers(params),
  });
  return {
    data: data?.pages[0],
    isLoading,
  };
};

export default useGetListCustomers;
