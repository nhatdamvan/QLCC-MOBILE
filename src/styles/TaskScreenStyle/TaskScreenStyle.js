import { StyleSheet } from 'react-native';
import { shadow } from 'react-native-paper';
import { SH, SW, SF, Fonts, Colors, heightPercent, widthPercent } from '../../utils';
export default StyleSheet.create({

    Minviewsigninscreen: {
        height: '100%',
    },
    TabBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: SH(15)
    },
    TabBoxTwo: {
        flexDirection: 'row',        
        width: '100%',       
    },
    TabsettextActiveBox: {
        padding: SH(10),
        textAlign: 'center',
        width: '50%',
    },
    TabsettextActiveBox: {
        padding: SH(10),
        textAlign: 'center',
        width: '50%',
    },
    TabsettextActive: {
        color: Colors.theme_backgound_second,
        textTransform: 'uppercase',
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(20),
        textAlign: 'center',
        paddingVertical: SH(5),
        paddingHorizontal: SH(10),
        borderWidth: 1,
    },
    Tabsettext: {
        color: '#000',
        textTransform: 'uppercase',
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(20),
        textAlign: 'center',
        paddingVertical: SH(5),
        paddingHorizontal: SH(10),
        borderWidth: 1,
    },
    TabsettextActiveBoxTwo: {
        padding: SH(10),
        paddingHorizontal: SH(0),
        textAlign: 'center',
        width: widthPercent(33.33),
    },
    TabsettextBoxTwo: {
        padding: SH(10),
        paddingHorizontal: SH(0),
        textAlign: 'center',
        width: widthPercent(33.33),
    },
    TabsettextActiveTwo: {
        color: Colors.theme_backgound_second,
        textTransform: 'uppercase',
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(16),
        textAlign: 'center',
        paddingVertical: SH(5),
        paddingHorizontal: SH(10),
        borderWidth: 1,
    },
    TabsettextTwo: {
        color: '#000',
        textTransform: 'uppercase',
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(16),
        textAlign: 'center',
        paddingVertical: SH(5),
        paddingHorizontal: SH(10),
        borderWidth: 1,
    },


    TaskTextShowTextBox: {
        padding: SH(10),
        width: '100%'
    },
    TaskTextShowHeadText: {
        fontSize: SF(19),
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.theme_backgound
    },
    TaskTextShowText: {
        fontSize: SF(16),
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.gray
    },
    TaskTextShowTextBoxSecond: {
        padding: SH(10),
        paddingLeft: SH(20),
        width: '100%'
    },
    TaskNoDataText: {
        fontSize: SF(16),
        fontFamily: Fonts.Poppins_Regular,
        color: Colors.gray,
        textAlign: 'center',
        height: 'auto',
    },
    TaskNoDataTextBox: {
        backgroundColor: Colors.lightgrey,
        padding: SH(20),
        height: 'auto',
        width: '100%'
    },
    Heigthset: {
        height: '100%'
    },
    MinHeightStyle: {
        height: '100%'
    },
    SearchText: {
        fontSize: SH(18),
        textAlign: 'center',
        fontFamily: Fonts.Poppins_Regular
    },
    flexcheckbox: {
        flexDirection: 'row',
    },
    UserPictureSet: {
        height: 60,
        width: 60,
        borderRadius: 200,
    },
    flexcheckboxminview: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingRight: 10,
        marginTop: 20,
    },

    Setheightflex: {
        flexDirection: 'row',
        marginTop: 10,
    },
    minviewdropdpwnflex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingRight: 10,
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        paddingBottom: 20,
        marginTop: 20,
    },
    addtaskscreen: {
        fontSize: 15,
        fontFamily: Fonts.Poppins_Medium,
    },
    Tasktextstyle: {
        fontSize: 16,
        fontFamily: Fonts.Poppins_Medium,
    },
    setflexnote: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
        borderTopWidth: 1,
        borderStyle: 'dashed',
        paddingTop: 20,
    },
    setbgcolorview: {
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
        marginHorizontal: 10,
        height: 37,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    Notetextstyle: {
        color: Colors.White_text_color,
        fontFamily: Fonts.Poppins_Medium,
        fontSize: 18,
    },
    flexrowimagetextstyle: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    Settextstylemargin: {
        marginLeft: 20,
    },
    Addnotetextstyle: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: 18,
    },
    Addnotetextstyletwo: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: 13,
        color: Colors.gray_text_color,
        marginTop: -5,
    },
    Setbgcolorview: {
        backgroundColor: Colors.light_gray_text_color,
        height: heightPercent(55),
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 30,
        paddingTop: 20,
    },
    SetbgcolorviewTaskDetails: {
        backgroundColor: Colors.light_gray_text_color,
        height: heightPercent(70),
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 30,
        paddingTop: 20,
    },
    flexrowtwxtandtitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 6,
        borderStyle: 'dashed',
        borderBottomWidth: 1,
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
    setheightbgcolor: {
        paddingHorizontal: 12,
        width: '92%',
        marginHorizontal: 10,
        height: 77,
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
    cetcenterbutton: {
        marginHorizontal: 16,
        marginTop: 8,
    },
    cetcenterbuttontwo: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    Setbuttonview: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    SetLineIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    paddleftset: {
        paddingLeft: SH(10)
    }
});