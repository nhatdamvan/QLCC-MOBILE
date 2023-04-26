import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { TaskScreenStyle, LeadScreenStyle, LeadDataOpenStyle, Style } from '../../styles';
import { Strings, Colors } from '../../utils';
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import RouteName from '../../routes/RouteName';
import images from '../../index';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconA from 'react-native-vector-icons/AntDesign';


const ReletedTab = () => {
    const navigation = useNavigation();
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const [modalVisible, setModalVisible] = useState(false);

    return (

        <View>
            <View style={LeadScreenStyle.LeadDataBox}>
                <View>
                    <Text style={LeadScreenStyle.LeadDataBoxtitle}>{Strings.LeadsData.reletedname}</Text>
                    <Text style={LeadScreenStyle.LeadDataBoxemail}>{Strings.LeadsData.releteEmail}</Text>
                </View>
                <View>
                    <Image source={images.UserProfile} resizeMode="cover" style={LeadDataOpenStyle.LeadsProfileImage} />
                </View>
            </View>
            <View style={LeadDataOpenStyle.LeadReletedTabBottumBorder}></View>
            <View style={LeadScreenStyle.LeadDataBox}>
                <View>
                    <Text style={LeadDataOpenStyle.LeadDataBoxtitleTwo}>{Strings.LeadsData.releteOwnername}</Text>
                    <Text style={LeadDataOpenStyle.LeadsreletesTabOwner}>{Strings.LeadsData.releteOwner}</Text>
                </View>
                <View>
                    <Image source={images.UserPicture} resizeMode="cover" style={LeadScreenStyle.leaddataimg} />
                </View>
            </View>
            <View style={Style.settopspce}>
                <View style={LeadScreenStyle.LeadSetbgcolorview}>
                    <View style={TaskScreenStyle.flexrowtwxtandtitle}>
                        <Text style={[TaskScreenStyle.Addnotetextstyle, { color: colorrdata }]}>Note</Text>
                        <View style={TaskScreenStyle.SetLineIcon}>
                            <TouchableOpacity>
                                <IconM name="keyboard-voice" color={colorrdata} size={25} />
                            </TouchableOpacity>
                            <TouchableOpacity style={TaskScreenStyle.paddleftset} onPress={() => navigation.navigate(RouteName.ADD_NOTE_SCREEN)}>
                                <IconA name="plus" color={colorrdata} size={25} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={TaskScreenStyle.flexrowtwxtandtitle}>
                        <Text style={[TaskScreenStyle.Addnotetextstyle, { color: colorrdata }]}>Attachments</Text>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <IconA name="plus" color={colorrdata} size={25} />
                        </TouchableOpacity>
                    </View>
                    <View style={TaskScreenStyle.flexrowtwxtandtitle}>
                        <Text style={[TaskScreenStyle.Addnotetextstyle, { color: colorrdata }]}>Task</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate(RouteName.ADD_TASK_SCREEN)}>
                            <IconA name="plus" color={colorrdata} size={25} />
                        </TouchableOpacity>
                    </View>
                    <View style={TaskScreenStyle.flexrowtwxtandtitle}>
                        <Text style={[TaskScreenStyle.Addnotetextstyle, { color: colorrdata }]}>Meeting</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate(RouteName.ADD_MEETING_SCREEN)}>
                            <IconA name="plus" color={colorrdata} size={25} />
                        </TouchableOpacity>
                    </View>
                    <View style={TaskScreenStyle.flexrowtwxtandtitle}>
                        <Text style={[TaskScreenStyle.Addnotetextstyle, { color: colorrdata }]}>Invited Meeting</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate(RouteName.ADD_MEETING_SCREEN)}>
                            <IconA name="plus" color={colorrdata} size={25} />
                        </TouchableOpacity>
                    </View>
                    <View style={TaskScreenStyle.flexrowtwxtandtitle}>
                        <Text style={[TaskScreenStyle.Addnotetextstyle, { color: colorrdata }]}>Call</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate(RouteName.ADD_CALL_SCREEN)}>
                            <IconA name="plus" color={colorrdata} size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                </View>
            </View>
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
                <TouchableOpacity
                    style={[Style.Attactbutton, Style.AttactbuttonOpen]}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={Style.AttacttextStyle}>Show Modal</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
};
export default ReletedTab;
