import {useInfiniteQuery} from '@tanstack/react-query';
import jwtAxios from 'api/jwtAxios';

const fetchPendings = async (params: any) => {
  const dataResult = await jwtAxios.post('ticketRequests', params);
  return dataResult.data;
};

const useGetPendings = (params: any) => {
  const {data, isLoading} = useInfiniteQuery({
    queryKey: ['pendings'],
    queryFn: () => fetchPendings(params),
  });
  return {
    data: data?.pages[0],
    isLoading,
  };
};

export default useGetPendings;
