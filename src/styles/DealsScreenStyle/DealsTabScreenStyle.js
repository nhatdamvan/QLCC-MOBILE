import { StyleSheet, Dimensions } from 'react-native';
import {  Fonts, SH, SW, SF, Colors } from '../../utils';

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
    widht50: {
        width: '50%'
    },
    widht25: {
        width: '25%'
    }
});
