import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {LeadScreenStyle, Style} from '../../../styles';
import {DropDown, Input, NoData} from '../../../components';
import {Strings} from '../../../utils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import images from '../../../index';
import {FloatingAction} from 'react-native-floating-action';
import RouteName from '../../../routes/RouteName';
import useGetListCustomers from 'hooks/useGetListCustomers';
import ListCustomers from 'components/Customer/ListCustomers';

const data = [
  {label: 'All Customers', value: '1'},
  {label: 'Leads', value: '2'},
  {label: 'Task', value: '3'},
  {label: 'No Leads', value: '4'},
  {label: 'Custom Leads', value: '5'},
  {label: 'Top Leads', value: '6'},
  {label: 'Average Leads', value: '7'},
];
console.log('data', data);

const tableDataSample = {
  tableHead: ['Name'],
  widthArr: [],
  tableData: [
    ['Bitcoin'],
    ['Ethereum'],
    ['Tether'],
    ['BNB'],
    ['USD Coin'],
    ['Ethereum'],
    ['Bitcoin'],
    ['Ethereum'],
    ['Tether'],
    ['BNB'],
    ['USD Coin'],
    ['Ethereum'],
    ['Ethereum'],
    ['Tether'],
    ['BNB'],
    ['USD Coin'],
    ['Ethereum'],
    ['Ethereum'],
    ['Tether'],
    ['BNB'],
    ['USD Coin'],
    ['Ethereum'],
    ['Ethereum'],
    ['Tether'],
    ['BNB'],
    ['USD Coin'],
    ['Ethereum'],
    ['Ethereum'],
    ['Tether'],
    ['BNB'],
    ['USD Coin'],
    ['Ethereum'],
  ],
};

const LEADDATA = [
  {
    id: '1',
    title: 'User 1',
    email: 'demoemail@gmail.com',
    img: images.UserPicture,
    Link: RouteName.LEAD_DATA_OPEN_SCREEN,
  },
  {
    id: '1',
    title: 'User 2',
    email: 'demoemail123@gmail.com',
    img: images.UserPicture,
    Link: RouteName.LEAD_DATA_OPEN_SCREEN,
  },
  {
    id: '1',
    title: 'User 3',
    email: 'abhyasamtest@gmail.com',
    img: images.UserPicture,
    Link: RouteName.LEAD_DATA_OPEN_SCREEN,
  },
  {
    id: '1',
    title: 'User 4',
    email: 'demoe@gmail.com',
    img: images.UserPicture,
    Link: RouteName.LEAD_DATA_OPEN_SCREEN,
  },
  {
    id: '1',
    title: 'User 5',
    email: 'demo123@gmail.com',
    img: images.UserPicture,
    Link: RouteName.LEAD_DATA_OPEN_SCREEN,
  },
  {
    id: '1',
    title: 'User 6',
    email: 'demoel52@gmail.com',
    img: images.UserPicture,
    Link: RouteName.LEAD_DATA_OPEN_SCREEN,
  },
  {
    id: '1',
    title: 'User 7',
    email: 'demoe52654@gmail.com',
    img: images.UserPicture,
    Link: RouteName.LEAD_DATA_OPEN_SCREEN,
  },
  {
    id: '1',
    title: 'User 8',
    email: 'jetable@gmail.com',
    img: images.UserPicture,
    Link: RouteName.LEAD_DATA_OPEN_SCREEN,
  },
  {
    id: '1',
    title: 'User 9',
    email: 'junk1e@gmail.com',
    img: images.UserPicture,
    Link: RouteName.LEAD_DATA_OPEN_SCREEN,
  },
  {
    id: '1',
    title: 'User 10',
    email: 'kulturbetrieb@gmail.com',
    img: images.UserPicture,
    Link: RouteName.LEAD_DATA_OPEN_SCREEN,
  },
  {
    id: '1',
    title: 'User 11',
    email: 'lifebyfood@gmail.com',
    img: images.UserPicture,
    Link: RouteName.LEAD_DATA_OPEN_SCREEN,
  },
  {
    id: '1',
    title: 'User 12',
    email: 'maboard@gmail.com',
    img: images.UserPicture,
    Link: RouteName.LEAD_DATA_OPEN_SCREEN,
  },
];

