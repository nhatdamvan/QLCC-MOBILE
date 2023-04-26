import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { UnsyncedRecords } from '../../screens';
import { CustomSidebarMenu, HeaderSidemunuicon } from '../../components';
import { useSelector } from "react-redux";
import { Colors } from '../../utils';
import { Style } from '../../styles';
import { View, Text, TouchableOpacity } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import Icon from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function firstScreenStack({ navigation }) {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="UnsyncedRecords">
      <Stack.Screen
        name="UnsyncedRecords"
        component={UnsyncedRecords}
        options={{
          title: 'Unsynced Records', headerShown: true,
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
            const [toolTipVisible, setToolTipVisible] = useState(false);
            return (
              <View style={Style.flexiconvirw}>
                <TouchableOpacity>
                  <IconA name="infocirlceo" size={25} color={Colors.White_text_color} />
                </TouchableOpacity>
                <Tooltip
                  animated={true}
                  arrowSize={{ width: 0, height: 0 }}
                  backgroundColor="rgba(0,0,0,0.5)"
                  isVisible={toolTipVisible}
                  content={
                    <View style={Style.setwidthtooltip}>
                  <Text style={[Style.tolltiptext,{color:colorrdata}]}>Solutions</Text>
                  <Text style={[Style.tolltiptext,{color:colorrdata}]}>Partners</Text>
                  <Text style={[Style.tolltiptext,{color:colorrdata}]}>Consulting</Text>
                  </View>
                }
                  placement="bottom"
                  onClose={() => setToolTipVisible(false)}>
                  <TouchableOpacity style={Style.seticonview} onPress={() => setToolTipVisible(true)}>
                    <Icon name="dots-three-vertical" size={26} color={Colors.White_text_color} />
                  </TouchableOpacity>
                </Tooltip>
              </View>
            );
          }
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
