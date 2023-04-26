import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { TaskScreenStyle, Style, AddScreenStyle } from '../../styles';
import { CheckBox, Input, Button, ConfirmationAlert, AddNoteCommon } from '../../components';
import { useSelector } from "react-redux";
import images from '../../index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconA from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../utils';
import RouteName from '../../routes/RouteName';

const AddNoteScreen = (props) => {
    const { navigation } = props;
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const [text, onChangeText] = React.useState("");
    const [textaeria, settextaeria] = useState('');

    return (
        <View style={TaskScreenStyle.Minviewsigninscreen}>
            <View style={AddScreenStyle.PaadingHoset}>             
                <View style={AddScreenStyle.AddNotesetheightbgcolor}>
                    <Input
                        placeholder="Title (Option)"
                        onChangeText={(text) => onChangeText(text)}
                        value={text}
                        maxLength={120}
                        inputStyle={AddScreenStyle.Addnoteinputstyle}
                    />
                </View>
                <View style={AddScreenStyle.AddNotesetheightbgcolorText}>
                    <Input
                        placeholder={'Add a Desctiption'}
                        onChangeText={(text) => settextaeria(text, 'text')}
                        value={textaeria}
                        maxLength={10}
                        placeholderTextColor={'gray'}
                        inputStyle={AddScreenStyle.Addnoteinputstyle}
                    />
                </View>
            </View>
        </View>

    );
};
export default AddNoteScreen;
