import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Pressable, Switch, Image, SafeAreaView } from 'react-native';
import { AddTaskStyle, Style } from '../../styles';
import { useForm, Controller } from "react-hook-form";
import { Button, Input, AppHeader, ConfirmationAlert } from '../../components';
import { Strings, SH } from '../../utils';
import { useNavigation } from '@react-navigation/native';
import RouteName from '../../routes/RouteName';
import ImgPicker from './ImgPicker';
import ImagePicker from 'react-native-image-crop-picker';

const NewLeadsScreen = () => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [okbutton, Setokbutton] = useState('');
   
  
    var alertdata = {
      'logout': "Lead Added Successfully",
    }
  
    const onoknutton = () => {
      navigation.navigate(RouteName.LEAD_DATA_OPEN_SCREEN);
      okbutton;
    }

    // useForm Start
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            leadownerlabel: '',
            company: '',
            salutation: '',
            firstname: '',
            lastname: '',
            title: '',
            email: '',
            phone: ''

        }

    });


    const onSubmit = data => {
       
        console.log(data)
    };

    const [imgpathselect, SetImgpathselect] = useState('');

    const chooseFile = () => {
        ImagePicker.openPicker({
            height: SH(414),
            cropping: true,
            includeBase64: true,
            mediaType: 'photo',

        }).then(response => {
            if (response) {
                const file = response ? Math.round((response.size / 1024)) : '';
                if (file != '' && file >= 5120) {
                    return;
                }
                SetImgpathselect(response.path);
            }
        });
    };
    console.log('imgpathselect', imgpathselect)
    return (
        <SafeAreaView style={AddTaskStyle.Heigthset}>

            <AppHeader titletwo="Add Lead" Iconname="arrow-left" onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} />

            <ScrollView>
                <View>
                    <View>
                        <Text style={AddTaskStyle.TitleText}>{Strings.AddLeadScreen.leadimagetext}</Text>

                        <ImgPicker
                            userImage={imgpathselect}
                            onPress={() =>
                                chooseFile('photo')
                            }
                        />
                    </View>

                    <View style={AddTaskStyle.FormParentBox}>
                        <View>
                            <Text style={AddTaskStyle.TitleText}>{Strings.AddLeadScreen.leadinformation}</Text>
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
                                        placeholder={Strings.AddLeadScreen.leadownerlabel}
                                        placeholderTextColor="lighgrey"
                                    />
                                )}
                                name="leadownerlabel"
                            />
                            {errors.leadownerlabel && <Text style={AddTaskStyle.InputError}>Lead Owner is required.</Text>}
                        </View>


                        {/* Location field */}
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
                                        placeholder={Strings.AddLeadScreen.company}
                                        placeholderTextColor="lighgrey"
                                    />
                                )}
                                name="company"
                            />
                            {errors.company && <Text style={AddTaskStyle.InputError}>Company is required.</Text>}
                        </View>

                        {/* start for still to date  */}

                        {/* salutation input */}
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
                                        placeholder={Strings.AddLeadScreen.salutation}
                                        placeholderTextColor="lighgrey"
                                    />
                                )}
                                name="salutation"
                            />
                            {errors.salutation && <Text style={AddTaskStyle.InputError}>Salutation is required.</Text>}
                        </View>
                        {/* First name input */}
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
                                        placeholder={Strings.AddLeadScreen.firstnamelabel}
                                        placeholderTextColor="lighgrey"
                                    />
                                )}
                                name="firstname"
                            />
                            {errors.firstname && <Text style={AddTaskStyle.InputError}>First Name is required.</Text>}
                        </View>
                        {/* Last Name */}
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
                                        placeholder={Strings.AddLeadScreen.lastnamelabel}
                                        placeholderTextColor="lighgrey"
                                    />
                                )}
                                name="lastname"
                            />
                            {errors.lastname && <Text style={AddTaskStyle.InputError}>Last Name is required.</Text>}
                        </View>
                        {/* Title Name input */}
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
                                        placeholder={Strings.AddLeadScreen.titlelabel}
                                        placeholderTextColor="lighgrey"
                                    />
                                )}
                                name="title"
                            />
                            {errors.title && <Text style={AddTaskStyle.InputError}>Title is required.</Text>}
                        </View>

                        {/* Email input  */}
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
                                        placeholder={Strings.AddLeadScreen.emaillabel}
                                        placeholderTextColor="lighgrey"
                                    />
                                )}
                                name="email"
                            />
                            {errors.email && <Text style={AddTaskStyle.InputError}>Email is required.</Text>}
                        </View>
                        {/* Phone input */}
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
                                        placeholder={Strings.AddLeadScreen.phonelabel}
                                        placeholderTextColor="lighgrey"
                                        inputType="numeric"
                                    />
                                )}
                                name="phone"
                            />
                            {errors.phone && <Text style={AddTaskStyle.InputError}>Phone is required.</Text>}
                        </View>

                        <Button title="Submit" onPress={() => {
                            setAlertVisible(true);
                            setAlertMessage(alertdata.logout);
                            Setokbutton('');
                        }} />
                    </View>
                </View>
            </ScrollView>
            <ConfirmationAlert
                message={alertMessage}
                modalVisible={alertVisible}
                setModalVisible={setAlertVisible}
                onPressCancel={() => setAlertVisible(!alertVisible)}
                onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                buttonminview={Style.button}
            />
        </SafeAreaView>
    );
};
export default NewLeadsScreen;
