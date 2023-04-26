import React, { useEffect } from 'react';
import {
    View,
    Image,
    Text,
    StatusBar
} from 'react-native';
import images from '../../index';
import { Style } from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { color_picker_set_action } from "../../redux/action/CommonAction";
import { useSelector } from "react-redux";
import RouteName from '../../routes/RouteName';
import { commonActions } from '../../redux/reducers/commonReducer';

const SplashScreen = ({ navigation }) => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    StatusBar.setBackgroundColor(colorrdata);
    const dispatch = useDispatch();
    // useEffect(() => {
    //     setTimeout(() => {
    //         AsyncStorage.getItem('user_id').then((value) =>
    //             navigation.replace(RouteName.SWIPER_SCREEN)
    //         );
    //     }, 2100);
    //     dispatch(commonActions.color_picker_set_action({data: '#000000'}))
    // }, []);
    return (
        <View style={{
            height: '100%',
        }}>
            <View style={Style.setminviewstylesplasg}>
                <Image resizeMode='center' source={images.logo} style={Style.setsplashscreehhieight}
                />
            </View>
        </View>

    );
};
export default SplashScreen;
