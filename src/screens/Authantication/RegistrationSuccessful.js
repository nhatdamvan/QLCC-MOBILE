import React, { useEffect, useRef } from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, Animated, Easing } from "react-native";
import { RegisterStyleset, Style } from '../../styles';
import { Button } from '../../components';
import RouteName from '../../routes/RouteName';
import { useSelector } from "react-redux";
import Lottie from 'lottie-react-native';

const RegistrationSuccessful = ({ navigation }) => {
  const animationProgress = useRef(new Animated.Value(0))
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const OnLoginPress = () => {
    navigation.replace(RouteName.HOME_SCREEN);
  }

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
  }, [])

  return (
    <View style={RegisterStyleset.minstyleviewphotograpgytwo}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={RegisterStyleset.keybordtopviewstyle}>
            <View style={RegisterStyleset.minflexview}>
              <View style={RegisterStyleset.minviewsigninscreen}>
                <Lottie
                  resizeMode="contain"
                  autoPlay={true}
                  source={require('../../utils/Accountcreated.json')}
                  progress={animationProgress.current}
                />
                <View style={RegisterStyleset.accountbutton}>
                  <Button
                    buttonStyle={{ backgroundColor: colorrdata }}
                    title="Get Started"
                    onPress={() => OnLoginPress()}
                  />
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default RegistrationSuccessful;
