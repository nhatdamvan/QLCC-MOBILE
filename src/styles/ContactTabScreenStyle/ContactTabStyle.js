import { StyleSheet, Dimensions } from 'react-native';
import {  Fonts, SH, SW, Colors, SF } from '../../utils';

export default StyleSheet.create({
    ContactFlatlistBox: {
        paddingTop: SH(15),
        marginHorizontal: SH(10),
    },
    ContactNameTextBox: {
        paddingVertical: SH(5)
    },
    ContactNameText: {
        fontSize: SF(18),
        color: Colors.theme_backgound,
        fontFamily: Fonts.Poppins_Medium,
        paddingHorizontal: SH(10),
        paddingVertical: SH(5),
        backgroundColor: Colors.lightgrey,
        borderRadius: 5
    }
  
});
