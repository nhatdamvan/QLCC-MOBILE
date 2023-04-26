import React, { useState } from "react";
import { Text, View, Image, ScrollView, StatusBar, FlatList, Pressable, Modal, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
// import Styles from '../../../styles/Defoltscreenstyle/AllBookMarkStyle';
import { useNavigation } from '@react-navigation/native';
import IconF from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import IconA from 'react-native-vector-icons/Feather';
import images from '../../index';
import { Strings} from '../../../utils';
import { useSelector } from "react-redux";

const CommonDropHeader = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [sleact, setsleact] = useState('')

  const { bookmarkicon, bookmarkseticon } =
    useTogglePasswordVisibility();
  const [statelist] = useState([
    {
      "id": 1,
      "textsimple": 'Andhra Pradesh',
    },
    {
      "id": 2,
      "textsimple": 'Arunachal Pradesh',
    },
    {
      "id": 3,
      "textsimple": 'Assam',
    },
    {
      "id": 1,
      "textsimple": 'Bihar',
    },
    {
      "id": 4,
      "textsimple": 'Chhattisgarh',
    },
    {
      "id": 5,
      "textsimple": 'Goa',
    },
    {
      "id": 6,
      "textsimple": 'Gujarat',
    },
    {
      "id": 7,
      "textsimple": 'Haryana',
    },
    {
      "id": 8,
      "textsimple": 'Himachal Pradesh',
    },
    {
      "id": 9,
      "textsimple": 'Karnataka',
    },
    {
      "id": 10,
      "textsimple": 'Kerala',
    },
    {
      "id": 11,
      "textsimple": 'Madhya Pradesh',
    },
    {
      "id": 12,
      "textsimple": 'Maharashtra',
    },
    {
      "id": 13,
      "textsimple": 'Manipur',
    },
    {
      "id": 14,
      "textsimple": 'Meghalaya',
    },
    {
      "id": 15,
      "textsimple": 'Mizoram',
    },
    {
      "id": 16,
      "textsimple": 'Nagaland',
    },
    {
      "id": 17,
      "textsimple": 'Odisha',
    },
    {
      "id": 18,
      "textsimple": 'Punjab',
    },
    {
      "id": 19,
      "textsimple": 'Rajasthan',
    },
  ])

  const Statelistdata = (item, index) => {
    return (
      <TouchableOpacity onPress={() => { setsleact(item.textsimple); setModalVisible(!modalVisible); }}>
        <View style={Styles.descountbox}>
          <Text style={[Styles.simplestatetext,{borderBottomColor:colorrdata}]}>{item.textsimple}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={Styles.minstyleviewphotograpgy}>
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={Styles.minflexview}>
            <View style={Styles.minviewsigninscreen}>
              <View>
                <TouchableOpacity onPress={bookmarkseticon} style={Styles.flexixconview}>
                  <TouchableOpacity onPress={bookmarkseticon}>
                    <IconF name={bookmarkicon} size={22} color={colorrdata} />
                  </TouchableOpacity>
                  <Text style={Styles.nothingheretext}>Nothing here yet...</Text>
                </TouchableOpacity>
                <Text style={Styles.nothingheretexttwo}>Add Your Favourite Places</Text>
                <TouchableOpacity style={Styles.flexiconset} onPress={() => setModalVisible(true)}>
                  <Icon name="pluscircle" size={22} color={'black'} />
                </TouchableOpacity>
                {sleact === '' ?
                  <Text style={[Styles.addplacestextset,{ borderBottomColor:colorrdata,color:colorrdata}]}>Add a Places</Text>
                  :
                  <Text style={[Styles.addplacestextset,{ borderBottomColor:colorrdata,color:colorrdata}]}>{sleact}</Text>
                }
              </View>
              <View style={Styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                >
                  <View style={Styles.centeredViewtwo}>
                    <View style={Styles.modalView}>
                      <FlatList
                        data={statelist}
                        renderItem={({ item, index }) => Statelistdata(item, index)}
                        keyExtractor={item => item.id}
                        style={Styles.setflex}
                      />
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default CommonDropHeader;
