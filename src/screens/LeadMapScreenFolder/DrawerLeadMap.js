import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LeadMapscreen } from '../../screens';
import { CustomSidebarMenu, HeaderSidemunuicon } from '../../components';
import { useSelector } from "react-redux";
import { Colors } from '../../utils';
import { Style } from '../../styles';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import RouteName from '../../routes/RouteName';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function firstScreenStack({ navigation }) {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="LeadMapscreen">
      <Stack.Screen
        name="LeadMapscreen"
        component={LeadMapscreen}
        options={{
          title: 'Leads Near Me', headerShown: true,
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
          headerRight: () => {
            return (
              <View style={Style.flexiconvirw}>
                <TouchableOpacity onPress={() => navigation.navigate(RouteName.HOME_TAB_SEARCH_SCREEN)}>
                  <Icon name="search1" size={25} color={Colors.White_text_color} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(RouteName.LEAD_SETTINGS_SCREEN)}>
                  <Icon name="setting" style={Style.seticonview} size={25} color={Colors.White_text_color} />
                </TouchableOpacity>
              </View>
            );
          },
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
