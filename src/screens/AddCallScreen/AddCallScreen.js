import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Pressable, Switch } from 'react-native';
import { AddTaskStyle, Style, AddMeetingStyle } from '../../styles';
import { useForm, Controller } from "react-hook-form";
import { Button, Input, AppHeader, DropDown, ConfirmationAlert } from '../../components';
import { Strings } from '../../utils';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import IconF from 'react-native-vector-icons/Fontisto';
import RouteName from '../../routes/RouteName';

const ContactData = [
    { label: 'Hardik', value: '1' },
    { label: 'Abhyam', value: '2' },
    { label: 'Vyas', value: '3' },
    { label: 'Tripathi', value: '4' },
];

const AccountData = [
    { label: 'Hardik12345****', value: '1' },
    { label: 'Hardik12345****', value: '2' },
    { label: 'Hardik12345****', value: '3' },
    { label: 'Hardik12345****', value: '4' },
];

const CallTypeData = [
    { label: 'Outbound', value: '1' },
    { label: 'Inbound', value: '2' },
];

const OutgoingcallstatusData = [
    { label: 'Completed', value: '1' },
    { label: 'No Completed', value: '2' },
];

const SubjectData = [
    { label: 'Lorem ipsum', value: '1' },
    { label: 'dolor sit', value: '2' },
    { label: 'amet', value: '3' },
    { label: 'consectetur', value: '4' },
];

const CallPurposeData = [
    { label: '-None-', value: '1' },
    { label: 'Refrence', value: '2' },
];
const CallResultData = [
    { label: '-None-', value: '1' },
    { label: 'Reference', value: '2' },
];


