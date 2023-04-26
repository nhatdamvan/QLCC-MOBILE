import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from '../../styles/OwnerStyle/OwnerTableStyle';

const SideDrawerMenu = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={Styles.setsidespace}>
      <TouchableOpacity onPress={toggleDrawer}>
      <Text>Side</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SideDrawerMenu;