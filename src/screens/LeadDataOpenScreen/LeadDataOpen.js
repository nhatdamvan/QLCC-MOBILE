import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Pressable, Switch } from 'react-native';
import { TaskScreenStyle, Style, LeadDataOpenStyle } from '../../styles';
import { useForm, Controller } from "react-hook-form";
import { Button, Input, AppHeader, NoData } from '../../components';
import { Strings } from '../../utils';
import images from '../../index';
import IconF from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import RouteName from '../../routes/RouteName';
import { DetailsTab, ReletedTab, EmailsTab } from '../../screens';
import { useSelector } from "react-redux";



const LeadDataOpen = () => {
    const navigation = useNavigation();
    const [tabShow, SettabShow] = useState('1')
    const { colorrdata } = useSelector(state => state.commonReducer) || {};

    return (
        <View style={Style.Minviewsigninscreen}>

            <AppHeader titletwo="Leads" Iconname="arrow-left" onPress={() => navigation.navigate(RouteName.MY_COURSES_TAB)} />
            <ScrollView
                keyboardShouldPersistTaps="handled" style={Style.contentContainerStyle} >
                <View style={TaskScreenStyle.Minviewsigninscreen}>
                    <View style={TaskScreenStyle.minviewsigninscreen}>
                        <View style={TaskScreenStyle.whiteboxshadow}>
                            <View style={TaskScreenStyle.TabBoxTwo}>
                                <TouchableOpacity onPress={() => SettabShow('1')} style={tabShow === '1' ? TaskScreenStyle.TabsettextActiveBoxTwo : TaskScreenStyle.TabsettextBoxTwo}>
                                    <Text onPress={() => SettabShow('1')} style={tabShow === '1' ? [TaskScreenStyle.TabsettextActiveTwo, { backgroundColor: colorrdata, borderColor: colorrdata }] : TaskScreenStyle.TabsettextTwo}>{Strings.LeadsData.releted}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => SettabShow('2')} style={tabShow === '1' ? TaskScreenStyle.TabsettextActiveBoxTwo : TaskScreenStyle.TabsettextBoxTwo}>
                                    <Text onPress={() => SettabShow('2')} style={tabShow === '2' ? [TaskScreenStyle.TabsettextActiveTwo, { backgroundColor: colorrdata, borderColor: colorrdata }] : TaskScreenStyle.TabsettextTwo}>{Strings.LeadsData.Emails}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => SettabShow('3')} style={tabShow === '1' ? TaskScreenStyle.TabsettextActiveBoxTwo : TaskScreenStyle.TabsettextBoxTwo}>
                                    <Text onPress={() => SettabShow('3')} style={tabShow === '3' ? [TaskScreenStyle.TabsettextActiveTwo, { backgroundColor: colorrdata, borderColor: colorrdata }] : TaskScreenStyle.TabsettextTwo}>{Strings.LeadsData.details}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {tabShow == '1' ?
                            <View style={TaskScreenStyle.MinHeightStyle}>
                                <ReletedTab />
                            </View>
                            : null}
                        {tabShow == '2' ?
                            <View style={TaskScreenStyle.MinHeightStyle}>
                                <View>
                                    <EmailsTab />
                                </View>
                                <View style={{ marginTop: 100, paddingBottom: 50 }}>
                                    <NoData source={images.NoEmail} title={Strings.Emailtab.noEmail} />
                                </View>
                            </View>
                            : null}
                        {tabShow == '3' ?
                            <View style={TaskScreenStyle.MinHeightStyle}>
                                <DetailsTab />
                            </View>
                            : null}
                    </View>


                </View>
            </ScrollView>
        </View>
    );
};
export default LeadDataOpen;
