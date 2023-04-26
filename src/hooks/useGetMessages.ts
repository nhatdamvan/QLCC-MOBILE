import {useInfiniteQuery} from '@tanstack/react-query';
import jwtAxios from 'api/jwtAxios';

const fetchMessages = async (params: any) => {
  const dataResult = await jwtAxios.post('getSenderMesssageDetail', params);
  return dataResult.data;
};

const useGetMessages = (user: any) => {
  const {data, isLoading} = useInfiniteQuery({
    queryKey: ['messages'],
    queryFn: () =>
      fetchMessages({
        ValueFilter: user?.Sender,
        Sort: {TimeStamp: 1},
        PageIndex: 1,
        PageSize: 100,
      }),
  });
  return {
    data: data?.pages[0].datas.map(item => {
      console.log('item', item)
      return {
        _id: item?.Message?.msg_id,
        text: item?.Message?.text,
        createdAt: item?.CreatedDate,
        user: {
          _id: item?.IsSender ? 1 : user?.Sender,
          name: user?.SenderInfo?.display_name,
          avatar: user.SenderInfo?.avatar ?? 'https://placeimg.com/140/140/any',
        },
        image: item?.Message?.attachments && item?.Message?.attachments[0].type === 'image' ? item?.Message?.attachments[0].payload.url : null,
        video: item?.Message?.attachments && item?.Message?.attachments[0].type === 'video' ? item?.Message?.attachments[0].payload.url : null,
      };
    }).reverse(),
    isLoading,
  };
};

export default useGetMessages;
