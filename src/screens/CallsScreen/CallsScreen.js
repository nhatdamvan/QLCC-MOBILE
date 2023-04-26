import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { LeadScreenStyle, Style, ContactTabStyle, CallsScreenStyle } from '../../styles';
import { DropDown, Input, NoData } from '../../components';
import { Strings } from '../../utils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from "react-redux";
import IconF from 'react-native-vector-icons/Fontisto';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import images from '../../index';
import { FloatingAction } from "react-native-floating-action";
import RouteName from '../../routes/RouteName';
import { Table, Row, } from 'react-native-table-component';
import { color } from 'react-native-reanimated';
import useNavigation from '@react-navigation/native';


const ContactDrop = [
    { label: 'All Calls', value: '1' },
    { label: 'New Calls', value: '2' },
    { label: 'Old Calls', value: '3' },
    { label: 'No Calls', value: '4' },
];

const ContactData = [
    {
        id: '1',
        title: 'Outgoing to Unknown',
        SecondTtle: '11:30 AM',
        icon: 'call-made',
        Link: (RouteName.CALLS_DETAILS_SCREEN),
        prise: '01:00'
    },
    {
        id: '1',
        title: 'Outgoing to Unknown',
        SecondTtle: '11:40 AM',
        icon: 'call-received',
        Link: (RouteName.CALLS_DETAILS_SCREEN),
        prise: '02:00'
    },
    {
        id: '1',
        title: 'Outgoing to Unknown',
        SecondTtle: '11:45 AM',
        icon: 'call-made',
        Link: (RouteName.CALLS_DETAILS_SCREEN),
        prise: '03:00'
    },
    {
        id: '1',
        title: 'Outgoing to Unknown',
        SecondTtle: '11:50 AM',
        icon: 'call-made',
        Link: (RouteName.CALLS_DETAILS_SCREEN),
        prise: '04:00'
    },
    {
        id: '1',
        title: 'Outgoing to Unknown',
        SecondTtle: '11:55 AM',
        icon: 'call-received',
        Link: (RouteName.CALLS_DETAILS_SCREEN),
        prise: '05:00'
    },
    {
        id: '1',
        title: 'Outgoing to Unknown',
        SecondTtle: '12:30 PM',
        icon: 'call-made',
        Link: (RouteName.CALLS_DETAILS_SCREEN),
        prise: '06:00'
    }, {
        id: '1',
        title: 'Outgoing to Unknown',
        SecondTtle: '1:30 PM',
        icon: 'call-received',
        Link: (RouteName.CALLS_DETAILS_SCREEN),
        prise: '07:00'
    },

    {
        id: '1',
        title: 'Outgoing to Unknown',
        SecondTtle: '2:30 PM',
        icon: 'call-received',
        Link: (RouteName.CALLS_DETAILS_SCREEN),
        prise: '08:00'
    },
    {
        id: '1',
        title: 'Outgoing to Unknown',
        SecondTtle: '3:30 PM',
        icon: 'call-made',
        Link: (RouteName.CALLS_DETAILS_SCREEN),
        prise: '08:30'
    },
    {
        id: '1',
        title: 'Outgoing to Unknown',
        SecondTtle: '11:55 AM',
        icon: 'call-received',
        Link: (RouteName.CALLS_DETAILS_SCREEN),
        prise: '09:00'
    },
    {
        id: '1',
        title: 'Outgoing to Unknown',
        SecondTtle: '12:30 PM',
        icon: 'call-made',
        Link: (RouteName.CALLS_DETAILS_SCREEN),
        prise: '10:00'
    }, {
        id: '1',
        title: 'Outgoing to Unknown',
        SecondTtle: '1:30 PM',
        icon: 'call-received',
        Link: (RouteName.CALLS_DETAILS_SCREEN),
        prise: '12:00'
    },



];

const CallsScreen = (props) => {

    const { navigation } = props;
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [text, onChangeText] = React.useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const ContactDataList = (item, index) => {
        return (
            <TouchableOpacity style={CallsScreenStyle.DealsTabBox} onPress={() => navigation.navigate(item.Link)}>
                <View style={CallsScreenStyle.widht10}>
                    <MaterialIcons style={LeadScreenStyle.icon} color="black" name={item.icon} size={20} />
                </View>
                <View style={CallsScreenStyle.widht70}>
                    <Text style={CallsScreenStyle.LeadDataBoxtitle}>{item.title}</Text>
                    <Text style={CallsScreenStyle.LeadDataBoxemail}>{item.SecondTtle}</Text>
                </View>
                <View style={CallsScreenStyle.widht20}>
                    <Text style={CallsScreenStyle.LeadDataBoxtitle}>{item.prise}</Text>
                </View>
            </TouchableOpacity>
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
                    <NoData source={images.NoCalls} title={Strings.Calls.nocalls} RefreshText={Strings.CustomerTab.Refresh} />
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
export default CallsScreen;
