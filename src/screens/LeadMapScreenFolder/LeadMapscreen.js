import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, StatusBar, TouchableOpacity, } from "react-native";
import { LeadMapStyle } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';
import { AllTaskDropdown } from '../../screens';
import IconH from 'react-native-vector-icons/Feather';
import IconP from 'react-native-vector-icons/FontAwesome5';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { useSelector } from "react-redux";
import RouteName from "../../routes/RouteName";

const LeadMapscreen = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const navigation = useNavigation();

  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      if (crd) {
        setPosition({
          latitude: crd.latitude,
          longitude: crd.longitude,
          latitudeDelta: crd.latitudeDelta,
          longitudeDelta: crd.longitudeDelta,
        });
      }
    })
  }, []);
  return (
    <View style={LeadMapStyle.minstyleviewphotograpgy}>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>

          <View style={LeadMapStyle.minflexview}>

            <View style={LeadMapStyle.bgwhiteview}>
              <AllTaskDropdown />
              <View style={LeadMapStyle.mapviewstyle}>
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={LeadMapStyle.mapLeadMapStyleet}
                  scrollEnabled={true}
                  showsUserLocation={true}
                  showsMyLocationButton={true}
                  followsUserLocation={true}
                  showsCompass={true}
                  zoomEnabled={true}
                  pitchEnabled={true}
                  rotateEnabled={true}
                >
                  <Marker
                    title='Yor are here'
                    description='This is a description'
                    coordinate={position} />
                </MapView>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={LeadMapStyle.positonabsolute}>
        <View style={LeadMapStyle.setwhiteboxwidth}>
          <View style={LeadMapStyle.centerpencileicon}>
            <TouchableOpacity style={LeadMapStyle.setpencileicon}>
              <IconP name="pencil-alt" size={17} color={'#8D8D8D'} />
            </TouchableOpacity>
          </View>
          <View style={LeadMapStyle.flexrowhomeimage}>
            <View style={LeadMapStyle.marginright}>
              <IconH name="home" size={28} color="#2E3A59" />
            </View>
            <View>
              <Text style={LeadMapStyle.satyanilaym}>Home</Text>
              <View style={LeadMapStyle.setwhiteboxwidthtwo}>
                <Text style={LeadMapStyle.satyanilaymtwo}>Phulchhab Chowk Mg Road Rajkot</Text>
              </View>
            </View>
          </View>
          <View>
            <Button title="Confirm Location"
              buttonStyle={{ backgroundColor: colorrdata }}
              onPress={()=> navigation.navigate(RouteName.HOME_SCREEN)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default LeadMapscreen;
