import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Modal } from 'react-native';
import { TaskScreenStyle, Style } from '../../styles';
import { CheckBox, Input, Button, ConfirmationAlert } from '../../components';
import { useSelector } from "react-redux";
import images from '../../index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconA from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../utils';
import RouteName from '../../routes/RouteName';

const ParticularTasks = (props) => {
    const { navigation } = props;
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [tabShow, SettabShow] = useState('1')
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const [textaeria, settextaeria] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const onChangeText = (text, type) => {
        if (type === 'text') settextaeria(text);
    };
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [okbutton, Setokbutton] = useState('');
    var alertdata = {
        'logout': "Add Note Succeful",
    }
    const onoknutton = () => {
        navigation.navigate(RouteName.HOME_SCREEN);
        okbutton;
    }
    return (
        <View style={TaskScreenStyle.Minviewsigninscreen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    width: '100%',
                    height: 'auto',
                }}>
                <View style={TaskScreenStyle.Setheight}>
                    <View style={Style.whiteboxshadow}>
                        <View style={Style.TabBox}>
                            <TouchableOpacity onPress={() => SettabShow('1')} style={tabShow === '1' ? [Style.TabsettextActiveBox, { backgroundColor: colorrdata }] : Style.TabsettextBox}>
                                <Text onPress={() => SettabShow('1')} style={tabShow === '1' ? Style.TabsettextActive : [Style.TabsettextActive, { color: colorrdata }]}>Related</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => SettabShow('2')} style={tabShow === '2' ? [Style.TabsettextActiveBox, { backgroundColor: colorrdata }] : Style.TabsettextBox}>
                                <Text onPress={() => SettabShow('2')} style={tabShow === '2' ? Style.TabsettextActive : [Style.TabsettextActive, { color: colorrdata }]}>Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {tabShow == '1' ?
                        <View style={Style.settopspce}>
                            <View style={TaskScreenStyle.flexcheckboxminview}>
                                <View style={TaskScreenStyle.flexcheckbox}>
                                    <View>
                                        <CheckBox disabled={false}
                                            value={toggleCheckBox}
                                            onValueChange={(newValue) => setToggleCheckBox(newValue)} />
                                    </View>
                                    <View>
                                        <Text style={[TaskScreenStyle.Tasktextstyle, { color: colorrdata }]}>Task</Text>
                                        <Text style={[TaskScreenStyle.Tasktextstyle, { color: colorrdata }]}>High . Not Started</Text>
                                    </View>
                                </View>
                                <View>
                                    <Image style={TaskScreenStyle.UserPictureSet} source={images.UserProfile} resizeMode="cover" />
                                </View>
                            </View>
                            <View style={TaskScreenStyle.setflexnote}>
                                <TouchableOpacity onPress={() => navigation.navigate(RouteName.ADD_NOTE_SCREEN)} style={[TaskScreenStyle.setbgcolorview, { backgroundColor: colorrdata }]}>
                                    <View>
                                        <Text style={TaskScreenStyle.Notetextstyle}>Note</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <Icon name="keyboard-voice" color={Colors.White_text_color} size={25} />
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>
                            <View style={TaskScreenStyle.flexrowimagetextstyle}>
                                <View>
                                    <Image style={TaskScreenStyle.UserPictureSet} source={images.UserPicture} resizeMode="cover" />
                                </View>
                                <View style={TaskScreenStyle.Settextstylemargin}>
                                    <Text style={TaskScreenStyle.Addnotetextstyle}>Note</Text>
                                    <Text style={TaskScreenStyle.Addnotetextstyletwo}>Hey there! i am using CRM Note</Text>
                                </View>
                            </View>
                            <View style={TaskScreenStyle.Setbgcolorview}>
                                <View style={TaskScreenStyle.flexrowtwxtandtitle}>
                                    <Text style={[TaskScreenStyle.Addnotetextstyle, { color: colorrdata }]}>Attachments</Text>
                                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                                        <IconA name="plus" color={colorrdata} size={25} />
                                    </TouchableOpacity>
                                </View>
                                <View style={TaskScreenStyle.flexrowtwxtandtitle}>
                                    <Text style={[TaskScreenStyle.Addnotetextstyle, { color: colorrdata }]}>Invites</Text>
                                    <TouchableOpacity>
                                        <IconA name="plus" color={colorrdata} size={25} />
                                    </TouchableOpacity>
                                </View>
                                <View style={TaskScreenStyle.setheightbgcolor}>
                                    <Input
                                        placeholder={'Add Task'}
                                        onChangeText={(text) => onChangeText(text, 'text')}
                                        value={textaeria}
                                        maxLength={10}
                                        placeholderTextColor={'gray'}
                                        inputStyle={TaskScreenStyle.inputstyle}
                                    />
                                </View>
                                <View style={TaskScreenStyle.cetcenterbutton}>
                                    <Button title="Submit" onPress={() => {
                                        setAlertVisible(true);
                                        setAlertMessage(alertdata.logout);
                                        Setokbutton('');
                                    }} />
                                </View>
                                <ConfirmationAlert
                                    buttonminview={TaskScreenStyle.cetcenterbuttontwo}
                                    message={alertMessage}
                                    modalVisible={alertVisible}
                                    setModalVisible={setAlertVisible}
                                    onPressCancel={() => setAlertVisible(!alertVisible)}
                                    onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                                    iconVisible={true}
                                />

                                <View style={Style.AttactcenteredView}>
                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={modalVisible}
                                        onRequestClose={() => {
                                            Alert.alert("Modal has been closed.");
                                            setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <View style={Style.AttactcenteredView}>
                                            <View style={Style.AttactmodalView}>
                                                <View style={Style.AttactmodalViewHader}>
                                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                                        <IconA name='close' style={Style.AttactColseIcon} />
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={Style.AttactmodalViewTile}>
                                                    <Text style={Style.AttactmodalTextHeader}>Upload From</Text>
                                                </View>
                                                <TouchableOpacity>
                                                    <Text style={Style.AttactmodalText}>Take Photo</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity>
                                                    <Text style={Style.AttactmodalText}>Gallery</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity>
                                                    <Text style={Style.AttactmodalText}>File Explorer</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity>
                                                    <Text style={Style.AttactmodalText}>CRM Docs</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </Modal>

                                </View>
                            </View>
                            <View>
                            </View>
                        </View>
                        : null}
                    {tabShow == '2' ?
                        <View style={Style.settopspce}>
                            <View style={TaskScreenStyle.flexcheckboxminview}>
                                <View style={TaskScreenStyle.flexcheckbox}>
                                    <View>
                                        <CheckBox disabled={false}
                                            value={toggleCheckBox}
                                            onValueChange={(newValue) => setToggleCheckBox(newValue)} />
                                    </View>
                                    <View>
                                        <Text style={[TaskScreenStyle.Tasktextstyle, { color: colorrdata }]}>Task</Text>
                                        <Text style={[TaskScreenStyle.Tasktextstyle, { color: colorrdata }]}>High . Not Started</Text>
                                    </View>
                                </View>
                                <View>
                                    <Image style={TaskScreenStyle.UserPictureSet} source={images.UserPicture} resizeMode="cover" />
                                </View>
                            </View>

                            <View style={TaskScreenStyle.flexrowimagetextstyle}>
                                <View>
                                    <Image style={TaskScreenStyle.UserPictureSet} source={images.UserPicture} resizeMode="cover" />
                                </View>
                                <View style={TaskScreenStyle.Settextstylemargin}>
                                    <Text style={TaskScreenStyle.Addnotetextstyle}>Note</Text>
                                    <Text style={TaskScreenStyle.Addnotetextstyletwo}>Hey there! i am using CRM Note</Text>
                                </View>
                            </View>
                            <View style={TaskScreenStyle.SetbgcolorviewTaskDetails}>
                                <View style={TaskScreenStyle.flexrowtwxtandtitle}>
                                    <Text style={[TaskScreenStyle.Addnotetextstyle, { color: colorrdata }]}>Attachments</Text>
                                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                                        <IconA name="plus" color={colorrdata} size={25} />
                                    </TouchableOpacity>
                                </View>
                                <View style={TaskScreenStyle.flexrowtwxtandtitle}>
                                    <Text style={[TaskScreenStyle.Addnotetextstyle, { color: colorrdata }]}>Invites</Text>
                                    <TouchableOpacity>
                                        <IconA name="plus" color={colorrdata} size={25} />
                                    </TouchableOpacity>
                                </View>
                                <View style={TaskScreenStyle.setheightbgcolor}>
                                    <Input
                                        placeholder={'Add Task'}
                                        onChangeText={(text) => onChangeText(text, 'text')}
                                        value={textaeria}
                                        maxLength={10}
                                        placeholderTextColor={'gray'}
                                        inputStyle={TaskScreenStyle.inputstyle}
                                    />
                                </View>
                                <View style={TaskScreenStyle.cetcenterbutton}>
                                    <Button title="Submit" onPress={() => {
                                        setAlertVisible(true);
                                        setAlertMessage(alertdata.logout);
                                        Setokbutton('');
                                    }} />
                                </View>
                                <ConfirmationAlert
                                    buttonminview={TaskScreenStyle.cetcenterbuttontwo}
                                    message={alertMessage}
                                    modalVisible={alertVisible}
                                    setModalVisible={setAlertVisible}
                                    onPressCancel={() => setAlertVisible(!alertVisible)}
                                    onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                                    iconVisible={true}
                                />

                                <View style={Style.AttactcenteredView}>
                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={modalVisible}
                                        onRequestClose={() => {
                                            Alert.alert("Modal has been closed.");
                                            setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <View style={Style.AttactcenteredView}>
                                            <View style={Style.AttactmodalView}>
                                                <View style={Style.AttactmodalViewHader}>
                                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                                        <IconA name='close' style={Style.AttactColseIcon} />
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={Style.AttactmodalViewTile}>
                                                    <Text style={Style.AttactmodalTextHeader}>Upload From</Text>
                                                </View>
                                                <TouchableOpacity>
                                                    <Text style={Style.AttactmodalText}>Take Photo</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity>
                                                    <Text style={Style.AttactmodalText}>Gallery</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity>
                                                    <Text style={Style.AttactmodalText}>File Explorer</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity>
                                                    <Text style={Style.AttactmodalText}>CRM Docs</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </Modal>

                                </View>
                            </View>
                            <View>
                            </View>
                        </View>
                        : null}
                </View>
            </ScrollView>
        </View>

    );
};
export default ParticularTasks;
