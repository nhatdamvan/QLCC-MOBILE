import React from "react";
import { View, Text, KeyboardAvoidingView, ScrollView, } from "react-native";
import { Style } from '../../styles';
import { useSelector } from "react-redux";

const SettingsScreen = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};

  return (
    <>
      <View style={Style.minstyleviewphotograpgy}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.contentContainerStyle}>
          <KeyboardAvoidingView enabled>
            <Text style={[Style.Settitlestyle, { color: colorrdata }]}>No Unsynced Records</Text>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </>
  );
};
export default SettingsScreen;
