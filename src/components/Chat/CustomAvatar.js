import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar} from '@rneui/themed';
import {getAcronym} from 'utils';

const CustomAvatar = props => {
  const {avatars, name, totalMembers, avatarColor} = props;
  const AVATAR =
    'https://wiki.tino.org/wp-content/uploads/2020/10/react-native-final-file.jpg';

  const arr = Array.from(Array(totalMembers), (_, index) => index + 1);

  return typeof avatars === 'string' ? (
    <Avatar
      rounded
      title={getAcronym(name)}
      overlayContainerStyle={{
        backgroundColor: avatarColor,
      }}
      source={
        avatars.length > 0
          ? {
              uri: avatars,
            }
          : {
            uri: AVATAR,
          }
      }
      size="medium"
    />
  ) : (
    <View style={styles.container}>
      {arr.map(value =>
        value < 4 ? (
          <View key={value}>
            <Avatar
              rounded
              // title={commonFuc.getAcronym(name)}
              overlayContainerStyle={{
                backgroundColor: avatars[value - 1].avatarColor,
              }}
              icon={{name: 'person'}}
              source={
                avatars[value - 1]?.avatar?.length > 0
                  ? {
                      uri: avatars[value - 1].avatar,
                    }
                  : null
              }
              containerStyle={styles.avatar}
              titleStyle={styles.title}
            />
          </View>
        ) : value === 4 ? (
          <View key={value}>
            <Avatar
              rounded
              title={totalMembers - 3 > 99 ? '99+' : `+${totalMembers - 3}`}
              overlayContainerStyle={{backgroundColor: '#7562d8'}}
              source={null}
              containerStyle={[styles.avatar]}
              titleStyle={styles.title}
            />
          </View>
        ) : null,
      )}
    </View>
  );
};

CustomAvatar.propTypes = {
  avatars: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.string,
  avatarColor: PropTypes.string,
  totalMembers: PropTypes.number,
};

CustomAvatar.defaultProps = {
  avatars: '',
  name: '',
  totalMembers: 2,
  avatarColor: '#019dd7',
};

export default CustomAvatar;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 50,
  },
  avatar: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 10,
  },
  overlay: {
    backgroundColor: '#019dd7',
  },
});
