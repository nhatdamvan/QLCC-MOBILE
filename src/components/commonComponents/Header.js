import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {COLORS} from 'styles/styleGlobal';
import {goback} from 'routes/rootNavigation';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';

const Header = props => {
  const {
    label,
    nameIconLeft,
    nameIconRight,
    textLeft,
    center = false,
    isBack = false,
    clickLeftIcon = () => {},
    clickTextIcon = () => {},
    avatar,
  } = props;
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  return (
    <View>
      <View
        style={[
          styles.container,
          {justifyContent: center ? 'center' : 'space-between'},
        ]}>
        <TouchableOpacity
          onPress={() => goback()}
          style={styles.leftContainer}
          activeOpacity={1}
          disabled={!isBack}>
          {isBack && (
            <FontAwesome5
              name="chevron-left"
              size={16}
              color={COLORS.black}
              style={styles.backIcon}
            />
          )}
          {avatar ? (
            <FastImage
              style={{
                width: 35,
                height: 35,
                marginRight: 8,
                marginLeft: 8,
                borderRadius: 20,
              }}
              source={{uri: avatar}}
              resizeMode={FastImage.resizeMode.contain}
            />
          ) : null}
          <Text style={styles.textLabel}>{label}</Text>
        </TouchableOpacity>
        {textLeft ? (
          <TouchableOpacity onPress={clickTextIcon}>
            <Text style={[styles.textLabelLeft, {color: colorrdata}]}>
              {textLeft}
            </Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.rightContainer}>
            <TouchableOpacity onPress={clickLeftIcon}>
              <MaterialIcons
                name={nameIconLeft}
                size={18}
                color={COLORS.black}
                style={styles.iconLeft}
              />
            </TouchableOpacity>

            <MaterialIcons
              name={nameIconRight}
              size={18}
              color={COLORS.black}
            />
          </View>
        )}
      </View>
      <View style={styles.devide} />
    </View>
  );
};
export default React.memo(Header);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    height: 48,
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // width: 60,
  },
  textLabel: {
    fontSize: 16,
    color: COLORS.black,
  },
  textLabelLeft: {
    fontSize: 16,
    marginRight: 8,
  },
  iconLeft: {
    marginRight: 16,
  },
  devide: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.devide,
  },
  backIcon: {
    marginRight: 12,
  },
});
