import { StyleSheet } from 'react-native';
import { shadow } from 'react-native-paper';
import { SH, SW, SF, Fonts, Colors, heightPercent, widthPercent } from '../../utils';
export default StyleSheet.create({

    PaadingHoset: {
        paddingHorizontal: SH(10)
    },
    AddnoteInput: {
        backgroundColor: 'transparent',
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 0 : 0,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 0 : 0,
        elevation: Platform.OS === 'ios' ? 0 : 0,
        height: SH(70),
        borderBottomColor: 1,
    },
    AddScreenStyle: {
        backgroundColor: 'red',
        height: 500
    },
    AddNotesetheightbgcolor: {
        paddingHorizontal: 12,
        width: '100%',      
        height: 50,
        marginTop: 20,
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
    Addnoteinputstyle: {
        backgroundColor: 'transparent',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 0,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 2 : 0,
        elevation: Platform.OS === 'ios' ? 1 : 0,     
    },
    AddnoteinputstyleTextArea: {
        backgroundColor: 'transparent',
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 0,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 2 : 0,
        elevation: Platform.OS === 'ios' ? 1 : 0,     
    },
    AddNotesetheightbgcolorText: {
        paddingHorizontal: 12,
        width: '100%',     
        height: SH(200),
        marginTop: 20,
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
    }

});