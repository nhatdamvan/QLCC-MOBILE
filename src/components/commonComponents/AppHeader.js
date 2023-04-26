import React, { useMemo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import propTypes from 'prop-types';
import { RowComponent } from '../../components';
import { SF, SH, SW, Fonts } from '../../utils';
import { useTheme } from '@react-navigation/native';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from "react-redux";



function AppHeader({ headerStyle, leftImage, title, titletwo, onPress, onRightPress, titleStyle, Iconname }) {
    const { colors } = useTheme();
    const { colorrdata } = useSelector(state => state.commonReducer) || {};

    const styles = useMemo(
        () =>
            StyleSheet.create({
                container: {
                    // height: SH(70),

                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',

                    ...headerStyle
                },
                leftView: {
                    // height: '100%',
                    width: '15%',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                },
                leftImageStyle: {
                    height: SH(18),
                    width: SW(18),
                    resizeMode: 'contain'
                },
                titleStyle: {                    
                    fontSize: SF(20),
                    fontWeight: '400',
                    fontFamily: Fonts.Poppins_Medium,      
                    color: '#fff',
                    ...titleStyle

                },
                rightView: {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#e3f2f0',
                    width: '100%',
                    height: 40,                    
                },
                rightImageStyle: {
                    resizeMode: 'contain',
                    marginLeft: 5
                },
                LeftIconStyle: {
                    fontSize: SF(30),
                    color: '#fff',
                },
                LeftIconLeftStyle: {
                    position: 'absolute',
                    left: 10
                }

            }),
        [headerStyle, colors],
    );
    return (
        <RowComponent rowStyle={styles.container}>
            <View style={[styles.rightView, {backgroundColor: colorrdata}]}>
                <TouchableOpacity onPress={onPress} style={styles.LeftIconLeftStyle}>
                    {Iconname ? <IconM name={Iconname} style={styles.LeftIconStyle} /> : null}
                </TouchableOpacity>
                {title ? <Text style={styles.titleStyle}>{title}</Text> : null}
                {titletwo ? <Text style={styles.titleStyle}>{titletwo}</Text> : null}
            </View>
        </RowComponent>
    )
}

AppHeader.defaultProps = {
    headerStyle: {},
    leftImage: null,
    LeftComponent: null,
    title: '',
    rightImage: null,
    onLeftPress: () => { },
};

AppHeader.propTypes = {
    headerStyle: propTypes.shape({}),
    leftImage: propTypes.any,
    LeftComponent: propTypes.any,
    title: propTypes.string,
    rightImage: propTypes.any,
    onLeftPress: propTypes.func

};

export default AppHeader;