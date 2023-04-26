import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, widthPercent, Colors } from '../../utils';
export default StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: Colors.Whitw_bg_color,
    },
    inputSmall: {
        width: '100%',
        fontSize: SF(17),
        fontFamily: Fonts.Poppins_Regular
    },
    genderLabelStyle: {
        marginRight: 20,
        fontSize: SF(20),
        color: '#000',
        lineHeight: SH(24),
        fontFamily: Fonts.Poppins_Medium
    },
    redioButtonVide: {
        width: '45%',
        marginRight: SH(190),
        marginTop: SH(7)
    },
    inputRextArea: {
        marginTop: SH(13),
        width: '100%',
        height: SH(100),
        paddingLeft: 15,
        color: 'gray',
        fontSize: SF(17),
        textAlignVertical: 'top',
        borderRadius: 7,
        fontFamily: Fonts.Poppins_Medium,
        backgroundColor: 'white',
    },
    button: {
        marginHorizontal: widthPercent('5%'),
        marginTop: SH(30),
        width: '90%',
        height: SH(50)
    },
    textStyle: {
        color: '#263238',
        fontSize: 17,
        fontFamily: Fonts.Poppins_Medium,
        marginTop: SH(20),
        lineHeight: 24,
    },
    registerTextStyle: {
        fontSize: 17,
        fontFamily: Fonts.Poppins_Bold,
        marginTop: SH(50),
        lineHeight: 24
    },
    dobView: {
        marginHorizontal: widthPercent('5%'),
        marginTop: SH(12),
        width: '100%',
        borderRadius: SH(7),
        minHeight: SH(45),
        backgroundColor: "white",
    },
    dobStyle: {
        width: '100%',
        borderRadius: SH(20),
        fontSize: SF(20),
        color: '#263238',
        fontWeight: '400',
        paddingVertical: SH(8),
        paddingHorizontal: SH(15),
    },
    setinputwidth: {
        width: '48%',
    },
    setbuttonview: {
        marginTop: 20,
        width: '100%'
    },
    flexrowchekbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        marginTop: -7,
    },
    simpletextstyle: {
        fontSize: 11,
        fontFamily: Fonts.Poppins_Medium,
        position: 'relative',
        top: 1,
        color: Colors.theme_backgound
    },
    Logintextstyle: {
        fontSize: 20,
        fontFamily: Fonts.Poppins_Medium
    },

    setloginborder: {
        backgroundColor: Colors.White_text_color,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputviewstyle: {
        marginHorizontal: '5%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    setgenderview: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 2,
    },
    setbgcolorthe: {
        backgroundColor: Colors.theme_backgound_second,
        height: '100%',
    },
    setregistertext: {
        fontFamily: Fonts.Poppins_Bold,
        fontWeight: '700',
        fontSize: 25,
    },
    settopspaceregister: {
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        paddingBottom: 20
    },
    settopspaceregistertwo: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
    },
    firstnametextstyle: {
        color: 'black',
        fontSize: 15,
        opacity: 0.7,
        fontFamily: Fonts.Poppins_Medium,
    },
    inputstyle: {
        backgroundColor: 'transparent',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 0,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 2 : 0,
        elevation: Platform.OS === 'ios' ? 1 : 0,
    },
    membertextstyle: {
        fontSize: 15,
        fontFamily: Fonts.Poppins_Medium,
        textAlign: 'center',
    },
    settopspace: {
        marginTop: 30,
        width: '100%',
    },
    dropdownStyle: {
        width: 80,
    },
    setminviecountry: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        width: '100%',
        height: 47,
        color: 'gray',
        fontSize: SF(17),
        fontFamily: Fonts.Poppins_Medium,
        borderRadius: 7,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 25,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 2 : 25,
        elevation: Platform.OS === 'ios' ? 1 : 2,
    },
    dropdowniconflex: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: Colors.light_gray_text_color,
    },
    dropdowniconright: {
        position: 'relative',
        right: 9,
    },
    AlredyandloginBox: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    LoginScreenText: {
        marginLeft: SH(10),
        fontFamily: Fonts.Poppins_Bold,
        fontSize: SF(16)
    },
    borderbottomTwo: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        color: 'blue'
    }


});