import React, { useState } from 'react';
import { View, TouchableOpacity, } from 'react-native';
import { DropDownall, Style } from '../../styles';
import { DropDown } from '../../components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from "react-redux";
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/Ionicons';

const data = [
    { label: 'All Leads', value: '1' },
    { label: 'Leads', value: '2' },
    { label: 'Task', value: '3' },
    { label: 'No Leads', value: '4' },
    { label: 'Custom Leads', value: '5' },
    { label: 'Top Leads', value: '6' },
    { label: 'Average Leads', value: '7' },
];
const LeadTab = () => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const [isFocus, setIsFocus] = useState(false);
    const [value, setValue] = useState(null);

    return (
        <View style={DropDownall.PositionRelative}>

            <View style={[DropDownall.LeadsHeaderbox, Style.PositionAbsolute]}>
                <View style={DropDownall.LeadsDropdownbox}>
                    <DropDown
                        data={data}
                        dropdownStyle={DropDownall.LeadDropdown}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                        selectedTextStyle={DropDownall.selectedTextStyleLead}
                        iconStyle={DropDownall.iconStyle}
                        value="1"
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        labelField="label"
                        valueField="value"
                        renderLeftIcon={() => (
                            <MaterialIcons style={DropDownall.icon} color="black" name={isFocus ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={20} />
                        )}
                    />
                </View>
                <View style={DropDownall.LeadsUpDownArro}>
                    <TouchableOpacity>
                        <IconM name='arrow-up-down-bold' style={[DropDownall.LeadsUpDownArroIcon, { color: colorrdata }]} />
                    </TouchableOpacity>
                </View>
                <View style={DropDownall.LeadsUpDownArro}>
                    <TouchableOpacity>
                        <IconI name='md-book' style={[DropDownall.LeadsUpDownArroIcon, { color: colorrdata }]} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
export default LeadTab;