import { StyleSheet } from 'react-native';
import { shadow } from 'react-native-paper';
import { SH, SW, SF, Fonts, Colors, heightPercent, widthPercent } from '../../utils';
export default StyleSheet.create({

    Minviewsigninscreen: {
        height: '100%',
    },
    LeadsHeaderbox: {
        width: '100%',
        borderBottomColor: Colors.lightgrey,
        borderBottomWidth: 1,
        paddingVertical: SH(10),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SH(10)
    },
    LeadsUpDownArro: {
        width: '15%',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
    },
    LeadsDropdownbox: {
        width: '87%',
    },
    LeadDropdown: {
        borderWidth: 0,
        padding: 0,
        paddingVertical: SH(0),
        width: '100%',
        borderRightWidth: 1,
        borderRadius: 0,
        borderRightColor: Colors.lightgrey,
        minHeight: 'auto',
        paddingRight: SH(10)
    },
    icon: {
        marginRight: 5,
    },
    selectedTextStyleLead: {
        fontSize: SF(22),
        fontFamily: Fonts.Poppins_Medium,
    },
    LeadsUpDownArroIcon: {
        fontSize: SF(24)
    },
    NoleadImage: {
        width: SW(100),
        height: SH(110),
        borderRadius: 200,
    },
    usertimagstyle: {
        width: SW(70),
        height: SH(80),
        borderRadius: 200,
    },
    NoleadText: {
        fontSize: SF(22),
        fontFamily: Fonts.Poppins_Bold,
        paddingTop: SH(5),
        color: Colors.gray
    },
    RefreshText: {
        fontSize: SF(18),
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.green_text_color,
        textAlign: 'center'
    },
    PosionToSet: {
        position: 'absolute',
        top: 100,
        backgroundColor: 'red',
    },
    Marginesettop: {
        marginTop: SH(-60)
    },
    NodataBox: {
        position: 'relative',
        top: -50,

    },
    minstyleviewphotogsrapgy: {
        marginTop: 70,
    },
    ScrolHeight: {
        height: 'auto'
    },
    email: {
        color: '#000'
    },
    LeadDataBoxtitle: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.theme_backgound,
        textTransform: 'capitalize',
        fontSize: SF(18),
    },
    LeadDataBoxemail: {
        fontFamily: Fonts.Poppins_Regular,
        color: Colors.theme_backgound,
        fontSize: SF(15),
    },
    setmargintop: {
        marginTop: SH(200),
    },
    LeadDataBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SH(10),
        paddingVertical: SH(5)
    },
    leaddataimg: {
        width: SW(50),
        height: SH(50),
        borderRadius: 100
    },
    flexcenterimg: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    settiletext: {

        width: '100%',

    },
    settiletexttwo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '50%',
        alignItems: 'center',
    },
    Settitlestyle: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: 18,
        marginLeft: 20,
        position: 'relative',
        top: 4,
        color: 'gray',
    },
    Settitlestyletwo: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: 18,
        position: 'relative',
        top: 4,
        color: 'gray',
    },
    Flexrowuserimager: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderStyle: 'dashed',
        marginBottom: 10,
    },
    Flexrowuserimagertwoset: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    setwidttwo: {
        width: '100%'
    },
    Setbgcolorview: {
        backgroundColor: Colors.light_gray_text_color,
        height: heightPercent(100),
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 30,
        paddingTop: 20,
    },
    setleftspace: {
        paddingLeft:10,
    }
});