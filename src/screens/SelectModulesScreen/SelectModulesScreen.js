import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SelectMolduleSearchStyle } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";

const SelectModuleSearch = () => {
    const navigation = useNavigation();
    const { colorrdata } = useSelector(state => state.commonReducer) || {};


    return (
        <View style={SelectMolduleSearchStyle.Minviewsigninscreen}>

            <View style={SelectMolduleSearchStyle.Minviewsigninscreen}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        width: '100%',
                        height: 'auto',
                    }}>
                    <View style={SelectMolduleSearchStyle.ResentTextBox}>
                        {/* Start for search data  */}

                    </View>


                </ScrollView>
            </View>
        </View >
    );
};
export default SelectModuleSearch;
