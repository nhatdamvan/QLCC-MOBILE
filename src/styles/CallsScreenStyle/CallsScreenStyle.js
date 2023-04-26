import { StyleSheet } from 'react-native';
import { shadow } from 'react-native-paper';
import { SH, SW, SF, Fonts, Colors, heightPercent, widthPercent } from '../../utils';
export default StyleSheet.create({

    DealsTabBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SH(10),
        paddingVertical: SH(5),
        backgroundColor: Colors.lightgrey,
        borderRadius: 5,
        marginVertical: SH(2)
    },
    widht70: {
        width: '70%'
    },
    widht20: {
        width: '20%'
    },
    widht10: {
        width: '10%',       
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
    Callminsec: {
        fontFamily: Fonts.Poppins_Regular,
        color: Colors.theme_backgound,
        fontSize: SF(14),
    },
    FlatlistTop: {
        paddingTop: SH(10)
    },
    CallsSetbgcolorview: {
        backgroundColor: Colors.light_gray_text_color,
        height: heightPercent(60),
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 30,
        paddingTop: 20,
    },
  
});