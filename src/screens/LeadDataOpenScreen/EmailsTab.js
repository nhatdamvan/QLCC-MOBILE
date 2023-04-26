import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, FlatList } from 'react-native';
import { TaskScreenStyle, LeadScreenStyle, Style } from '../../styles';
import { useSelector } from "react-redux";
import IconF from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import RouteName from '../../routes/RouteName';

const EmailsTab = () => {
    const navigation = useNavigation();
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState('Leads');

    const data = [
        { label: 'All Leads', value: '1' },
        { label: 'Leads', value: '2' },
        { label: 'Task', value: '3' },
        { label: 'No Leads', value: '4' },
        { label: 'Custom Leads', value: '5' },
        { label: 'Top Leads', value: '6' },
        { label: 'Average Leads', value: '7' },
    ];

    const [modalVisible, setModalVisible] = useState(false);
    const [sleact, setsleact] = useState('')




    const [statelist] = useState([
        {
            "id": 1,
            "textsimple": 'Email Sent',
        },
        {
            "id": 2,
            "textsimple": 'Email Not Sent',
        },
        {
            "id": 3,
            "textsimple": 'Email Pending',
        },
        {
            "id": 1,
            "textsimple": 'Email Spam',
        },
        {
            "id": 4,
            "textsimple": 'All Email',
        },

    ])

    const Statelistdata = (item, index) => {
        return (
            <TouchableOpacity onPress={() => { setsleact(item.textsimple); setModalVisible(!modalVisible); }} style={Style.ItemStyle}>
                <View style={Style.descountbox}>
                    <Text style={[Style.simplestatetext, { borderBottomColor: colorrdata }]}>{item.textsimple}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <ScrollView>

            <View style={Style.PositionRelative}>
                <View style={Style.PositionRelative}>
                    <View>
                        <View style={[LeadScreenStyle.LeadsDropdownbox, LeadScreenStyle.LeadsDropdownboxWidth70]}>
                            <View style={Style.minviewsigninscreen}>
                                <View style={LeadScreenStyle.LeadDatLeadEmailTabFilteraBox}>
                                    <Text style={LeadScreenStyle.LeadTextEmailTabAppliad}>Applied Filters: </Text>
                                    {sleact === '' ?
                                        <Text style={[LeadScreenStyle.addplacestextset, { borderBottomColor: colorrdata, color: colorrdata }]}>Emails sent from CRM</Text>
                                        :
                                        <Text style={[LeadScreenStyle.addplacestextset, { borderBottomColor: colorrdata, color: colorrdata }]}>{sleact}</Text>
                                    }
                                    <TouchableOpacity style={LeadScreenStyle.FilterIcon} onPress={() => setModalVisible(true)}>
                                        <Icon name="filter" size={22} color={'black'} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>

                    </View>

                    <View style={[LeadScreenStyle.centeredView, LeadScreenStyle.Margintop]}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                        >
                            <View style={LeadScreenStyle.centeredView}>
                                <View style={Style.modalView}>
                                    <FlatList
                                        data={statelist}
                                        renderItem={({ item, index }) => Statelistdata(item, index)}
                                        keyExtractor={item => item.id}
                                        style={LeadScreenStyle.setflex}
                                    />
                                </View>
                            </View>
                        </Modal>
                    </View>

                </View>

            </View>
        </ScrollView>
    );
};
export default EmailsTab;
