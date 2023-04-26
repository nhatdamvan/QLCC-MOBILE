import { StyleSheet } from 'react-native';
import { shadow } from 'react-native-paper';
import { Col } from 'react-native-table-component';
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

    LeadsDropdownboxOpen: {
        width: '70%'
    },
    LeadsDropdownbox: {
        width: '100%'
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
        height: SH(100),       
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
        // top: 0,
        // width: '100%',
        // height: '100%',
        backgroundColor: 'red',
        // fontSize: 50
    },
    Marginesettop: {
        marginTop: SH(-60)
    },
    NodataBox: {
        position: 'relative',
        top: -50
    },
    // FloatingAction: {
    //     position: 'relative',
    //     right: 0,
    //     bottom: 0
    // },
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
    LeadDataBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SH(10),
        paddingVertical: SH(5),
        backgroundColor: Colors.ColorEAEAEA,
        marginVertical: SH(2),
        marginHorizontal:SH(5),
        borderRadius: 5
    },
    leaddataimg: {
        width: SW(50),
        height: SH(50),
        borderRadius: 100
    },
    SearchbarLeadTabWrap: {
        paddingHorizontal: SH(20),
        paddingVertical: SH(20)
    },
    SearchbarLeadTab: {
        width: '100%',
        flexDirection: 'row',
        //    marginHorizontal: SH(20),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',

        borderRadius: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 2 : 25,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 2 : 25,
        elevation: Platform.OS === 'ios' ? 1 : 2,
        position: 'relative'
    },
    SearchbarIcon: {
        fontSize: SF(30),
        position: 'absolute',
        top: '28%',
        left: 5,
        zIndex: 1
    },
    SearchbaInput: {
        // width: '100%',
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: Platform.OS === 'ios' ? 0 : 0,
        },
        shadowOpacity: 0.58,
        shadowRadius: Platform.OS === 'ios' ? 0 : 0,
        elevation: Platform.OS === 'ios' ? 0 : 0,
        width: 'auto',
        paddingHorizontal: SH(20),
        paddingLeft: SH(40)
    },
    LeadDatLeadEmailTabFilteraBox: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: Colors.lightgrey,
        paddingVertical: SH(8)
    },
    borderBottomColor: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.theme_backgound,
        fontSize: SF(20)
    },
    LeadsDropdownboxEmailAlien: {
        flexDirection: 'row'
    },
    LeadTextEmailTabAppliad: {
        fontSize: SF(16),
        color: Colors.theme_backgound,
        fontFamily: Fonts.Poppins_Regular,
        paddingRight: SH(15),
        paddingLeft: SH(15)
    },
    addplacestextset: {
        fontSize: SF(16),
        color: Colors.theme_backgound,
        fontFamily: Fonts.Poppins_Regular,
        paddingRight: SH(15)
    },
    FilterIcon: {
        position: 'absolute',
        right: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    LeadSetbgcolorview: {
        backgroundColor: Colors.light_gray_text_color,
        height: heightPercent(70),
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 30,
        paddingTop: 20,
    },


});