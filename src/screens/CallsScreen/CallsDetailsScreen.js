import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { TaskScreenStyle, Style, CallsScreenStyle, LeadScreenStyle, LeadDataOpenStyle, AddMeetingStyle } from '../../styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Strings, Details } from '../../utils';
import { useSelector } from "react-redux";
import images from '../../index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconA from 'react-native-vector-icons/AntDesign';
import RouteName from '../../routes/RouteName';


const ContactData = [
    {
        id: '1',
        title: 'Outgoing to Unknown',
        callStatus: 'Outbound Call',
        SecondTtle: '11:30 AM',
        icon: 'call-made',
        Link: (RouteName.CALLS_DETAILS_SCREEN),
        callTime: '05:00',
        callTimelabel: 'Min:sec'
    },
    {
        id: '1',
        title: 'Outgoing to Unknown',
        SecondTtle: '11:40 AM',
        callStatus: 'Inbound Call',
        icon: 'call-received',
        Link: (RouteName.CALLS_DETAILS_SCREEN),
        callTime: '05:00',
        callTimelabel: 'Min:sec'
    },


];




const CallsDetailsScreen = (props) => {
    const { navigation } = props;
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [tabShow, SettabShow] = useState('1')
    const { colorrdata } = useSelector(state => state.commonReducer) || {};

    const ContactDataList = (item, index) => {
        return (
            <View style={CallsScreenStyle.DealsTabBox} onPress={() => navigation.navigate(item.Link)}>
                <View style={CallsScreenStyle.widht10}>
                    <MaterialIcons style={LeadScreenStyle.icon} color="black" name={item.icon} size={20} />
                </View>
                <View style={CallsScreenStyle.widht70}>
                    <Text style={CallsScreenStyle.LeadDataBoxtitle}>{item.title}</Text>
                    <Text style={CallsScreenStyle.LeadDataBoxemail}>{item.callStatus}</Text>
                    <Text style={CallsScreenStyle.LeadDataBoxemail}>{item.SecondTtle}</Text>
                </View>
                <View style={CallsScreenStyle.widht20}>
                    <Text style={CallsScreenStyle.LeadDataBoxtitle}>{item.callTime}</Text>
                    <Text style={CallsScreenStyle.Callminsec}>{item.callTimelabel}</Text>
                </View>
            </View>
        );
    }

    const LeadDataBox = (item, index) => {
        return (
            <View style={LeadDataOpenStyle.DetailsdataLebalboxChild}>
                <Text style={LeadDataOpenStyle.DetailsTextLabel}>{item.title}</Text>
                <Text style={LeadDataOpenStyle.DetailsTextLabelData}>
                    {item.DataLabel}</Text>
            </View>
        );
    }

    return (
        <View style={TaskScreenStyle.Minviewsigninscreen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    width: '100%',
                    height: 'auto',
                }}>
                <View style={TaskScreenStyle.Setheight}>
                    <View style={Style.whiteboxshadow}>
                        <View style={Style.TabBox}>
                            <TouchableOpacity onPress={() => SettabShow('1')} style={tabShow === '1' ? [Style.TabsettextActiveBox, { backgroundColor: colorrdata }] : Style.TabsettextBox}>
                                <Text onPress={() => SettabShow('1')} style={tabShow === '1' ? Style.TabsettextActive : [Style.TabsettextActive, { color: colorrdata }]}>Related</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => SettabShow('2')} style={tabShow === '2' ? [Style.TabsettextActiveBox, { backgroundColor: colorrdata }] : Style.TabsettextBox}>
                                <Text onPress={() => SettabShow('2')} style={tabShow === '2' ? Style.TabsettextActive : [Style.TabsettextActive, { color: colorrdata }]}>Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {tabShow == '1' ?
                        <View style={Style.settopspce}>
                            <View style={CallsScreenStyle.FlatlistTop}>
                                <FlatList
                                    data={ContactData}
                                    renderItem={({ item, index }) => ContactDataList(item, index)}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}
                                />
                                <View style={CallsScreenStyle.CallsSetbgcolorview}>
                                    <View style={TaskScreenStyle.flexrowtwxtandtitle}>
                                        <Text style={[TaskScreenStyle.Addnotetextstyle, { color: colorrdata }]}>Notes</Text>
                                        <View style={TaskScreenStyle.SetLineIcon}>
                                            <TouchableOpacity>
                                                <MaterialIcons name="keyboard-voice" color={colorrdata} size={25} />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={TaskScreenStyle.paddleftset} onPress={() => navigation.navigate(RouteName.ADD_NOTE_SCREEN)}>
                                                <IconA name="plus" color={colorrdata} size={25} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>                                                                        
                                </View>
                            </View>
                        </View>
                        : null}
                    {tabShow == '2' ?
                        <ScrollView>
                            <View style={{ height: '100%' }}>
                                <View style={LeadDataOpenStyle.HeadingStyle}>
                                    <Text style={AddMeetingStyle.TitleText}>{Strings.Calls.calldetails}</Text>
                                </View>
                                <View style={LeadDataOpenStyle.DetailsMainBox}>
                                    <FlatList
                                        data={Details}
                                        renderItem={({ item, index }) => LeadDataBox(item, index)}
                                        keyExtractor={item => item.id}
                                        showsHorizontalScrollIndicator={false}
                                    />
                                </View>
                            </View>
                        </ScrollView>
                        : null}
                </View>
            </ScrollView>
        </View>

    );
};
export default CallsDetailsScreen;
