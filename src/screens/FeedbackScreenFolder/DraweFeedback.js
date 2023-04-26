import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FeedbackScreen } from '../../screens';
import { CustomSidebarMenu, HeaderSidemunuicon } from '../../components';
import { useSelector } from "react-redux";
import { Colors } from '../../utils';
import { Style } from '../../styles';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function firstScreenStack({ navigation }) {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="FeedbackScreen">
      <Stack.Screen
        name="FeedbackScreen"
        component={FeedbackScreen}
        options={{
          title: 'Feedback', headerShown: true,
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
          headerLeft: () => <HeaderSidemunuicon marginrighthome={Style.iconcolorwhite}  navigationProps={navigation} />,
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
