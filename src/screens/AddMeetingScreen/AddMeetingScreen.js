import React, { useState } from 'react';
import { View, Text, ScrollView, Switch } from 'react-native';
import { AddMeetingStyle, Style } from '../../styles';
import { useForm, Controller } from "react-hook-form";
import { Button, Input, AppHeader, DropDown, ConfirmationAlert } from '../../components';
import { Strings } from '../../utils';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import IconF from 'react-native-vector-icons/Fontisto';
import RouteName from '../../routes/RouteName';


const HostData = [
    { label: 'example', value: '1' },
    { label: 'demohost', value: '2' },
    { label: 'mydummy', value: '3' },
    { label: 'No Leads', value: '4' },
];
const ParticipantsData = [
    { label: 'Selected Participents', value: '1' },
    { label: 'Selected Participents 2', value: '2' },
    { label: 'Selected Participents 3', value: '3' },
    { label: 'Selected Participents 4', value: '4' },
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



const RepeatData = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: 'No Repeat', value: '4' },
];


const AddMeetingScreen = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [okbutton, Setokbutton] = useState('');
    const [cancelbutton, SetCancelbutton] = useState('Cancel');

    var alertdata = {
        'logout': "Meeting Added Successfully",
    }

    const onoknutton = () => {
        navigation.navigate(RouteName.HOME_SCREEN);
        okbutton;
    }

    // useForm Start
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            location: '',

        }
    });
    const onSubmit = data => {
        navigation.navigate(RouteName.HOME_SCREEN)
        console.log(data)
    };

    // date picker code
    const [date, setDate] = useState('date');
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [date1, setDate1] = useState('Select Date');
    const [mode1, setMode1] = useState('Select Date');
    const [show1, setShow1] = useState(false);


    const DateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(moment(currentDate, 'YYYY-MM-DD').format('DD-MM-YYYY hh:mm:ss'));
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };


    const DateChange1 = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow1(false);
        setDate1(moment(currentDate, 'YYYY-MM-DD').format('DD-MM-YYYY hh:mm:ss'));
    };

    const showMode1 = currentMode => {
        setShow1(true);
        setMode1(currentMode);
    };

    const showDatepicker1 = () => {
        showMode1('date');
    };



    return (
        <View>
            <AppHeader titletwo="Add Meeting" Iconname="arrow-left" onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} />

            <ScrollView>

                <View>
                    <Text style={AddMeetingStyle.TitleText}>{Strings.Add_Meeting_Form.Meeting_Information}</Text>
                </View>
                <View style={AddMeetingStyle.FormParentBox}>
                    <View style={AddMeetingStyle.FormGroup}>
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
                                    placeholder={Strings.Add_Meeting_Form.TitleField}
                                    placeholderTextColor="lighgrey"
                                />
                            )}
                            name="firstName"
                        />
                        {errors.firstName && <Text style={AddMeetingStyle.InputError}>This is required.</Text>}
                    </View>


                    {/* Location field */}
                    <View style={AddMeetingStyle.FormGroup}>
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
                                    placeholder={Strings.Add_Meeting_Form.location}
                                    placeholderTextColor="lighgrey"
                                />
                            )}
                            name="location"
                        />
                        {errors.location && <Text style={AddMeetingStyle.InputError}>This is required.</Text>}
                    </View>


                    <View style={AddMeetingStyle.ToggleSwitch}>
                        <Text style={AddMeetingStyle.ToggleSwitchText}>{Strings.Add_Meeting_Form.All_day}</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#333" }}
                            thumbColor={isEnabled ? "#06BADD" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }], marginRight: 10 }}
                        />
                    </View>

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
                    {/* start for still to date  */}

                    <View style={AddMeetingStyle.InputUnderLineBox}>
                        <View style={AddMeetingStyle.InputUnderLineTextBox}>
                            <View style={AddMeetingStyle.InputUnderLineLabel}>
                                <Text style={AddMeetingStyle.InputUnderLineLabelText}>{Strings.Add_Meeting_Form.To}</Text>
                            </View>
                            <View>
                                <Text style={AddMeetingStyle.TextDatlabel} onPress={showDatepicker1}>{date1}</Text>
                            </View>
                        </View>

                        <Text Date of birth />
                        {show1 && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                timeZoneOffsetInMinutes={0}
                                value={new Date()}
                                mode={mode1}
                                is24Hour={true}
                                display="default"
                                onChange={DateChange1}

                            />
                        )}
                        <IconF name="date" onPress={showDatepicker1} style={AddMeetingStyle.DateIcon} />
                    </View>

                    <View style={[AddMeetingStyle.FormGroup, Style.CommonDrop]}>
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
                            placeholder="Host"
                            labelField="label"
                            valueField="value"
                            renderLeftIcon={() => (
                                <MaterialIcons style={Style.icon} color="black" name={isFocus ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={20} />
                            )}
                        />
                    </View>

                    <View style={[AddMeetingStyle.FormGroup, Style.CommonDrop]}>
                        <DropDown
                            data={ParticipantsData}
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
                            placeholder="Participants"
                            labelField="label"
                            valueField="value"
                            labelStyle={AddMeetingStyle.labelStyle}
                            renderLeftIcon={() => (
                                <MaterialIcons style={Style.icon} color="black" name={isFocus ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={20} />
                            )}
                        />
                    </View>

                    <View style={[AddMeetingStyle.FormGroup, Style.CommonDrop]}>
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

                    <View style={[AddMeetingStyle.FormGroup, Style.CommonDrop]}>
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


                    <View style={[AddMeetingStyle.FormGroup, Style.CommonDrop]}>
                        <DropDown
                            data={RepeatData}
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
                            placeholder="RepeatData"
                            labelField="label"
                            valueField="value"
                            renderLeftIcon={() => (
                                <MaterialIcons style={Style.icon} color="black" name={isFocus ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={20} />
                            )}
                        />
                    </View>



                    <Button title="Submit"
                        onPress={() => {
                            setAlertVisible(true);
                            setAlertMessage(alertdata.logout);
                            Setokbutton('');
                            handleSubmit(onSubmit)
                        }}
                    />
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
export default AddMeetingScreen;
