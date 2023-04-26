import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RouteName from './RouteName';
import {Input} from '../components';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import IconA from 'react-native-vector-icons/AntDesign';
import IconI from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconP from 'react-native-vector-icons/FontAwesome5';
import IconB from 'react-native-vector-icons/Entypo';
import {Style} from '../styles';
import {Strings, SH, SW, SF, Fonts, Colors} from '../utils';
import Tooltip from 'react-native-walkthrough-tooltip';

const Stack = createNativeStackNavigator();

import TabNavigator from './TabNavigator';
import {
  LoginScreen,
  RegisterScreen,
  OtpVeryfiveScreen,
  DraweFeedback,
  SplashScreen,
  RegistrationSuccessful,
  Swiperscreen,
  AddTaskScreen,
  AddCallScreen,
  TaskScreen,
  HomeTabSearchScreen,
  SelectModuleSearch,
  AddMeetingScreen,
  NewLeadsScreen,
  LeadSettingsScreen,
  DrawerUnsyncedRecords,
  DrawerParticularTasks,
  DrawerMeeting,
  TaskDetailsScreen,
  LeadDataOpen,
  AddNoteScreen,
  DrawerAccount,
  MeetingsDetails,
  DrawerLeadMap,
  DrawerCalls,
  CallsDetailsScreen,
} from '../screens';
import {isReadyRef, navigationRef} from './rootNavigation';
import TicketDetail from 'screens/TicketDetail';
import NewCustomer from 'components/Customer/NewCustomer';
import CustomerDetail from 'components/Customer/CustormerDetail';
import {MessageScreen} from 'screens/MessageScreen';

