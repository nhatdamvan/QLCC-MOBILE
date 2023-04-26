import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { TaskScreenStyle, Style } from '../../styles';
import { AllTaskDropdown } from '../../screens';
import { FloatingAction } from "react-native-floating-action";
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from "react-redux";
import { CheckBox, Button } from '../../components';
import images from '../../index';
import RouteName from '../../routes/RouteName';

const ParticularTasks = (props) => {
    const { navigation } = props;
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [toggleCheckBoxtwo, setToggleCheckBoxtwo] = useState(false)
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const actions = [
        {
            text: "Import from Address Book",
            icon: <IconM name='arrow-up-down-bold' color={colorrdata} />,
            name: "bt_accessibility",
            position: 2
        },
        {
            text: "No Leads",
            icon: <IconM name='arrow-up-down-bold' color={colorrdata} />,
            name: "bt_language",
            position: 1
        },
    ];
    return (
        <View style={Style.Minviewsigninscreen}>
            <View style={TaskScreenStyle.Minviewsigninscreen}>
                <AllTaskDropdown />
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Style.contentContainerStyle}>
                    <View style={TaskScreenStyle.minviewdropdpwnflex}>
                        <View style={TaskScreenStyle.Setheightflex}>
                            <View>
                                <CheckBox disabled={false}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)} />
                            </View>
                            <View>
                                <Text style={[TaskScreenStyle.addtaskscreen, { color: colorrdata }]}>Task</Text>
                                <Text style={TaskScreenStyle.addtaskscreen}>Add Note</Text>
                            </View>
                        </View>
                        <View>
                            <Image style={TaskScreenStyle.UserPictureSet} source={images.UserPicture} resizeMode="cover" />
                        </View>
                    </View>
                    <View style={TaskScreenStyle.minviewdropdpwnflex}>
                        <View style={TaskScreenStyle.Setheightflex}>
                            <View>
                                <CheckBox disabled={false}
                                    value={toggleCheckBoxtwo}
                                    onValueChange={(newValue) => setToggleCheckBoxtwo(newValue)} />
                            </View>
                            <View>
                                <Text style={[TaskScreenStyle.addtaskscreen, { color: colorrdata }]}>Task 1</Text>
                                <Text style={TaskScreenStyle.addtaskscreen}>Add Note</Text>
                            </View>
                        </View>
                        <View>
                            <Image style={TaskScreenStyle.UserPictureSet} source={images.UserPicture} resizeMode="cover" />
                        </View>
                    </View>
                    <View style={TaskScreenStyle.Setbuttonview}>
                        <Button title="Submit" onPress={() => navigation.navigate(RouteName.TASK_DETAILS_SCREEN)} />
                    </View>
                </ScrollView>
                <FloatingAction
                    color={'black'}
                    actions={actions}
                />
            </View>
        </View>
    );
};
export default ParticularTasks;
