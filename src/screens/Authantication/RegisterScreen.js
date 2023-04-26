import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Pressable, TouchableOpacity, Linking } from 'react-native';
import { Input, Button, CheckBox, DropDown } from '../../components';
import { Strings } from '../../utils';
import RouteName from '../../routes/RouteName';
import { RegisterStyle, Style } from '../../styles';
import { useTogglePasswordVisibility } from '../../utils/Passwordviseble';
import IconG from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";
import { Countrycode } from '../../screens';
import IconA from 'react-native-vector-icons/FontAwesome';


const Register = () => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [emailId, setEmailId] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const onChangeText = (text, type) => {
        if (type === 'user_name') setUsername(text);
        if (type === 'emaiId') setEmailId(text);
        if (type === 'mobile') setMobileNumber(text);
        if (type === 'password') setPassword(text);
        if (type === 'city') setCity(text);
        if (type === 'pincode') setPincode(text);
    };

    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    const [password, setPassword] = useState('');

    return (
        <View>
            <ScrollView
                contentContainerStyle={Style.sacroowviewstyletwor}>
                <View style={RegisterStyle.container}>
                    <View style={Style.minviewallcontent}>
                        <View style={RegisterStyle.settopspaceregister}>
                            <Text style={[RegisterStyle.setregistertext, { color: colorrdata }]}>{Strings.register.register}</Text>
                        </View>
                        <View style={RegisterStyle.settopspaceregistertwo}>
                            <Text style={RegisterStyle.firstnametextstyle}>{Strings.register.fullnametext}</Text>
                        </View>
                        <Input
                            placeholder={Strings.register.name_hint}
                            onChangeText={(text) => onChangeText(text, 'user_name')}
                            value={username}
                        />
                        <View style={RegisterStyle.settopspaceregistertwo}>
                            <Text style={RegisterStyle.firstnametextstyle}>{Strings.register.Mobilernumber}</Text>
                        </View>
                        <View style={RegisterStyle.setminviecountry}>
                            <View style={RegisterStyle.dropdowniconflex}>
                                <Countrycode />
                                <IconA name={"angle-down"} style={RegisterStyle.dropdowniconright} size={20} color={colorrdata} />
                            </View>
                            <Input
                                placeholder={Strings.register.mobile_number_hint}
                                onChangeText={(text) => onChangeText(text, 'mobile')}
                                value={mobileNumber}
                                maxLength={10}
                                inputType="numeric"
                                placeholderTextColor={'gray'}
                                inputStyle={RegisterStyle.inputstyle}
                            />
                        </View>
                        <View style={RegisterStyle.settopspaceregistertwo}>
                            <Text style={RegisterStyle.firstnametextstyle}>{Strings.register.Emailtext}</Text>
                        </View>
                        <Input
                            placeholder={Strings.register.email_hint}
                            onChangeText={(text) => onChangeText(text, 'emaiId')}
                            value={emailId}
                            placeholderTextColor={'gray'}
                        />
                        <View style={RegisterStyle.settopspaceregistertwo}>
                            <Text style={RegisterStyle.firstnametextstyle}>{Strings.register.Passwodtext}</Text>
                        </View>
                        <View style={Style.flexrowpassword}>
                            <TextInput
                                style={Style.setinputpassword}
                                name="password"
                                placeholderTextColor={'gray'}
                                placeholder={Strings.login.password}
                                autoCapitalize="none"
                                autoCorrect={false}
                                textContentType="newPassword"
                                secureTextEntry={passwordVisibility}
                                value={password}
                                enablesReturnKeyAutomatically
                                onChangeText={text => setPassword(text)}
                            />
                            <Pressable onPress={handlePasswordVisibility}>
                                <IconG name={rightIcon} size={25} style={RegisterStyle.eyeiconset} />
                            </Pressable>
                        </View>

                        <View style={RegisterStyle.flexrowchekbox}>
                            <View>
                                <CheckBox disabled={false}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)} />
                            </View>
                            <Text style={RegisterStyle.simpletextstyle}>I agree to the <Text style={RegisterStyle.borderbottomTwo}><Text  onPress={() => Linking.openURL('https://myaccount.google.com/')}>Terms Of Service</Text></Text> and <Text onPress={() => Linking.openURL('https://myaccount.google.com/')} style={RegisterStyle.borderbottomTwo}>Privacy Policy</Text></Text>
                        </View>
                        <View style={RegisterStyle.setbuttonview}>
                            <Button
                                title={Strings.register.register}
                                onPress={() => navigation.navigate(RouteName.REGIATRAION_SUCCESSFULL)}
                                style={RegisterStyle.button} />
                        </View>
                        <View style={RegisterStyle.settopspace}>
                            <View style={RegisterStyle.AlredyandloginBox}>
                                <Text style={[RegisterStyle.membertextstyle, { color: colorrdata }]}>Already a member?</Text>
                                <TouchableOpacity onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}>
                                    <Text style={[RegisterStyle.LoginScreenText, { color: colorrdata }]}>{Strings.login.login}</Text>
                                </TouchableOpacity>
                            </View>                           
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View>
    );
};
export default Register;
