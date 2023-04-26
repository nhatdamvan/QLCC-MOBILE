import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, Pressable, } from 'react-native';
import { Button, Container, Input } from '../../components';
import { Strings } from '../../utils';
import RouteName from '../../routes/RouteName';
import { Style, Login } from '../../styles';
import { useTogglePasswordVisibility } from '../../utils';
import IconG from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import images from '../../index';
import { userActions } from '../../redux/reducers/userReducer';
import AppLoader from 'components/commonComponents/AppLoader';

const LoginScreen = () => {
    const { colorrdata } = useSelector(state => state.commomReducer) || {};
    console.log('colorrdata', colorrdata)
    const navigation = useNavigation();
    const [mobileNumber, setMobileNumber] = useState('');
    const [textInputpassword, setTextInputPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [Error1, setError1] = useState(0);
    const [Error2, setError2] = useState(0);
    const dispatch = useDispatch();
    const OnRegisterPress = () => {
        navigation.navigate(RouteName.REGISTER_SCREEN);
    }
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    const checkTextInput = () => {
        if (!mobileNumber.trim()) {
            setError1(1)
            return;
        }
        if (!textInputpassword.trim()) {
            setError2(1)
            return;
        }
        else {
            setIsLoading(true);
            dispatch(
                userActions.login({
                    username: mobileNumber,
                    password: textInputpassword,
                }),
            );
            setTimeout(() => setIsLoading(false), 2000);
            setIsLoading(false);
        }
    };
    return (
        <Container>
            <View style={Login.minstyleviewphotograpgy}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        width: '100%',
                        height: 'auto',
                    }}>
                    <View style={Login.container}>
                        <View style={Style.minviewallcontent}>
                            <View style={Login.setimagviewlogin}>
                                <Image style={Login.imagesetus} resizeMode='cover' source={images.logo} />
                            </View>
                            <Text style={[Login.setpatintlogin, { color: colorrdata }]}>Login</Text>
                            <View style={Login.setbottomspasce}>
                                <Input
                                    placeholder={Strings.login.mobile_number_hint}
                                    onChangeText={(value) => { setError1(0); setMobileNumber(value); }}
                                    value={mobileNumber}
                                    // inputType="numeric"
                                    maxLength={10}
                                    placeholderTextColor={'gray'}
                                />
                            </View>
                            {Error1 === 1 ?
                                <Text style={Login.pleseentername}>* Please Enter Mobile Number</Text>
                                : null
                            }
                            <View style={Style.flexrowpassword}>
                                <TextInput
                                    style={Style.setinputpassword}
                                    name="password"
                                    onPress={handlePasswordVisibility}
                                    placeholder={Strings.login.password}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholderTextColor={'gray'}
                                    textContentType="newPassword"
                                    secureTextEntry={passwordVisibility}
                                    enablesReturnKeyAutomatically
                                    onChangeText={(value) => { setError2(0); setTextInputPassword(value); }}
                                />
                                <Pressable onPress={handlePasswordVisibility}>
                                    <IconG name={rightIcon} size={25} style={Login.eyeiconset} />
                                </Pressable>
                            </View>
                            {Error2 === 1 ?
                                <Text style={Login.pleseentername}>* Please Enter the password</Text>
                                : null
                            }
                            <View style={Login.viewtextStyle}>
                                <Text style={Login.textStyle}>{Strings.login.dont_have_any_account} <Text style={[Login.registerTextStyle, { color: colorrdata }]} onPress={() => OnRegisterPress()}>{Strings.login.register}</Text></Text>
                            </View>
                            <View style={Login.buttonviewsettopspace}>
                                <Button
                                    title={Strings.login.login}
                                    onPress={checkTextInput}
                                    buttonStyle={[Login.LoginButton, { backgroundColor: colorrdata }]} />
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </View>
            {isLoading ? <AppLoader /> : null}
        </Container>
    );
}
export default LoginScreen;
