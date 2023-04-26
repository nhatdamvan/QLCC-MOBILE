import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Login } from '../../styles';
import { Modal, Input } from '../../components';
import { useSelector } from "react-redux";
import { Countrydata } from '../../utils';

const Countrycode = () => {
  const [sleact, setsleact] = useState('');
  const [searchdata, setsearchdata] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { colorrdata } = useSelector(state => state.commonReducer) || {};

  return (
    <View>
      <TouchableOpacity style={Login.flexiconset} onPress={() => setModalVisible(true)}>
        {sleact === '' ?
          <Text style={[Login.addplacestextset, { borderBottomColor: colorrdata, color: colorrdata }]}>+ 91</Text>
          :
          <Text style={[Login.addplacestextset, { borderBottomColor: colorrdata, color: colorrdata }]}>{sleact}</Text>
        }
      </TouchableOpacity>
      <Modal
        modalViewStyle={Login.Setheightmodal}
        modalVisible={modalVisible}
        setModalVisible={() => {
          setModalVisible(!modalVisible);
        }}
        close={() => setModalVisible(!modalVisible)}
      >
        <View style={[Login.setserachbgcolorview, { backgroundColor: colorrdata }]}>
          <Input
            placeholder={'Search'}
            onChangeText={(text) => setsearchdata(text)}
            value={searchdata}
            placeholderTextColor={'gray'}
          />
        </View>
        <View>
          <FlatList
            data={Countrydata}
            renderItem={({ item }) => {
              if (searchdata === "") {
                return (
                  <TouchableOpacity style={Login.minviewtext} onPress={() => { setsleact(item.digit); setModalVisible(!modalVisible); }}>
                    <Text style={[Login.simplestatetext, { borderBottomColor: colorrdata }]}>{item.digit}</Text>
                    <Text style={[Login.simplestatetexttwoset, { borderBottomColor: colorrdata }]}>{item.textsimple}</Text>
                  </TouchableOpacity>
                )
              } else {
                <View style={Login.setwhiteboxnodatafound}>
                  <Text style={Login.pleseentername}>No Data Found</Text>
                </View>
              }
              if (item.textsimple.toLowerCase().includes(searchdata.toLowerCase()) === true) {
                return (
                  <TouchableOpacity style={Login.minviewtext} onPress={() => { setsleact(item.digit); setModalVisible(!modalVisible); }}>
                    <Text style={[Login.simplestatetext, { borderBottomColor: colorrdata }]}>{item.digit}</Text>
                    <Text style={[Login.simplestatetexttwoset, { borderBottomColor: colorrdata }]}>{item.textsimple}</Text>
                  </TouchableOpacity>
                )
              }
              else {
                <View style={Login.setwhiteboxnodatafound}>
                  <Text style={Login.pleseentername}>No Data Found</Text>
                </View>
              }
            }}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </Modal>
    </View>
  )
}
export default Countrycode;