import {useInfiniteQuery} from '@tanstack/react-query';
import jwtAxios from 'api/jwtAxios';

const fetchCompleteds = async (params: any) => {
  const dataResult = await jwtAxios.post('ticketRequests', params);
  return dataResult.data;
};

const useGetCompleted = (params: any) => {
  const {data, isLoading} = useInfiniteQuery({
    queryKey: ['completed'],
    queryFn: () => fetchCompleteds(params),
  });
  return {
    data: data?.pages[0],
    isLoading,
  };
};

export default useGetCompleted;
