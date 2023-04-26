import {Icon} from '@rneui/themed';
import {COLORS, STYLES} from 'styles/styleGlobal';
import Conversation from 'components/Chat/Conversation';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {Style} from '../../../styles';
import RouteName from 'routes/RouteName';
import ListConversations from 'components/Chat/ListConversations';
import useGetChats from 'hooks/useGetChats';

const DealsTab = props => {
  const {navigation} = props;
  const conversations = [
    {
      id: '1',
      userName: 'Jenny Doe',
      userImg: require('assets/users/user-3.jpg'),
      messageTime: '4 mins ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '2',
      userName: 'John Doe',
      userImg: require('assets/users/user-1.jpg'),
      messageTime: '2 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '3',
      userName: 'Ken William',
      userImg: require('assets/users/user-4.jpg'),
      messageTime: '1 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '4',
      userName: 'Selina Paul',
      userImg: require('assets/users/user-6.jpg'),
      messageTime: '1 day ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.Hey there, this is my test for a post of my social app in React Native.Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '5',
      userName: 'Christy Alex',
      userImg: require('assets/users/user-7.jpg'),
      messageTime: '2 days ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
  ];
  const queryChats = useGetChats({
    ValueFilter: '',
    Sort: {TimeStamp: 1},
    PageIndex: 1,
    PageSize: 100,
  });
  return (
    <View style={Style.PositionRelative}>
      {queryChats?.isLoading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator color={COLORS.blue} />
        </View>
      ) : (
        <ListConversations conversations={queryChats?.data?.datas} />
      )}
    </View>
  );
};
export default DealsTab;