const CustomerTab = props => {
  const {navigation} = props;
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [open, setopen] = useState(false);

  const [text, onChangeText] = React.useState('');
  const [tabledata, settableData] = React.useState(tableDataSample);
  const [modalVisible, setModalVisible] = useState(false);

  const LeadDataBox = (item, index) => {
    return (
      <TouchableOpacity
        style={LeadScreenStyle.LeadDataBox}
        onPress={() => navigation.navigate(item.Link)}>
        <View>
          <Text style={LeadScreenStyle.LeadDataBoxtitle}>{item.title}</Text>
          <Text style={LeadScreenStyle.LeadDataBoxemail}>{item.email}</Text>
        </View>
        <View>
          <Image
            source={item.img}
            resizeMode="cover"
            style={LeadScreenStyle.leaddataimg}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const actions = [
    {
      text: 'Import from Address Book',
      icon: (
        <IconM
          name="file-import-outline"
          style={[LeadScreenStyle.LeadsUpDownArroIcon, {color: colorrdata}]}
        />
      ),
      iconBackground: '#fff',
      name: 'import',
      position: 2,
      color: 'lightgray',
    },
    {
      text: 'New Customer',
      icon: (
        <IconFA
          name="users"
          style={[LeadScreenStyle.LeadsUpDownArroIcon, {color: colorrdata}]}
        />
      ),
      name: 'no lead',
      position: 1,
      color: 'lightgray',
    },
  ];

  const customerQuery = useGetListCustomers({
    ValueFilter: '',
    Sort: {Name: 1},
    PageIndex: 1,
    PageSize: 20,
  });
  console.log('data?.datas', customerQuery);

  return (
    <View style={Style.PositionRelative}>
      <View style={Style.PositionRelative}>
        <View style={LeadScreenStyle.LeadsHeaderbox}>
          {console.log('isFocus', isFocus)}
          <View
            style={
              isFocus
                ? LeadScreenStyle.LeadsDropdownbox
                : LeadScreenStyle.LeadsDropdownboxOpen
            }>
            <DropDown
              data={data}
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
                <MaterialIcons
                  style={LeadScreenStyle.icon}
                  color="black"
                  name={isFocus ? 'keyboard-arrow-down' : 'keyboard-arrow-up'}
                  size={20}
                />
              )}
            />
          </View>
          {console.log('isFocus', isFocus)}
          <View style={LeadScreenStyle.LeadsUpDownArro}>
            <TouchableOpacity>
              <IconM
                name="arrow-up-down-bold"
                style={[
                  LeadScreenStyle.LeadsUpDownArroIcon,
                  {color: colorrdata},
                ]}
              />
            </TouchableOpacity>
          </View>
          <View style={LeadScreenStyle.LeadsUpDownArro}>
            <TouchableOpacity
              onPress={() => navigation.navigate(RouteName.DRAWER_LEAD_MAP)}>
              <IconFA
                name="map"
                style={[
                  LeadScreenStyle.LeadsUpDownArroIcon,
                  {color: colorrdata},
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Start for Lead data*/}
        {/* {value == '1' || value == '2' ? (
          <ScrollView>
            <View>
              <FlatList
                data={LEADDATA}
                renderItem={({item, index}) => LeadDataBox(item, index)}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </ScrollView>
        ) : (
          <NoData
            source={images.LeadsNodata}
            title={Strings.CustomerTab.NoLeads}
            RefreshText={Strings.CustomerTab.Refresh}
          />
        )} */}
        <ScrollView>
          <ListCustomers
            customers={customerQuery?.data?.datas}
            navigation={navigation}
            isLoading={customerQuery?.isLoading}
          />
        </ScrollView>
      </View>
      <View style={LeadScreenStyle.FloatingAction}>
        <FloatingAction
          actions={actions}
          color={colorrdata}
          distanceToEdge={20}
          actionsPaddingTopBottom={5}
          onPressItem={name => {
            name == 'import'
              ? console.log(`selected button: ${(name, '11111')}`)
              : navigation.navigate(RouteName.NEW_CUSTOMER);
          }}
        />
      </View>
    </View>
  );
};
export default CustomerTab;
