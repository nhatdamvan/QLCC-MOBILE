import React from 'react';
import {TouchableOpacity, View, StatusBar} from 'react-native';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import Icon from 'react-native-vector-icons/Feather';
import {
  HomeTab,
  CustomerTab,
  ChatTab,
  ContactTab,
  SettingsTab,
} from '../screens';
import IconH from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Style} from '../styles';
import {ColorPicker, CustomSidebarMenu} from '../components';
import {useSelector} from 'react-redux';
import RouteName from '../routes/RouteName';

const Tab = AnimatedTabBarNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerSidebarScreen(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: 0}}>
      <CustomSidebarMenu {...props} />
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScsreenTabAll"
      drawerContent={props => <DrawerSidebarScreen {...props} />}>
      <Drawer.Screen
        name="HomeScsreenTabAll"
        options={{headerShown: false}}
        component={HomeScsreenTabAll}
      />
    </Drawer.Navigator>
  );
}
function Root() {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};

  StatusBar.setBackgroundColor(colorrdata);
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Homese"
        component={HomeScsreenTabAll}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default Root;

function HomeTabScreenStack({navigation}) {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          title: 'Home',
          headerShown: true,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 20,
            color: 'white',
          },
          headerStyle: {
            backgroundColor: colorrdata,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <View style={Style.flexrowsetaddresh}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <IconE
                  style={Style.setbariconmarginright}
                  name="navicon"
                  color={'white'}
                  size={35}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={Style.LineIcon}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(RouteName.HOME_TAB_SEARCH_SCREEN)
                }
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <IconE name="search" size={30} color="white" />
              </TouchableOpacity>
              <ColorPicker />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function CustomerTabScreenStack({navigation}) {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="CustomerTab">
      <Stack.Screen
        name="CustomerTab"
        component={CustomerTab}
        options={{
          title: 'Customer',
          headerShown: true,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 20,
            color: 'white',
          },
          headerStyle: {
            backgroundColor: colorrdata,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconE
                style={Style.setbariconmarginright}
                name="navicon"
                color={'white'}
                size={35}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                style={Style.setmarginright}
                onPress={() =>
                  navigation.navigate(RouteName.LEAD_SETTINGS_SCREEN)
                }>
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
function ChatTabStack({navigation}) {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="ChatTab">
      <Stack.Screen
        name="ChatTab"
        component={ChatTab}
        options={{
          title: 'Chat',
          headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: 'white',
            fontWeight: '700',
          },
          headerStyle: {
            backgroundColor: colorrdata,
          },
          headerLeft: () => (
            <View style={Style.flexrowsetaddresh}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <IconE
                  style={Style.setbariconmarginright}
                  name="navicon"
                  color={'white'}
                  size={35}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => <ColorPicker />,
        }}
      />
    </Stack.Navigator>
  );
}
function ContactScreenStack({navigation}) {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="ContactTab">
      <Stack.Screen
        name="ContactTab"
        component={ContactTab}
        options={{
          title: 'Contacts',
          headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: 'white',
            fontWeight: '700',
          },
          headerStyle: {
            backgroundColor: colorrdata,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconE
                style={Style.setbariconmarginright}
                name="navicon"
                color={'white'}
                size={35}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function SettingScreenStack({navigation}) {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="SettingsTab">
      <Stack.Screen
        name="SettingsTab"
        component={SettingsTab}
        options={{
          title: 'Settings',
          headerShown: true,
          headerTitleStyle: {
            fontWeight: '700',
            fontSize: 20,
            color: 'white',
          },
          headerStyle: {
            backgroundColor: colorrdata,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconE
                style={Style.setbariconmarginright}
                name="navicon"
                color={'white'}
                size={35}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export function HomeScsreenTabAll() {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  return (
    <Tab.Navigator
      initialRouteName="Homes"
      screenOptions={{headerShown: false}}
      tabBarOptions={{
        activeTintColor: colorrdata,
        inactiveTintColor: 'gray',
        activeBackgroundColor: 'white',
        labeled: true,
        labelStyle: {},
        tabStyle: {
          height: 60,
          backgroundColor: 'white',
          paddingTop: 0,
          paddingBottom: 8,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 10,
          elevation: 24,
        },
      }}>
      <Tab.Screen
        name={RouteName.HOME_TAB_SET}
        component={HomeTabScreenStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              size={19}
              name="home"
              style={{color: focused ? colorrdata : 'gray'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.MY_COURSES_TAB}
        component={CustomerTabScreenStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <IconM
                name="groups"
                style={{color: focused ? colorrdata : 'gray'}}
                size={27}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.WHISHILIST_TAB}
        component={ChatTabStack}
        options={{
          tabBarIcon: ({focused}) => (
            <IconI
              size={19}
              name="chatbubble-ellipses-sharp"
              style={{color: focused ? colorrdata : 'gray'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.EXAM_TAB}
        component={ContactScreenStack}
        options={{
          tabBarIcon: ({focused}) => (
            <IconH
              size={19}
              name="contacts"
              style={{color: focused ? colorrdata : 'gray'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.PROFILE_TAB}
        component={SettingScreenStack}
        options={{
          tabBarIcon: ({focused}) => (
            <IconH
              size={19}
              name="setting"
              style={{color: focused ? colorrdata : 'gray'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
