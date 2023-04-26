import {useInfiniteQuery} from '@tanstack/react-query';
import jwtAxios from 'api/jwtAxios';

const fetchChats = async (params: any) => {
  const dataResult = await jwtAxios.post('getSenderMesssage', params);
  return dataResult.data;
};

const useGetChats = (params: any) => {
  const {data, isLoading} = useInfiniteQuery({
    queryKey: ['chats'],
    queryFn: () => fetchChats(params),
  });
  return {
    data: data?.pages[0],
    isLoading,
  };
};

export default useGetChats;
