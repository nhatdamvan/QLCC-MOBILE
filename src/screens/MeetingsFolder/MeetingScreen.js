import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { MeetingsStyle, Style } from '../../styles';
import { DropDown } from '../../components';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';
import { Strings } from '../../utils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from "react-redux";
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/FontAwesome';
import IconFA from 'react-native-vector-icons/FontAwesome';
import images from '../../index';
import { FloatingAction } from "react-native-floating-action";
import RouteName from '../../routes/RouteName';

const data = [
  { label: 'All Meetings', value: '1' },
  { label: 'Meeting Details', value: '2' },
  { label: 'Task', value: '3' },
  { label: 'No Leads', value: '4' },
  { label: 'Custom Leads', value: '5' },
  { label: 'Top Leads', value: '6' },
  { label: 'Average Leads', value: '7' },
];

const LEADDATA = [
  {
    id: '1',
    title: 'User 5',
    email: 'demoemaail@gmail.com',
    img: images.UserPicture
  },
];

const LeadDataBox = (item, index) => {
  return (
    <View style={MeetingsStyle.LeadDataBox}>
      <View>
        <Text style={MeetingsStyle.LeadDataBoxtitle}>{item.title}</Text>
        <Text style={MeetingsStyle.LeadDataBoxemail}>{item.email}</Text>
      </View>
      <View>
        <Image source={item.img} resizeMode="cover" style={MeetingsStyle.leaddataimg} />
      </View>
    </View>
  );
}

const MeetingScreen = (props) => {
  const { navigation } = props;
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [Screenset, setScreenset] = useState(0)
  const [dateOfBrith, setDateOfBrith] = useState('2:00 pm');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDateTimePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDateTimePicker = () => {
    setDatePickerVisibility(true);
  };
  const handleDatePicked = (date) => {
    hideDateTimePicker(),
      setDateOfBrith(moment(date, "YYYY-MM-DDTHH:mm:ss Z").local().format('DD-MM-YYYY'));
  };
  const actions = [
    {
      text:
        <TouchableOpacity onPress={() => navigation.navigate(RouteName.ADD_CALL_SCREEN)}>
          <Text>Import from Address Book</Text>
        </TouchableOpacity>,
      icon: <IconM name='file-import-outline' style={[MeetingsStyle.LeadsUpDownArroIcon, { color: colorrdata }]} />,
      iconBackground: "#fff",
      name: "import",
      position: 2,
      color: "lightgray",
    },
    {
      text: "New Leads",
      icon: <IconFA name='users' style={[MeetingsStyle.LeadsUpDownArroIcon, { color: colorrdata }]} />,
      name: "no lead",
      position: 1,
      color: "lightgray",
    },
  ];

  return (
    <View style={Style.PositionRelative}>
      <View style={Style.PositionRelative}>
        <View style={MeetingsStyle.LeadsHeaderbox}>
          <View style={MeetingsStyle.LeadsDropdownbox}>
            <DropDown
              data={data}
              dropdownStyle={MeetingsStyle.LeadDropdown}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
              selectedTextStyle={MeetingsStyle.selectedTextStyleLead}
              iconStyle={MeetingsStyle.iconStyle}
              value="1"
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              labelField="label"
              valueField="value"
              renderLeftIcon={() => (
                <MaterialIcons style={MeetingsStyle.icon} color="black" name={isFocus ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={20} />
              )}
            />
          </View>
          <View style={MeetingsStyle.LeadsUpDownArro}>
            <TouchableOpacity>
              <IconI name='list-ul' style={[MeetingsStyle.LeadsUpDownArroIcon, { color: colorrdata }]} />
            </TouchableOpacity>
          </View>

        </View>

        {value == '1' || value == '2' ?
          <ScrollView>
            <View>
              <FlatList
                data={LEADDATA}
                renderItem={({ item, index }) => LeadDataBox(item, index)}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </ScrollView>
          :
          <View style={[MeetingsStyle.minstyleviewphotogsrapgy, MeetingsStyle.NodataBox]}>
            <ScrollView
              keyboardShouldPersistTaps="handled"
              style={Style.contentContainerStyle}
            >
              <View style={Style.container}>
                <View style={Style.minviewallcontent}>
                  {Screenset === 0 ?
                    <View style={MeetingsStyle.setmargintop}>
                      <View style={MeetingsStyle.flexcenterimg}>
                        <Image source={images.LeadsNodata} resizeMode="cover" style={MeetingsStyle.NoleadImage} />
                      </View>
                      <TouchableOpacity>
                        <Text style={MeetingsStyle.NoleadText} >{Strings.CustomerTab.Meetings}</Text>
                        <TouchableOpacity onPress={setScreenset}>
                          <Text style={MeetingsStyle.RefreshText}>{Strings.CustomerTab.Refresh}</Text>
                        </TouchableOpacity>
                      </TouchableOpacity>
                    </View>
                    :
                    <View style={MeetingsStyle.settiletext}>
                      <View style={MeetingsStyle.setwidttwo}>
                        <View style={MeetingsStyle.Flexrowuserimager}>
                          <View style={MeetingsStyle.settiletexttwo}>
                            <TouchableOpacity onPress={() => showDateTimePicker()}>
                              <IconI name="calendar" size={20} color={colorrdata} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate(RouteName.MEETINGS_DETAILS_SCREEN)}>
                            <Text style={MeetingsStyle.Settitlestyle}>Title</Text>
                            </TouchableOpacity>
                          </View>
                          <View style={MeetingsStyle.imageviewset}>
                            <Image source={images.UserPicture} resizeMode="cover" style={MeetingsStyle.usertimagstyle} />
                          </View>
                        </View>
                        <View style={MeetingsStyle.Flexrowuserimagertwoset}>
                          <View style={MeetingsStyle.settiletexttwo}>
                            <TouchableOpacity onPress={() => showDateTimePicker()}>
                              <Text style={[MeetingsStyle.Settitlestyletwo, { color: colorrdata }]}>{dateOfBrith}</Text>
                            </TouchableOpacity>
                            <Text style={MeetingsStyle.Settitlestyle}>Title</Text>
                          </View>
                          <View style={MeetingsStyle.imageviewset}>
                            <Image source={images.UserPicture} resizeMode="cover" style={MeetingsStyle.usertimagstyle} />
                          </View>
                        </View>
                      </View>
                    </View>
                  }
                </View>
              </View>
            </ScrollView>
            <DateTimePicker
              isVisible={isDatePickerVisible}
              onConfirm={handleDatePicked}
              onCancel={hideDateTimePicker}
            />
          </View>
        }
      </View>
      <View style={MeetingsStyle.FloatingAction}>
        <FloatingAction
          actions={actions}
          color={colorrdata}
          distanceToEdge={20}
          actionsPaddingTopBottom={5}
          onPressItem={name => {
            name == 'import' ?
              console.log(`selected button: ${name, '11111'}`)
              :
              navigation.navigate(RouteName.NEW_LEADS_SCREEN)
          }}
        />
      </View>
    </View>
  );
};
export default MeetingScreen;