import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from 'components/commonComponents/Header';
import ImagePicker from 'react-native-image-crop-picker';
import useGetMessages from 'hooks/useGetMessages';
import Video from 'react-native-video';
import { COLORS } from 'styles/styleGlobal';

const ChatScreen = props => {
  const {route} = props;
  const {user} = route?.params;
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState();
  const chooseImg = () => {
    try {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log('image', image);
        setImage(image);
        let myMsg = {
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          image: image?.path,
        };
        const messages = [myMsg].flat();
        onSend(messages);
      });
    } catch (error) {}
  };
  const queryMessages = useGetMessages(user);
  const onSend = useCallback(
    (messages = []) => {
      // let myMsg = null;
      // console.log('messages', messages);
      // const msg = messages[0];
      // console.log('image?.path', image?.path);
      // if (image?.path !== '') {
      //   myMsg = {
      //     ...msg,
      //     createdAt: new Date(),
      //     user: {
      //       _id: 1,
      //       name: 'React Native',
      //       avatar: 'https://placeimg.com/140/140/any',
      //     },
      //     image: image?.path,
      //   };
      // } else {
      //   myMsg = {
      //     ...msg,
      //     createdAt: new Date(),
      //     user: {
      //       _id: 1,
      //       name: 'React Native',
      //       avatar: 'https://placeimg.com/140/140/any',
      //     },
      //     image: '',
      //   };
      // }
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages),
      );
      setImage(null);
    },
    [image],
  );

  const renderSend = props => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        renderMessageVideo={() => {
          return (
            <Pressable>
              <Video
                style={styles.video}
                paused
                repeat
                source={{uri: props.currentMessage?.video}}
              />
            </Pressable>
          );
        }}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

  const renderActions = useCallback(() => {
    return (
      <TouchableOpacity
        style={{alignSelf: 'center', marginLeft: 12}}
        onPress={() => chooseImg()}>
        <Ionicons name="attach" size={22} color="#333" />
      </TouchableOpacity>
    );
  }, []);

  const customtInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          // backgroundColor: 'red',
          borderTopColor: '#E8E8E8',
          borderTopWidth: 1,
          paddingHorizontal: 4,
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        label={user?.SenderInfo?.display_name}
        isBack
        nameIconRight="menu"
        avatar={user?.SenderInfo?.avatar ?? 'https://placeimg.com/140/140/any'}
      />
      {queryMessages?.isLoading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator color={COLORS.blue} />
        </View>
      ) : (
        <GiftedChat
          messages={queryMessages?.data}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderInputToolbar={props => customtInputToolbar(props)}
          renderBubble={renderBubble}
          alwaysShowSend
          renderSend={renderSend}
          scrollToBottom
          placeholder="Nhập tin nhắn"
          scrollToBottomComponent={scrollToBottomComponent}
          renderActions={renderActions}
          textInputStyle={{
            paddingTop: 8,
            // borderWidth: 0.5,
            // borderRadius: 20,
            // paddingHorizontal: 12,
            // borderColor: 'grey'
            // marginTop: 12,
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  video: {
    width: '90%',
    aspectRatio: 16 / 9,
    marginTop: 20,
    marginLeft: '4%',
    marginRight: '4%',
  },
});
