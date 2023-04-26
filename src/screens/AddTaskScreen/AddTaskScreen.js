import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Pressable, Switch, SafeAreaView } from 'react-native';
import { AddTaskStyle, Style } from '../../styles';
import { useForm, Controller } from "react-hook-form";
import { Button, Input, AppHeader, DropDown, ConfirmationAlert } from '../../components';
import { Strings } from '../../utils';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import IconF from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import RouteName from '../../routes/RouteName';

const HostData = [
    { label: 'Owner example', value: '1' },
    { label: 'Owner example 2', value: '2' },
    { label: 'Owner example 3', value: '3' },
    { label: 'Owner example 4', value: '4' },
];

const SubjectData = [
    { label: 'Lorem ipsum', value: '1' },
    { label: 'dolor sit', value: '2' },
    { label: 'amet', value: '3' },
    { label: 'consectetur', value: '4' },
];

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

const StatusData = [
    { label: 'Done', value: '1' },
    { label: 'Pending', value: '2' },
    { label: 'Not Done', value: '3' },
    { label: 'Not Started', value: '3' },
];
const PriorityData = [
    { label: 'High', value: '1' },
    { label: 'Low', value: '2' },
    { label: 'Medium', value: '3' },
];

const ReminderData = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
];




const AddTaskScreen = () => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [okbutton, Setokbutton] = useState('');
    const [cancelbutton, SetCancelbutton] = useState('Cancel');

    var alertdata = {
        'logout': "Task Added Successfully",
    }

    const onoknutton = () => {
        navigation.navigate(RouteName.HOME_SCREEN);
        okbutton;
    }

    // useForm Start
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            repeat: '',
            description: ''
        }
    });
    const onSubmit = data => {
        navigation.navigate(RouteName.HOME_SCREEN)
        console.log(data)
    };
    // date picker code
    const [mode, setMode] = useState('date');
    const [date, setDate] = useState('Date');
    const [show, setShow] = useState(false);

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
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


    const DateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(moment(currentDate, 'YYYY-MM-DDTHH:mm:ss Z').format('MM/DD/YYYY'));
    };


    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);

    };

    const showDatepicker = () => {
        showMode('date');
    };


    return (
        <SafeAreaView style={AddTaskStyle.Heigthset}>

            <AppHeader titletwo="Add Task" Iconname="arrow-left" onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} />

            <ScrollView>
                <View>
                    <View>
                        <Text style={AddTaskStyle.TitleText}>{Strings.Add_Task.Add_Task}</Text>
                    </View>
                    <View style={AddTaskStyle.FormParentBox}>

                        <View style={[Style.CommonDrop, Style.FormGroup]}>
                            <DropDown
                                data={HostData}
                                dropdownStyle={Style.LeadDropdown}
                                onChange={item => {
                                    setValue(item.value);
                                    setIsFocus(false);

                                }}
                                selectedTextStyle={Style.selectedTextStyleLead}
                                iconStyle={Style.iconStyle}
                                value={value}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                placeholder="Task Owner"
                                labelField="label"
                                valueField="value"
                                renderLeftIcon={() => (
                                    <MaterialIcons style={Style.icon} color="black" name={isFocus ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={20} />
                                )}
                            />
                        </View>


                        <View style={[Style.CommonDrop, Style.FormGroup]}>
                            <DropDown
                                data={SubjectData}
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
                                placeholder="Subject"
                                labelField="label"
                                valueField="value"
                                renderLeftIcon={() => (
                                    <MaterialIcons style={Style.icon} color="black" name={isFocus ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={20} />
                                )}
                            />
                        </View>

                        {/* start for still to date  */}
                        <View style={AddTaskStyle.InputUnderLineBox}>
                            <View style={AddTaskStyle.InputUnderLineTextBox}>
                                <View style={AddTaskStyle.InputUnderLineLabel}>
                                    <Text style={AddTaskStyle.InputUnderLineLabelText}>{Strings.Add_Task.DueDate}</Text>
                                </View>
                                <View>
                                    <Text style={{ width: '100%', color: "black" }} onPress={showDatepicker}>{date}</Text>
                                </View>
                            </View>

                            <Text Date />
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    timeZoneOffsetInMinutes={60}
                                    value={new Date()}
                                    mode={mode}
                                    display="default"
                                    onChange={DateChange}
                                />
                            )}
                            <IconF name="date" onPress={showDatepicker} style={AddTaskStyle.DateIcon} />
                        </View>

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
                                data={StatusData}
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
                                placeholder="Status"
                                labelField="label"
                                valueField="value"
                                renderLeftIcon={() => (
                                    <MaterialIcons style={Style.icon} color="black" name={isFocus ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={20} />
                                )}
                            />
                        </View>

                        <View style={[Style.FormGroup, Style.CommonDrop]}>
                            <DropDown
                                data={PriorityData}
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
                                placeholder="Priority"
                                labelField="label"
                                valueField="value"
                                renderLeftIcon={() => (
                                    <MaterialIcons style={Style.icon} color="black" name={isFocus ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={20} />
                                )}
                            />
                        </View>

                        <View style={AddTaskStyle.ToggleSwitch}>
                            <Text style={AddTaskStyle.ToggleSwitchText}>{Strings.Add_Task.Send_Notification_Email}</Text>
                            <Switch
                                trackColor={{ false: "#767577", true: "#333" }}
                                thumbColor={isEnabled ? "#e3f2f0" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                                style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }], marginRight: 10 }}
                            />
                        </View>

                        <View style={[Style.FormGroup, Style.CommonDrop]}>
                            <DropDown
                                data={ReminderData}
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
                                placeholder="Reminder"
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
                                        placeholder={Strings.Add_Meeting_Form.repeat}
                                        placeholderTextColor="lighgrey"
                                    />
                                )}
                                name="repeat"
                            />
                            {errors.repeat && <Text style={AddTaskStyle.InputError}>Repeat is required.</Text>}
                        </View>

                        <View>
                            <Text style={AddTaskStyle.TitleText}>{Strings.Add_Task.Description_information}</Text>
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
                                        placeholder={Strings.Add_Task.Description}
                                        placeholderTextColor="lighgrey"
                                        multiline={true}
                                        numberOfLines={5}
                                        Descriptioninput={AddTaskStyle.DescriptionInput}
                                    />
                                )}
                                name="description"
                            />
                            {errors.description && <Text style={AddTaskStyle.InputError}>Description is required.</Text>}
                        </View>

                        <Button title="Submit" onPress={() => {
                            setAlertVisible(true);
                            setAlertMessage(alertdata.logout);
                            Setokbutton('');
                            handleSubmit(onSubmit)
                        }} />
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
        </SafeAreaView>
    );
};
export default AddTaskScreen;