const MainNavigator = props => {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const [toolTipVisible, setToolTipVisible] = useState(false);
  const [Search, onChangeText] = React.useState('');
  // const { selectedRole, selectedTheme } = useSelector(state => state.commonReducer);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={RouteName.HOME_SCREEN} component={TabNavigator} />
        <Stack.Screen
          name={RouteName.TICKET_DETAIL}
          component={TicketDetail}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name={RouteName.NEW_CUSTOMER}
          component={NewCustomer}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name={RouteName.MESSAGE}
          component={MessageScreen}
          options={{animation: 'slide_from_right', headerStyle: {backgroundColor: '#0068FF'}}}
        />
        <Stack.Screen
          name={RouteName.CUSTOMER_DETAIL}
          component={CustomerDetail}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name={RouteName.REGIATRAION_SUCCESSFULL}
          component={RegistrationSuccessful}
        />

        <Stack.Screen
          name={RouteName.OTP_VERYFY_SCREEN}
          component={OtpVeryfiveScreen}
        />

        <Stack.Screen name={RouteName.SWIPER_SCREEN} component={Swiperscreen} />

        <Stack.Screen
          name={RouteName.ADD_TASK_SCREEN}
          component={AddTaskScreen}
        />

        <Stack.Screen
          name={RouteName.ADD_CALL_SCREEN}
          component={AddCallScreen}
        />

        <Stack.Screen name={RouteName.TAKS_SCREEN} component={TaskScreen} />

        <Stack.Screen
          name={RouteName.ADD_MEETING_SCREEN}
          component={AddMeetingScreen}
        />

        <Stack.Screen
          name={RouteName.NEW_LEADS_SCREEN}
          component={NewLeadsScreen}
        />

        <Stack.Screen
          name={RouteName.HOME_TAB_SEARCH_SCREEN}
          component={HomeTabSearchScreen}
          options={{
            title: '',
            headerShown: true,
            headerTitleStyle: {
              color: '#fff',
              fontWeight: '700',
              fontSize: 20,
            },
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: colorrdata,
              elevation: 0,
              shadowOpacity: 0,
            },

            headerRight: () => {
              const navigation = useNavigation();
              return (
                <View style={Style.flexsewtrwo}>
                  <Input
                    placeholder={Strings.HomeTabSearch.Placeholder}
                    placeholderTextColor="lighgrey"
                    SearchHomeTab={Style.SearchHomeTab}
                    onChangeText={onChangeText}
                    value={Search}
                    underlineColorAndroid="transparent"
                    inputStyle={Style.TabInputSearch}
                  />
                  <TouchableOpacity onPress={() => onChangeText('')}>
                    <IconA name="close" style={Style.SearchCloseIcon} />
                  </TouchableOpacity>
                </View>
              );
            },
          }}
        />
        {/* Select modules search  */}
        <Stack.Screen
          name={RouteName.SELECT_MODULES_SCREEN}
          component={SelectModuleSearch}
          options={{
            title: 'Select Modules',
            headerShown: true,
            headerTitleStyle: {
              color: '#000',
              fontFamily: Fonts.Poppins_Medium,
              fontSize: SF(20),
            },
            headerTintColor: '#333',
            headerStyle: {
              backgroundColor: '#e3f2f0',
              elevation: 0,
              shadowOpacity: 0,
            },

            headerRight: () => {
              const navigation = useNavigation();
              return (
                <View style={[Style.flexsewtrwo, Style.SlectModuleHeader]}>
                  <TouchableOpacity style={Style.rightsidesetpadding}>
                    <IconM size={19} name="mode-edit" color={colorrdata} />
                  </TouchableOpacity>
                </View>
              );
            },
          }}
        />
        <Stack.Screen
          name={RouteName.FEED_BACK_SCREEN}
          component={DraweFeedback}
        />
        {/* <Stack.Screen name={RouteName.FEED_BACK_SCREEN} component={DraweFeedback} /> */}
        <Stack.Screen
          name={RouteName.LEAD_SETTINGS_SCREEN}
          options={{
            title: 'Leads Settings',
            headerShown: true,
            headerTintColor: 'white',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: colorrdata,
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
          component={LeadSettingsScreen}
        />
        <Stack.Screen
          name={RouteName.UNSYNCEDRECORD_SCREEN}
          component={DrawerUnsyncedRecords}
        />
        <Stack.Screen
          name={RouteName.DRAWERPARTI_CULARTABSCREEN}
          component={DrawerParticularTasks}
        />
        <Stack.Screen
          name={RouteName.TASK_DETAILS_SCREEN}
          options={{
            title: 'Tasks',
            headerShown: true,
            headerTitleStyle: {
              color: Colors.White_text_color,
              fontFamily: Fonts.Poppins_Medium,
              fontSize: SF(20),
            },
            headerTintColor: Colors.White_text_color,
            headerStyle: {
              backgroundColor: colorrdata,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerRight: () => {
              const navigation = useNavigation();
              return (
                <View style={[Style.flexsewtrwo, Style.SlectModuleHeader]}>
                  <TouchableOpacity style={Style.rightsidesetpadding}>
                    <IconA
                      size={22}
                      name="search1"
                      color={Colors.White_text_color}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={Style.rightsidesetpadding}>
                    <IconM
                      size={22}
                      name="mode-edit"
                      color={Colors.White_text_color}
                      style={Style.seticonview}
                    />
                  </TouchableOpacity>
                </View>
              );
            },
          }}
          component={TaskDetailsScreen}
        />

        <Stack.Screen
          name={RouteName.CALLS_DETAILS_SCREEN}
          options={{
            title: 'Calls',
            headerShown: true,
            headerTitleStyle: {
              color: Colors.White_text_color,
              fontFamily: Fonts.Poppins_Medium,
              fontSize: SF(20),
            },
            headerTintColor: Colors.White_text_color,
            headerStyle: {
              backgroundColor: colorrdata,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerRight: () => {
              const navigation = useNavigation();
              return (
                <View style={[Style.flexsewtrwo, Style.SlectModuleHeader]}>
                  <TouchableOpacity style={Style.rightsidesetpadding}>
                    <IconM
                      size={22}
                      name="mode-edit"
                      color={Colors.White_text_color}
                      style={Style.seticonview}
                    />
                  </TouchableOpacity>
                </View>
              );
            },
          }}
          component={CallsDetailsScreen}
        />

        <Stack.Screen
          name={RouteName.DRAWER_MEETINGS}
          component={DrawerMeeting}
        />

        <Stack.Screen
          name={RouteName.LEAD_DATA_OPEN_SCREEN}
          component={LeadDataOpen}
        />

        <Stack.Screen
          name={RouteName.ADD_NOTE_SCREEN}
          options={{
            title: 'Add Note',
            headerShown: true,
            headerTitleStyle: {
              color: Colors.White_text_color,
              fontFamily: Fonts.Poppins_Medium,
              fontSize: SF(20),
            },
            headerTintColor: Colors.White_text_color,
            headerStyle: {
              backgroundColor: colorrdata,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerRight: () => {
              const navigation = useNavigation();
              return (
                <View style={[Style.flexsewtrwo, Style.SlectModuleHeader]}>
                  <TouchableOpacity style={Style.rightsidesetpadding}>
                    <IconI
                      size={22}
                      name="attach"
                      color={Colors.White_text_color}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Style.rightsidesetpadding}
                    onPress={() =>
                      navigation.navigate(RouteName.LEAD_DATA_OPEN_SCREEN)
                    }>
                    <IconF
                      size={22}
                      name="check-square"
                      color={Colors.White_text_color}
                      style={Style.seticonview}
                    />
                  </TouchableOpacity>
                </View>
              );
            },
          }}
          component={AddNoteScreen}
        />

        <Stack.Screen
          name={RouteName.ACCOUNT_SCREEN}
          component={DrawerAccount}
        />
        <Stack.Screen
          name={RouteName.DRAWER_CALLS_SCREEN}
          component={DrawerCalls}
        />

        <Stack.Screen
          name={RouteName.DRAWER_LEAD_MAP}
          component={DrawerLeadMap}
        />
        {/* <Stack.Screen name={RouteName.MEETINGS_DETAILS_SCREEN} component={MeetingsDetails} /> */}
        <Stack.Screen
          name={RouteName.MEETINGS_DETAILS_SCREEN}
          options={{
            title: null,
            headerShown: true,
            headerTintColor: Colors.White_text_color,
            headerStyle: {
              backgroundColor: colorrdata,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerRight: () => {
              const navigation = useNavigation();
              return (
                <View style={[Style.flexsewtrwo, Style.SlectModuleHeader]}>
                  <TouchableOpacity style={Style.rightsidesetpadding}>
                    <IconP
                      size={18}
                      name="pen"
                      color={Colors.White_text_color}
                    />
                  </TouchableOpacity>
                  <Tooltip
                    animated={true}
                    arrowSize={{width: 0, height: 0}}
                    backgroundColor="rgba(0,0,0,0.5)"
                    isVisible={toolTipVisible}
                    content={
                      <View style={Style.setwidthtooltip}>
                        <Text style={[Style.tolltiptext, {color: colorrdata}]}>
                          Solutions
                        </Text>
                        <Text style={[Style.tolltiptext, {color: colorrdata}]}>
                          Partners
                        </Text>
                        <Text style={[Style.tolltiptext, {color: colorrdata}]}>
                          Consulting
                        </Text>
                      </View>
                    }
                    placement="bottom"
                    onClose={() => setToolTipVisible(false)}>
                    <TouchableOpacity
                      style={Style.seticonview}
                      onPress={() => setToolTipVisible(true)}>
                      <IconB
                        name="dots-three-vertical"
                        size={26}
                        color={Colors.White_text_color}
                      />
                    </TouchableOpacity>
                  </Tooltip>
                </View>
              );
            },
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity
                  style={Style.aerrowstylesset}
                  onPress={() =>
                    navigation.navigate(RouteName.DRAWER_MEETINGS)
                  }>
                  <IconA
                    size={22}
                    name="arrowleft"
                    color={Colors.White_text_color}
                    style={Style.seticonview}
                  />
                </TouchableOpacity>
              );
            },
          }}
          component={MeetingsDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
