import { StyleSheet } from 'react-native';
import { shadow } from 'react-native-paper';
import { SH, SW, SF, Fonts, Colors, heightPercent, widthPercent } from '../../utils';
export default StyleSheet.create({

    Heigthset: {
        height: '100%'
    },
    TitleText: {
        fontFamily: Fonts.Poppins_Medium,
        color: 'gray',
        fontSize: SF(18),
        textAlign: 'center',
        textTransform: 'uppercase',
        paddingVertical: SH(10)
    },
    FormParentBox: {
        paddingHorizontal: SH(15),
        height: '100%',
        paddingBottom: SH(15)
    },
    Input: {
        paddingHorizontal: 12,
        width: '100%',
        paddingTop: 12,
        paddingBottom: 7,
        height: 47,
        color: '#000',
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
    ToggleSwitch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SH(10)
    },
    ToggleSwitchText: {
        fontFamily: Fonts.Poppins_Regular,
        color: 'gray',
        fontSize: SF(16)
    },
    InputUnderLineBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SH(10)
    },
    InputUnderLineTextBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto'
    },
    InputUnderLineLabel: {
        marginRight: SH(20),
        textAlignVertical: 'center',
        width: SW(80)

    },
    InputUnderLineLabelText: {
        fontFamily: Fonts.Poppins_Regular,
        color: '#000',
        paddingTop: SH(3)
    },
    DateIcon: {
        fontSize: SF(25),
        marginRight: SH(10)
    },
    InputError: {
        color: 'red'
    },
    FormGroup: {
        marginBottom: SH(10)
    },
    DescriptionInput: {
        flexDirection: "row",
        alignSelf: "center",
        width: "96%",
        height: 90,
        textAlignVertical: 'top',
    },
    InputUnderLineLabelTextTwo: {
        width: SW(100),       
    },
    SubmitBtn: {
        marginTop: SH(20)
    }
});