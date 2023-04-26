import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import IconE from 'react-native-vector-icons/Feather';
import IconL from 'react-native-vector-icons/Entypo';
import IconZ from 'react-native-vector-icons/FontAwesome5';
import {Sidemenu} from '../../styles';
import Icon from 'react-native-vector-icons/Feather';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconU from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
import RouteName from '../../routes/RouteName';
import {useDispatch, useSelector} from 'react-redux';
import IconP from 'react-native-vector-icons/AntDesign';
import {ConfirmationAlert} from '../../components';
import {userActions} from '../../redux/reducers/userReducer';

const CustomSidebarMenu = props => {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const {navigation} = props;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [okbutton, Setokbutton] = useState('');
  const [cancelbutton, SetCancelbutton] = useState('Cancel');
  const dispatch = useDispatch();
  var alertdata = {
    logout: ' Are you sure want to logout?',
  };

  const onoknutton = () => {
    dispatch(userActions.logout({}));
    okbutton;
  };
  const Onpressfunction = e => {
    navigation.toggleDrawer();
    navigation.navigate(e);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={Sidemenu.customslidebarmenu}>
          <TouchableOpacity
            style={Sidemenu.flexrowset}
            onPress={() => Onpressfunction(RouteName.HOME_TAB_SET)}>
            <IconE size={19} name="home" color={colorrdata} />
            <Text style={Sidemenu.hometextstyle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Sidemenu.flexrowset}
            onPress={() => Onpressfunction(RouteName.MY_COURSES_TAB)}>
            <IconM size={19} name="groups" color={colorrdata} />
            <Text style={Sidemenu.hometextstyle}>Customers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Sidemenu.flexrowset}
            onPress={() => Onpressfunction(RouteName.EXAM_TAB)}>
            <Icon
              name="user"
              style={Sidemenu.logoimage}
              color={colorrdata}
              size={20}
            />
            <Text style={Sidemenu.hometextstyle}>Contacts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Sidemenu.flexrowset}
            onPress={() => Onpressfunction(RouteName.ACCOUNT_SCREEN)}>
            <IconU
              size={19}
              name="user-circle"
              style={Sidemenu.logoimage}
              color={colorrdata}
            />
            <Text style={Sidemenu.hometextstyle}>Accounts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Sidemenu.flexrowset}
            onPress={() => Onpressfunction(RouteName.WHISHILIST_TAB)}>
            <IconF
              size={19}
              name="handshake-o"
              style={Sidemenu.logoimage}
              color={colorrdata}
            />
            <Text style={Sidemenu.hometextstyle}>Deals</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Sidemenu.flexrowset}
            onPress={() => Onpressfunction(RouteName.DRAWER_CALLS_SCREEN)}>
            <Icon
              size={19}
              name="phone-call"
              style={Sidemenu.logoimage}
              color={colorrdata}
            />
            <Text style={Sidemenu.hometextstyle}>Calls</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Sidemenu.flexrowset}
            onPress={() => Onpressfunction(RouteName.DRAWER_MEETINGS)}>
            <IconM
              size={19}
              name="meeting-room"
              style={Sidemenu.logoimage}
              color={colorrdata}
            />
            <Text style={Sidemenu.hometextstyle}>Meetings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Sidemenu.flexrowset}
            onPress={() => Onpressfunction(RouteName.TASK_DETAILS_SCREEN)}>
            <IconF name="tasks" color={colorrdata} size={20} />
            <Text style={Sidemenu.hometextstyle}>Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Sidemenu.flexrowset}
            onPress={() => Onpressfunction(RouteName.UNSYNCEDRECORD_SCREEN)}>
            <IconZ name="record-vinyl" color={colorrdata} size={20} />
            <Text style={Sidemenu.hometextstyle}>Unsynced records</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Sidemenu.flexrowset}
            onPress={() => Onpressfunction(RouteName.PROFILE_TAB)}>
            <IconP name="setting" color={colorrdata} size={20} />
            <Text style={Sidemenu.hometextstyle}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Sidemenu.flexrowset}
            onPress={() => Onpressfunction(RouteName.FEED_BACK_SCREEN)}>
            <IconM name="feedback" color={colorrdata} size={20} />
            <Text style={Sidemenu.hometextstyle}>Feedback</Text>
          </TouchableOpacity>

          <View style={Sidemenu.settingandlogout}>
            <TouchableOpacity
              style={Sidemenu.flexrowset}
              onPress={() => {
                setAlertVisible(true);
                setAlertMessage(alertdata.logout);
                Setokbutton('');
              }}>
              <IconL name="log-out" color={colorrdata} size={23} />
              <Text style={Sidemenu.hometextstyle}>Logout</Text>
            </TouchableOpacity>
          </View>
          <ConfirmationAlert
            message={alertMessage}
            modalVisible={alertVisible}
            setModalVisible={setAlertVisible}
            onPressCancel={() => setAlertVisible(!alertVisible)}
            onPress={() => {
              setAlertVisible(!alertVisible), onoknutton();
            }}
            cancelButtonText={cancelbutton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CustomSidebarMenu;
