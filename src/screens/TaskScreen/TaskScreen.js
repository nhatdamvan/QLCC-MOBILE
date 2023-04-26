import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { TaskScreenStyle, Style } from '../../styles';
import { AppHeader } from '../../components';
import { Strings } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import RouteName from '../../routes/RouteName';
import { AllRecordTab, MyRecordTab } from '../../screens';
import { useSelector } from "react-redux";



const TaskScreen = () => {
    const navigation = useNavigation();
    const [tabShow, SettabShow] = useState('1')
    const { colorrdata } = useSelector(state => state.commonReducer) || {};

    return (
        <View style={Style.Minviewsigninscreen}>

            <AppHeader titletwo="Task" Iconname="arrow-left" onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} />

            <View style={TaskScreenStyle.Minviewsigninscreen}>
                <ScrollView
                    keyboardShouldPersistTaps="handled" style={Style.contentContainerStyle} >

                    <View style={TaskScreenStyle.minviewsigninscreen}>
                        <View style={TaskScreenStyle.whiteboxshadow}>                       
                            <View style={Style.TabBox}>
                                <TouchableOpacity onPress={() => SettabShow('1')} style={tabShow === '1' ? [Style.TabsettextActiveBox, { backgroundColor: colorrdata }] : Style.TabsettextBox}>
                                    <Text onPress={() => SettabShow('1')} style={tabShow === '1' ? Style.TabsettextActive : [Style.TabsettextActive, { color: colorrdata }]}>{Strings.Task_Screen.MyRecords}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => SettabShow('2')} style={tabShow === '2' ? [Style.TabsettextActiveBox, { backgroundColor: colorrdata }] : Style.TabsettextBox}>
                                    <Text onPress={() => SettabShow('2')} style={tabShow === '2' ? Style.TabsettextActive : [Style.TabsettextActive, { color: colorrdata }]}>{Strings.Task_Screen.AllRecords}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {tabShow == '1' ?
                            <View style={TaskScreenStyle.MinHeightStyle}>
                                <Text style={TaskScreenStyle.bordersetactive}></Text>

                                <MyRecordTab />
                            </View>
                            : null}
                        {tabShow == '2' ?
                            <View style={TaskScreenStyle.MinHeightStyle}>
                                <Text style={TaskScreenStyle.bordersetactivetwo}></Text>
                                <AllRecordTab />
                            </View>
                            : null}
                    </View>

                </ScrollView>
            </View>
        </View>
    );
};
export default TaskScreen;
