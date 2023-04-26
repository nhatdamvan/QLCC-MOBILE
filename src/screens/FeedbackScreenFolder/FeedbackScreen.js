import React from "react";
import { Text, View, ScrollView, } from "react-native";
import { Feedback, Style } from '../../styles';
import { Rating } from 'react-native-ratings';
import { Input, Lottie, Button } from '../../components';
import { Colors } from '../../utils';
import { useSelector } from "react-redux";
import RouteName from "../../routes/RouteName";

const FeedbackScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const { colorrdata } = useSelector(state => state.commonReducer) || {};

  return (
    <View style={Style.minviewsetall}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.contentContainerStyle}>
        <View style={Feedback.keybordtopviewstyle}>
          <View style={Feedback.minflexview}>
            <View style={Feedback.centerlottiw}>
              <Lottie
                Lottiewidthstyle={Feedback.setheight}
                source={require('../../screens/LottiefilesAll/ReaviewsAnimation.json')}
              />
            </View>
            <Text style={[Feedback.accounttexttwo, { color: colorrdata }]}>Please Rate The CRM!</Text>
            <View style={Feedback.flexrowsetstarsignup}>
              <Rating
                type='custom'
                ratingColor='hsl(27.7, 73.8%, 62.5%)'
                ratingBackgroundColor='#c8c7c8'
                ratingCount={5}
                tintColor={Colors.White_text_color}
                imageSize={30}
                startingValue={5}
                isDisabled={false}
                style={{ paddingVertical: 10 }}
              />
            </View>
            <Text style={[Feedback.accounttext, { color: colorrdata }]}>Your Comments and Suggestions help us improve the service quality better!</Text>
            <View style={Feedback.feedbackgeightstyle}>
              <Input
                inputStyle={Feedback.inputfeedback}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter Your Feedback"
              />
            </View>
            <View style={Feedback.accountbutton}>
              <Button title="Submit" onPress={() => navigation.navigate(RouteName.HOME_SCREEN)} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default FeedbackScreen;
