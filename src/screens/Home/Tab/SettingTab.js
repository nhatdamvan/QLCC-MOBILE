import React, { useState } from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Modal, Switch, ScrollView, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/AntDesign';
import { Settings, Style } from '../../../styles';
import { ConfirmationAlert } from "../../../components";
import { useSelector } from "react-redux";

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [okbutton, Setokbutton] = useState('');
  const [cancelbutton, SetCancelbutton] = useState('Cancel');

  var alertdata = {
    'logout': " Deleted Successfully",
  }
  const onoknutton = () => {
    okbutton;
  }

  return (
    <>
      <View style={Style.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.contentContainerStyle}>
          <KeyboardAvoidingView enabled>
            <View style={Settings.keybordtopviewstyle}>
              <View style={Settings.minflexview}>
                <View style={Settings.togglrswitchflex}>
                  <View>
                    <Text style={Settings.cellulardatatext}>Cellular Data</Text>
                  </View>
                </View>
                <View style={Settings.toggleswotchview}>
                  <Text style={Settings.downlodtoggleswitchtext}>
                    Cellular Data for Downnloads
                  </Text>
                  <View>
                    <Switch
                      trackColor={{ false: "lightgray", true: "lightgray" }}
                      thumbColor={isEnabled ? "hsl(214.3, 83.2%, 51%)" : "white"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  </View>
                </View>
                <Text style={Settings.cellulardatatext}>Video Quality for Downloads</Text>
                <View style={Settings.righticonminview}>
                  <View>
                    <Text style={Settings.standardrecommedtext}>Standard (recommended)</Text>
                    <Text style={Settings.downloadfastertext}>Downnloads faster and uses less storage</Text>
                  </View>
                  <View>
                    <IconF
                      size={25}
                      name="check"
                      style={Settings.chekiconstyle}
                    />
                  </View>
                </View>
                <View style={Settings.righticonminview}>
                  <View>
                    <Text style={Settings.standardrecommedtext}>High Definition</Text>
                    <Text style={Settings.downloadfastertext}>Use more storage</Text>
                  </View>
                </View>
                <Text style={Settings.offlinedoenloadstextset}>Offline Downloads</Text>
                <View style={Settings.righticonminview}>
                  <View style={Settings.bodysettextwidth}>
                    <Text style={Settings.standardrecommedtext}>Delete Completed Lessons</Text>
                    <Text style={Settings.downloadfastertext}>Lessons can automatically delete 24 hours after they are watched in full</Text>
                  </View>
                  <View>
                    <IconF
                      size={25}
                      name="check"
                      style={Settings.chekiconstyle}
                    />
                  </View>
                </View>
                <View style={Settings.righticonminviewtwo}>
                  <View style={Settings.bodysettextwidth}>
                    <Text style={Settings.deletedownloads}>Delete All Downloads</Text>
                    <Text style={Settings.downloadfastertext}>This will remove all downloaded Lessons Videos From your Phone</Text>
                  </View>
                  <TouchableOpacity onPress={() => {
                    setAlertVisible(true);
                    setAlertMessage(alertdata.logout);
                    Setokbutton('');
                  }}>
                    <Icon
                      size={25}
                      name="delete"
                      style={Settings.redcoloricondelete}
                    />

                  </TouchableOpacity>

                  <ConfirmationAlert
                  message={alertMessage}
                  buttonminview={Settings.centerokbutton}
                    modalVisible={alertVisible}
                    setModalVisible={setAlertVisible}
                    onPressCancel={() => setAlertVisible(!alertVisible)}
                    onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
                    iconVisible={true}
                  />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>

    </>
  );
};
export default SettingsScreen;
