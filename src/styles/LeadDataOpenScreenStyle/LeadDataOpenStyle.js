import { StyleSheet } from 'react-native';
import { shadow } from 'react-native-paper';
import { SH, SW, SF, Fonts, Colors, heightPercent, widthPercent } from '../../utils';
export default StyleSheet.create({

    LeadsProfileImage: {
        borderRadius: 5,
        width: SW(70),
        height: SH(70)
    },
    LeadsreletesTabOwner: {
        fontFamily: Fonts.Poppins_Bold,
        color: Colors.theme_backgound,
        fontSize: SF(15),
    },
    LeadDataBoxtitleTwo: {
        textTransform: 'lowercase',
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.theme_backgound,
        fontSize: SF(18),
    },
    LeadReletedTabBottumBorder: {
        borderBottomColor: Colors.lightgrey,
        borderBottomWidth: 1,
        marginHorizontal: SH(10),
        paddingVertical: SH(3)
    },
    DetailsdataLebalboxChild: {
        flexDirection: 'row',       
        width: '100%',
        paddingVertical:SH(3)
    },
    DetailsTextLabel: {
        fontFamily: Fonts.Poppins_Regular,
        color: Colors.gray,
        fontSize: SF(16),
        width: '35%',
        paddingLeft:SH(10),
        textAlign: 'right'
    },
    DetailsTextLabelData: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.theme_backgound,
        fontSize: SF(17),
        paddingLeft:SH(10),
        width: '65%'
    },
    DetailsMainBox: {
        backgroundColor: Colors.lightgrey,
        paddingVertical: SH(20),
        height: '100%'
    }


});