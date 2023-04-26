import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CheckBox, Icon, ListItem} from '@rneui/themed';

import CustomAvatar from './CustomAvatar';
import MessageInfo from './MessageInfo';

const Conversation = props => {
  const {
    avatars,
    lastMessage,
    numberUnread,
    handleEnterChat,
    name,
    type,
    totalMembers,
    conversationId,
    isForward,
    checked,
    avatarColor,
  } = props;

  const userProfile = 'Hoang Tuyet';

  // const userName = userProfile.name;

  const handleSenderName = (userName, lastUserName, type) => {
    let senderName = '';

    if (type) {
      senderName = userName === lastUserName ? 'Bạn: ' : `${lastUserName}: `;
    }

    return senderName;
  };

  const handleContent = (
    lastMessageType,
    lastMessageContent,
    isDeleted,
    lastMessage,
  ) => {
    let content = '';
    if (isDeleted) {
      content = 'Tin nhắn đã được thu hồi';
    } else {
      switch (lastMessageType) {
        case 'IMAGE':
          content = '[Hình ảnh]';
          break;
        case 'STICKER':
          content = '[Nhãn dán]';
          break;
        case 'HTML':
          content = '[Văn bản]';
          break;
        default:
          content = lastMessageContent
            ? lastMessageContent
            : '[Không có tin nhắn]';
          break;
      }
    }
    return content;
  };

  // const senderName = type
  //   ? userName === lastMessage?.user.name
  //     ? 'Bạn: '
  //     : `${lastMessage?.user.name}: `
  //   : '';

  return (
    <View style={{backgroundColor: '#fff'}}>
      <ListItem
        // topDivider={false}
        // bottomDivider={false}
        >
        <CustomAvatar
          name={name}
          avatars={avatars}
          totalMembers={totalMembers}
          avatarColor={avatarColor}
        />
        <ListItem.Content>
          <ListItem.Title
            style={{
              width: '100%',
              fontWeight: numberUnread > 0 ? 'bold' : 'normal',
            }}>
            {name}
          </ListItem.Title>
          <ListItem.Subtitle
            numberOfLines={1}
            style={[
              {
                width: '100%',
                fontWeight: numberUnread > 0 ? 'bold' : 'normal',
              },
              numberUnread > 0 ? {color: 'black'} : null,
            ]}>{`${handleSenderName(
            userProfile.name,
            lastMessage?.user?.name,
            type,
          )}${handleContent(
            lastMessage?.type,
            lastMessage?.content,
            lastMessage?.isDeleted,
            lastMessage,
          )}`}</ListItem.Subtitle>
        </ListItem.Content>
        {isForward ? (
          <CheckBox
            containerStyle={{
              // backgroundColor: 'red',
              justifyContent: 'center',
              padding: 0,
              marginLeft: 0,
              margin: 0,
            }}
            center
            checked={checked}
            checkedIcon={
              <Icon
                name="check-circle"
                type="material-community"
                color="#1194ff"
              />
            }
            uncheckedIcon={
              <Icon
                name="circle-outline"
                type="material-community"
                color="#a1aaaf"
              />
            }
          />
        ) : (
          <MessageInfo
            createdAt={lastMessage?.createdAt}
            numberUnread={numberUnread}
          />
        )}
      </ListItem>
      <View style={styles.bottomDivider}></View>
    </View>
  );
};

Conversation.propTypes = {
  avatars: PropTypes.any,
  numberUnread: PropTypes.number,
  totalMembers: PropTypes.number,
  handleEnterChat: PropTypes.func,
  lastMessage: PropTypes.object,
  name: PropTypes.string,
  conversationId: PropTypes.string,
  avatarColor: PropTypes.string,
  type: PropTypes.bool,
  isForward: PropTypes.bool,
  checked: PropTypes.bool,
};

Conversation.defaultProps = {
  avatars: '',
  numberUnread: 0,
  totalMembers: 2,
  handleEnterChat: null,
  lastMessage: {},
  name: 'Alice',
  conversationId: '',
  type: false,
  isForward: false,
  checked: false,
  avatarColor: '#019dd7',
};

export default Conversation;

const styles = StyleSheet.create({
  bottomDivider: {
    width: '100%',
    backgroundColor: '#E5E6E8',
    height: 1,
    marginLeft: 82,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
