import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CallsScreen } from '../../screens';
import { CustomSidebarMenu, HeaderSidemunuicon, ColorPicker } from '../../components';
import { useSelector } from "react-redux";
import { Colors } from '../../utils';
import { Style } from '../../styles';
import { View, Text, TouchableOpacity } from 'react-native';
import IconH from 'react-native-vector-icons/AntDesign';
import RouteName from '../../routes/RouteName';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function firstScreenStack({ navigation }) {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="CallsScreen">
      <Stack.Screen
        name="CallsScreen"
        component={CallsScreen}
        options={{
          title: 'Calls', headerShown: true,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
            color: Colors.White_text_color,
          },
          headerStyle: {
            backgroundColor: colorrdata,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: () => <HeaderSidemunuicon marginrighthome={Style.iconcolorwhite} navigationProps={navigation} />,
          headerRight: () => (
            <View style={Style.flexrowiconcolorpicker}>
              <TouchableOpacity style={Style.setmarginright} onPress={() => navigation.navigate(RouteName.HOME_TAB_SEARCH_SCREEN)}>
                <IconH name="search1" color={'white'} size={25} />
              </TouchableOpacity>
              <TouchableOpacity style={Style.setmarginright}>
                <IconH name="setting" color={'white'} size={25} />
              </TouchableOpacity>
              <ColorPicker />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function App() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 },
      }}>
      <Drawer.Screen
        name="FirstPage"
        options={{ drawerLabel: 'First page Option', headerShown: false, }}
        component={firstScreenStack} />
    </Drawer.Navigator>
  );
}
export default App;
