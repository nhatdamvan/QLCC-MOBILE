import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { LeadScreenStyle, Style } from '../../styles';
import { Strings } from '../../utils';
import { useSelector } from "react-redux";
import images from '../../index';
import RouteName from '../../routes/RouteName';
import { color } from 'react-native-reanimated';
import useNavigation from '@react-navigation/native';

const NoData = (props) => {
    const { source, title, RefreshText } = props;
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    
    return (

        <View style={[Style.minstyleviewphotograpgy, LeadScreenStyle.NodataBox]}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                style={Style.contentContainerStyle}
            >
                <View style={Style.container}>
                    <View style={Style.minviewallcontent}>
                        <View>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Image source={source} resizeMode="contain" style={LeadScreenStyle.NoleadImage} />
                            </View>
                            <Text style={LeadScreenStyle.NoleadText} >{title}</Text>
                            <TouchableOpacity>
                                <Text style={[LeadScreenStyle.RefreshText, {color: colorrdata}]}>{RefreshText}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>

    );
};
export default NoData;