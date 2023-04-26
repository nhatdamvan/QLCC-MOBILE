import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { LeadScreenStyle, Style, ContactTabStyle } from '../../styles';
import { DropDown, Input, NoData } from '../../components';
import { Strings } from '../../utils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from "react-redux";
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import images from '../../index';
import { FloatingAction } from "react-native-floating-action";
import RouteName from '../../routes/RouteName';
import { Table, Row, } from 'react-native-table-component';
import { color } from 'react-native-reanimated';
import useNavigation from '@react-navigation/native';

const ContactDrop = [
  { label: 'All Accounts', value: '1' },
  { label: 'New Accounts', value: '2' },
  { label: 'Old Accounts', value: '3' },
  { label: 'No Accounts', value: '4' },
];

const ContactData = [
  {
    id: '1',
    title: '******123',    
    img: images.UserPicture,    
},
{
  id: '1',
  title: '******523',    
  img: images.UserPicture,    
},
{
  id: '1',
  title: '******253',    
  img: images.UserPicture,    
},
{
  id: '1',
  title: '******899',    
  img: images.UserPicture,    
},
{
    id: '1',
    title: '******182',    
    img: images.UserPicture,    
},{
  id: '1',
  title: '******745',    
  img: images.UserPicture,    
},

];

const AccountScreen = (props) => {
  const { navigation } = props;
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [text, onChangeText] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const ContactDataList = (item, index) => {
    return (
      <View style={LeadScreenStyle.LeadDataBox} onPress={() => navigation.navigate(item.Link)}>
        <View>
          <Text style={LeadScreenStyle.LeadDataBoxtitle}>{item.title}</Text>
        </View>
        <View>
          <Image source={item.img} resizeMode="cover" style={LeadScreenStyle.leaddataimg} />
        </View>
      </View>
    );
  }

  const actions = [
    {
      text: "Import from Address Book",
      icon: <IconM name='file-import-outline' style={[LeadScreenStyle.LeadsUpDownArroIcon, { color: colorrdata }]} />,
      iconBackground: "#fff",
      name: "import",
      position: 2,
      color: "lightgray",
    },
    {
      text: "New Leads",
      icon: <IconFA name='users' style={[LeadScreenStyle.LeadsUpDownArroIcon, { color: colorrdata }]} />,
      name: "no lead",
      position: 1,
      color: "lightgray",
    },
  ];



  return (
    <View style={Style.PositionRelative}>
      <View style={Style.PositionRelative}>
        <View style={LeadScreenStyle.LeadsHeaderbox}>
          <View style={isFocus ? LeadScreenStyle.LeadsDropdownbox : LeadScreenStyle.LeadsDropdownboxOpen}>
            <DropDown
              data={ContactDrop}
              dropdownStyle={LeadScreenStyle.LeadDropdown}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
              search
              searchPlaceholder="Search bar"
              selectedTextStyle={LeadScreenStyle.selectedTextStyleLead}
              iconStyle={LeadScreenStyle.iconStyle}
              value="1"
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              labelField="label"
              valueField="value"
              renderLeftIcon={() => (
                <MaterialIcons style={LeadScreenStyle.icon} color="black" name={isFocus ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={20} />
              )}
            />
          </View>
          {console.log('isFocus', isFocus)}
          <View style={LeadScreenStyle.LeadsUpDownArro}>
            <TouchableOpacity>
              <IconM name='arrow-up-down-bold' style={[LeadScreenStyle.LeadsUpDownArroIcon, { color: colorrdata }]} />
            </TouchableOpacity>
          </View>
          <View style={LeadScreenStyle.LeadsUpDownArro}>
            <TouchableOpacity onPress={()=> navigation.navigate(RouteName.DRAWER_LEAD_MAP)}>
              <IconFA name='map' style={[LeadScreenStyle.LeadsUpDownArroIcon, { color: colorrdata }]} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Start for Lead data*/}
        {value == '1' || value == '2' ?
          <ScrollView>
            <View style={ContactTabStyle.ContactFlatlistBox}>
              <FlatList
                data={ContactData}
                renderItem={({ item, index }) => ContactDataList(item, index)}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </ScrollView>
          :
          <NoData source={images.LeadsNodata} title={Strings.Account.NoAccount} RefreshText={Strings.CustomerTab.Refresh} />
        }

      </View>
      <View style={LeadScreenStyle.FloatingAction}>
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
export default AccountScreen;