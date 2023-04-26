import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { TaskScreenStyle, Style, MeetingsStyle } from '../../styles';
import { CheckBox, Button, ConfirmationAlert } from '../../components';
import { useSelector } from "react-redux";
import images from '../../index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconA from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../utils';
import RouteName from '../../routes/RouteName';

const MeetingsDetails = (props) => {
    const { navigation } = props;
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [tabShow, SettabShow] = useState('1')
    const { colorrdata } = useSelector(state => state.commonReducer) || {};

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
                            <View style={MeetingsStyle.setleftspace}>
                                <View style={TaskScreenStyle.flexcheckboxminview}>
                                    <View style={TaskScreenStyle.flexcheckbox}>
                                        <View>
                                            <Text style={[TaskScreenStyle.Tasktextstyle, { color: colorrdata }]}>Title</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Image style={TaskScreenStyle.UserPictureSet} source={images.UserPicture} resizeMode="cover" />
                                    </View>
                                </View>
                                <View style={TaskScreenStyle.flexcheckboxminview}>
                                    <View style={TaskScreenStyle.flexcheckbox}>
                                        <View>
                                            <Text style={[TaskScreenStyle.Tasktextstyle, { color: colorrdata }]}>Today All day </Text>
                                            <Text style={[TaskScreenStyle.Tasktextstyle, { color: 'gray' }]}>Location</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={[TaskScreenStyle.Tasktextstyle, { color: colorrdata, paddingRight: 10, }]}>Title</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={MeetingsStyle.Setbgcolorview}>
                                <View style={TaskScreenStyle.flexrowtwxtandtitle}>
                                    <Text style={[TaskScreenStyle.Addnotetextstyle, { color: colorrdata }]}>Notes</Text>
                                    <TouchableOpacity>
                                        <IconA name="plus" color={colorrdata} size={25} />
                                    </TouchableOpacity>
                                </View>
                                <View style={TaskScreenStyle.flexrowtwxtandtitle}>
                                    <Text style={[TaskScreenStyle.Addnotetextstyle, { color: colorrdata }]}>Attachments</Text>
                                    <TouchableOpacity>
                                        <IconA name="plus" color={colorrdata} size={25} />
                                    </TouchableOpacity>
                                </View>
                                <View style={TaskScreenStyle.flexrowtwxtandtitle}>
                                    <Text style={[TaskScreenStyle.Addnotetextstyle, { color: colorrdata }]}>Invites</Text>
                                    <TouchableOpacity>
                                        <IconA name="plus" color={colorrdata} size={25} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View>
                            </View>
                        </View>
                        : null}
                    {tabShow == '2' ?
                        <View style={Style.settopspce}>
                            <View style={MeetingsStyle.setleftspace}>
                                <View style={TaskScreenStyle.flexcheckboxminview}>
                                    <View style={TaskScreenStyle.flexcheckbox}>
                                        <View>
                                            <Text style={[TaskScreenStyle.Tasktextstyle, { color: colorrdata }]}>Title</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Image style={TaskScreenStyle.UserPictureSet} source={images.UserPicture} resizeMode="cover" />
                                    </View>
                                </View>
                                <View style={TaskScreenStyle.flexcheckboxminview}>
                                    <View style={TaskScreenStyle.flexcheckbox}>
                                        <View>
                                            <Text style={[TaskScreenStyle.Tasktextstyle, { color: colorrdata }]}>Today All day </Text>
                                            <Text style={[TaskScreenStyle.Tasktextstyle, { color: 'gray' }]}>Location</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={[TaskScreenStyle.Tasktextstyle, { color: colorrdata, paddingRight: 10, }]}>Title</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={MeetingsStyle.Setbgcolorview}>
                                <View style={TaskScreenStyle.flexrowtwxtandtitle}>
                                    <Text style={[TaskScreenStyle.Addnotetextstyle, { color: colorrdata }]}>Attachments</Text>
                                    <TouchableOpacity>
                                        <IconA name="plus" color={colorrdata} size={25} />
                                    </TouchableOpacity>
                                </View>

                                <View style={TaskScreenStyle.flexrowtwxtandtitle}>
                                    <Text style={[TaskScreenStyle.Addnotetextstyle, { color: colorrdata }]}>Invitees</Text>
                                    <TouchableOpacity>
                                        <IconA name="plus" color={colorrdata} size={25} />
                                    </TouchableOpacity>
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
export default MeetingsDetails;
