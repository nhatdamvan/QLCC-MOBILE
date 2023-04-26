import {WIDTH} from 'styles/styleGlobal';
import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from '@rneui/themed';
import {useSelector} from 'react-redux';

function MessageHeaderLeft(props) {
  const {goBack, totalMembers, name, currentConversationId} = props;
  const currentChannelId = 1;
  const currentChannelName = 'Click Cure';
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Icon name="arrowleft" type="antdesign" size={22} color="white" />
      </TouchableOpacity>
      <View
        style={{
          marginLeft: 20,
        }}>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {name}
        </Text>
        {totalMembers > 2 &&
          (currentChannelId === currentConversationId ? (
            <Text
              style={styles.headerSubTitle}
              numberOfLines={1}>{`${totalMembers} thành viên`}</Text>
          ) : (
            <Text style={styles.headerSubTitle} numberOfLines={1}>
              {currentChannelName}
            </Text>
          ))}
      </View>
    </View>
  );
}

MessageHeaderLeft.propTypes = {
  totalMembers: PropTypes.number,
  goBack: PropTypes.func,
  name: PropTypes.string,
  currentConversationId: PropTypes.string,
};

MessageHeaderLeft.defaultProps = {
  totalMembers: 2,
  goBack: null,
  name: '',
  currentConversationId: '',
};

export default MessageHeaderLeft;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20,
    maxWidth: WIDTH - 100,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
  },
  headerSubTitle: {
    color: '#fff',
    fontSize: 12,
  },
});
