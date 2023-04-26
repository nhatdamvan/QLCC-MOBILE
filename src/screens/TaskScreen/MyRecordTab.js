import React from 'react';
import { View, Text} from 'react-native';
import { TaskScreenStyle } from '../../styles';
import { Strings } from '../../utils';
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';

const MyRecordTab = () => {
    const navigation = useNavigation();
    const { colorrdata } = useSelector(state => state.commonReducer) || {};

    return (
        <View style={{ height: '100%' }}>
            <View style={TaskScreenStyle.TaskTextShowTextBox}>
                <Text style={TaskScreenStyle.TaskTextShowHeadText}>{Strings.Task_Screen.Taskandcount    }</Text>
            </View>
            <View style={TaskScreenStyle.TaskTextShowTextBoxSecond}>
                <Text style={TaskScreenStyle.TaskTextShowText}>{Strings.Task_Screen.Task}</Text>
            </View>
            <View style={TaskScreenStyle.TaskNoDataTextBox}>
                <Text style={TaskScreenStyle.TaskNoDataText}>
                    No data found in Home, Leads, Accounts, Contacts, Deals, Meetings and Calls
                </Text>
                <Text style={[TaskScreenStyle.SearchText, { color: colorrdata }]}>Search across all CRM apps</Text>
            </View>
        </View>
    );
};
export default MyRecordTab;
