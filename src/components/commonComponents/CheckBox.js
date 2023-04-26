import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { useSelector } from "react-redux";



function CheckBoxset(props) {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};

    const { value,onValueChange,disabled } = props;
    return (
        <CheckBox
            disabled={disabled}
            value={value}
            onValueChange={onValueChange}
            tintColors={{ true: colorrdata, false: colorrdata}}
        />
    );
};
export default CheckBoxset;