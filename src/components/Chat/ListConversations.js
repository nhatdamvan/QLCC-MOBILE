import {navigate} from 'routes/rootNavigation';
import RouteName from 'routes/RouteName';
import React from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
  MessageTextUnread,
} from 'styles/MessageStyles';
import {dateFromNow} from 'utils';

const ListConversations = ({navigation, conversations}) => {
  return (
    <Container>
      <FlatList
        data={conversations}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card onPress={() => navigate(RouteName.MESSAGE, {user: item})}>
            <UserInfo>
              <UserImgWrapper>
                <UserImg
                  source={{
                    uri:
                      item.SenderInfo?.avatar ??
                      'https://placeimg.com/140/140/any',
                  }}
                />
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.SenderInfo?.display_name ?? 'Người dùng'}</UserName>
                  <PostTime>{dateFromNow(item?.UpdatedDate)}</PostTime>
                </UserInfoText>
                {item?.IsRead ? (
                  <MessageText numberOfLines={1}>
                    {item.MessageLast}
                  </MessageText>
                ) : (
                  <MessageTextUnread numberOfLines={1}>
                    {item.MessageLast}
                  </MessageTextUnread>
                )}
              </TextSection>
            </UserInfo>
          </Card>
        )}
      />
    </Container>
  );
};

export default ListConversations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
