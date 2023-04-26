import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Pressable, FlatList } from 'react-native';
import { LeadDataOpenStyle, TaskScreenStyle, AddMeetingStyle } from '../../styles';
import { Button, Input, AppHeader } from '../../components';
import { Strings, Details } from '../../utils';
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import RouteName from '../../routes/RouteName';



const DetailsTab = () => {
    const navigation = useNavigation();
    const { colorrdata } = useSelector(state => state.commonReducer) || {};

    const LeadDataBox = (item, index) => {
        return (
            <View style={LeadDataOpenStyle.DetailsdataLebalboxChild}>
                <Text style={LeadDataOpenStyle.DetailsTextLabel}>{item.title}</Text>
                <Text style={LeadDataOpenStyle.DetailsTextLabelData}>
                    {item.DataLabel}</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={{ height: '100%' }}>
                <View style={LeadDataOpenStyle.HeadingStyle}>
                    <Text style={AddMeetingStyle.TitleText}>{Strings.LeadDetailsTab.Leadinformation}</Text>
                </View>
                <View style={LeadDataOpenStyle.DetailsMainBox}>
                    <FlatList
                        data={Details}
                        renderItem={({ item, index }) => LeadDataBox(item, index)}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        </ScrollView>
    );
};
export default DetailsTab;
