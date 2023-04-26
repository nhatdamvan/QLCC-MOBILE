import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Pressable, Switch } from 'react-native';
import { HomeTabScreenStyle } from '../../styles';
import { Button, Input, AppHeader } from '../../components';
import { Strings } from '../../utils';
import IconF from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";
import RouteName from '../../routes/RouteName';




const HomeTabSearchScreen = () => {
    const navigation = useNavigation();
    const { colorrdata } = useSelector(state => state.commonReducer) || {};


    return (
        <View style={HomeTabScreenStyle.Minviewsigninscreen}>

            <View style={HomeTabScreenStyle.Minviewsigninscreen}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{
                        width: '100%',
                        height: 'auto',
                    }}>
                    <View style={HomeTabScreenStyle.ResentTextBox}>
                        <Text style={HomeTabScreenStyle.ResentText}>{Strings.HomeTabSearch.recentSearch}</Text>

                        {/* Start for search data  */}
                        <TouchableOpacity onPress={() => navigation.navigate(RouteName.TAKS_SCREEN)}>
                            <View style={HomeTabScreenStyle.ResentShowDataBox}>
                                <Text style={HomeTabScreenStyle.ResentShowDataText}>{Strings.HomeTabSearch.textresult}  </Text>
                                <IconF name='chevrons-right' style={[HomeTabScreenStyle.DirectionArrow, { color: colorrdata }]} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate(RouteName.TAKS_SCREEN)}>
                            <View style={HomeTabScreenStyle.ResentShowDataBox}>
                                <Text style={HomeTabScreenStyle.ResentShowDataText}>{Strings.HomeTabSearch.textresulttwo}  </Text>
                                <IconF name='chevrons-right' style={[HomeTabScreenStyle.DirectionArrow, { color: colorrdata }]} />
                            </View>
                        </TouchableOpacity>
                    </View>


                </ScrollView>
            </View>
        </View >
    );
};
export default HomeTabSearchScreen;