const AddCallScreen = (props) => {
    const { navigation } = props;


    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [okbutton, Setokbutton] = useState('');

    var alertdata = {
        'logout': "Calls Added Successfully",
    }

    const onoknutton = () => {
        navigation.navigate(RouteName.HOME_SCREEN);
        okbutton;
    }

    // useForm Start
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            Callduration: '',
            callagenda: '',
        }
    });
    const onSubmit = data => {
        navigation.navigate(RouteName.HOME_SCREEN)
        console.log(data)
    };

    // date picker code

    const [value1, setValue1] = useState(null);
    const [isFocus1, setIsFocus1] = useState(false);
    const [value2, setValue2] = useState(null);
    const [isFocus2, setIsFocus2] = useState(false);
    const [value3, setValue3] = useState(null);
    const [isFocus3, setIsFocus3] = useState(false);
    const [value4, setValue4] = useState(null);
    const [isFocus4, setIsFocus4] = useState(false);
    const [value5, setValue5] = useState(null);
    const [isFocus5, setIsFocus5] = useState(false);
    const [value6, setValue6] = useState(null);
    const [isFocus6, setIsFocus6] = useState(false);
    const [value7, setValue7] = useState(null);
    const [isFocus7, setIsFocus7] = useState(false);

    const [date, setDate] = useState('date');
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);



    const DateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(moment(currentDate, 'YYYY-MM-DD').format('DD-MM-YYYY'));
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <View style={AddTaskStyle.Heigthset}>

            <AppHeader titletwo="Add Call" Iconname="arrow-left" onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} />

            <ScrollView>
                <View>

                    <View>
                        <Text style={AddTaskStyle.TitleText}>{Strings.Add_call.Call_information}</Text>
                    </View>

                    <View style={AddTaskStyle.FormParentBox}>

                        <View style={[Style.FormGroup, Style.CommonDrop]}>
                            <DropDown
                                data={ContactData}
                                dropdownStyle={Style.LeadDropdown}
                                onChange={item => {
                                    setValue2(item.value);
                                    setIsFocus2(false);
                                }}
                                selectedTextStyle={Style.selectedTextStyleLead}
                                iconStyle={Style.iconStyle}
                                value={value2}
                                onFocus={() => setIsFocus2(true)}
                                onBlur={() => setIsFocus2(false)}
                                placeholder="Conatct"
                                labelField="label"
                                valueField="value"
                                renderLeftIcon={() => (
                                    <MaterialIcons style={Style.icon} color="black" name={isFocus ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={20} />
                                )}
                            />
                        </View>


                        <View style={[Style.FormGroup, Style.CommonDrop]}>
                            <DropDown
                                data={AccountData}
                                dropdownStyle={Style.LeadDropdown}
                                onChange={item => {
                                    setValue3(item.value);
                                    setIsFocus3(false);
                                }}
                                selectedTextStyle={Style.selectedTextStyleLead}
                                iconStyle={Style.iconStyle}
                                value={value3}
                                onFocus={() => setIsFocus3(true)}
                                onBlur={() => setIsFocus3(false)}
                                placeholder="Account"
                                labelField="label"
                                valueField="value"
                                renderLeftIcon={() => (
                                    <MaterialIcons style={Style.icon} color="black" name={isFocus ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={20} />
                                )}
                            />
                        </View>

                        <View style={[Style.FormGroup, Style.CommonDrop]}>
                            <DropDown
                                data={CallTypeData}
                                dropdownStyle={Style.LeadDropdown}
                                onChange={item => {
                                    setValue1(item.value);
                                    setIsFocus1(false);
                                }}
                                selectedTextStyle={Style.selectedTextStyleLead}
                                iconStyle={Style.iconStyle}
                                value={value1}
                                onFocus={() => setIsFocus1(true)}
                                onBlur={() => setIsFocus1(false)}
                                placeholder="Call Type"
                                labelField="label"
                                valueField="value"
                                renderLeftIcon={() => (
                                    <MaterialIcons style={Style.icon} color="black" name={isFocus ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={20} />
                                )}
                            />
                        </View>

                        <View style={[Style.FormGroup, Style.CommonDrop]}>
                            <DropDown
                                data={OutgoingcallstatusData}
                                dropdownStyle={Style.LeadDropdown}
                                onChange={item => {
                                    setValue4(item.value);
                                    setIsFocus4(false);
                                }}
                                selectedTextStyle={Style.selectedTextStyleLead}
                                iconStyle={Style.iconStyle}
                                value={value4}
                                onFocus={() => setIsFocus4(true)}
                                onBlur={() => setIsFocus4(false)}
                                placeholder="Outgoing Call Status"
                                labelField="label"
                                valueField="value"
                                renderLeftIcon={() => (
                                    <MaterialIcons style={Style.icon} color="black" name={isFocus ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={20} />
                                )}
                            />
                        </View>
                        {/* start for still to date  */}
                        <View style={AddMeetingStyle.InputUnderLineBox}>
                            <View style={AddMeetingStyle.InputUnderLineTextBox}>
                                <View style={AddMeetingStyle.InputUnderLineLabel}>
                                    <Text style={AddMeetingStyle.InputUnderLineLabelText}>{Strings.Add_Meeting_Form.From}</Text>
                                </View>
                                <View>
                                    <Text style={AddMeetingStyle.TextDatlabel} onPress={showDatepicker}>{date}</Text>
                                </View>
                            </View>

                            <Text Date of birth />
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    timeZoneOffsetInMinutes={0}
                                    value={new Date()}
                                    mode={mode}
                                    is24Hour={true}
                                    display="default"
                                    onChange={DateChange}
                                />
                            )}
                            <IconF name="date" onPress={showDatepicker} style={AddMeetingStyle.DateIcon} />
                        </View>

                        <View style={AddTaskStyle.FormGroup}>
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Input
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        placeholder={Strings.Add_call.Call_duration}
                                        placeholderTextColor="lighgrey"
                                        inputType="numeric"
                                    />
                                )}
                                name="Callduration"
                            />
                            {errors.Callduration && <Text style={AddTaskStyle.InputError}>Call duration is required.</Text>}
                        </View>

                        <View style={[Style.CommonDrop, Style.FormGroup]}>
                            <DropDown
                                data={SubjectData}
                                dropdownStyle={Style.LeadDropdown}
                                onChange={item => {
                                    setValue5(item.value);
                                    setIsFocus5(false);

                                }}
                                selectedTextStyle={Style.selectedTextStyleLead}
                                iconStyle={Style.iconStyle}
                                value={value5}
                                onFocus={() => setIsFocus5(true)}
                                onBlur={() => setIsFocus5(false)}
                                placeholder="Subject"
                                labelField="label"
                                valueField="value"
                                renderLeftIcon={() => (
                                    <MaterialIcons style={Style.icon} color="black" name={isFocus ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={20} />
                                )}
                            />
                        </View>

                        <View>
                            <Text style={AddTaskStyle.TitleText}>{Strings.Add_call.purpose_of_outging_call}</Text>
                        </View>

                        <View style={[Style.CommonDrop, Style.FormGroup]}>
                            <DropDown
                                data={CallPurposeData}
                                dropdownStyle={Style.LeadDropdown}
                                onChange={item => {
                                    setValue6(item.value);
                                    setIsFocus6(false);

                                }}
                                selectedTextStyle={Style.selectedTextStyleLead}
                                iconStyle={Style.iconStyle}
                                value={value6}
                                onFocus={() => setIsFocus6(true)}
                                onBlur={() => setIsFocus6(false)}
                                placeholder="Call Purpose"
                                labelField="label"
                                valueField="value"
                                renderLeftIcon={() => (
                                    <MaterialIcons style={Style.icon} color="black" name={isFocus ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={20} />
                                )}
                            />
                        </View>

                        <View style={AddTaskStyle.FormGroup}>
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Input
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        placeholder={Strings.Add_call.call_agenda}
                                        placeholderTextColor="lighgrey"
                                    />
                                )}
                                name="callagenda"
                            />
                            {errors.callagenda && <Text style={AddTaskStyle.InputError}>call agenda is required.</Text>}
                        </View>

                        <View style={[Style.CommonDrop, Style.FormGroup]}>
                            <DropDown
                                data={CallResultData}
                                dropdownStyle={Style.LeadDropdown}
                                onChange={item => {
                                    setValue7(item.value);
                                    setIsFocus7(false);

                                }}
                                selectedTextStyle={Style.selectedTextStyleLead}
                                iconStyle={Style.iconStyle}
                                value={value7}
                                onFocus={() => setIsFocus7(true)}
                                onBlur={() => setIsFocus7(false)}
                                placeholder="Call Purpose"
                                labelField="label"
                                valueField="value"
                                renderLeftIcon={() => (
                                    <MaterialIcons style={Style.icon} color="black" name={isFocus ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={20} />
                                )}
                            />
                        </View>

                        <View style={AddTaskStyle.SubmitBtn}>
                            <Button title="Submit" onPress={() => {
                                setAlertVisible(true);
                                setAlertMessage(alertdata.logout);
                                Setokbutton('');
                                handleSubmit(onSubmit)
                            }} />
                        </View>

                    </View>
                </View>
            </ScrollView>
            <ConfirmationAlert
                message={alertMessage}
                modalVisible={alertVisible}
                setModalVisible={setAlertVisible}
                buttonminview={Style.button}
                onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
            />
        </View>
    );
};
export default AddCallScreen;
