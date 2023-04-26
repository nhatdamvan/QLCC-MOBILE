import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SwiperStyle } from '../../styles';
import { Button } from '../../components';
import { useSelector } from "react-redux";
import RouteName from '../../routes/RouteName';
import { Swiperdata } from '../../utils';
import { Lottie } from '../../components';


const App = ({ navigation }) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};

  const RenderItem = ({ item }) => {
    return (
      <View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={SwiperStyle.scrollviewstyle}>
          <View>
            <View style={SwiperStyle.Animationviewstyle}>
              {item.animation}
            </View>
          </View>
        </ScrollView>
       <TouchableOpacity style={SwiperStyle.iconbgcolorview} onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}>
        <Lottie Lottiewidthstyle={SwiperStyle.iconbgcolorview} source={require('../LottiefilesAll/RightaerrowSwiper.json')} />
       </TouchableOpacity>
        <Text style={[SwiperStyle.titleStyle, { color: colorrdata }]}>
          {item.title}
        </Text>
        <Text style={[SwiperStyle.textstyle, { color: colorrdata }]}>
          {item.text}
        </Text>
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={SwiperStyle.setbgbuttondiv}>
        <View style={SwiperStyle.buttonCircle}>
          <Button
            title="Get Started"
            buttonStyle={{ backgroundColor: colorrdata, borderColor: colorrdata }}
            onPress={
              () => navigation.navigate(RouteName.LOGIN_SCREEN)
            }
          />
        </View>
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <View style={SwiperStyle.setbgbuttondiv}>
        <Text style={[SwiperStyle.Nexttextstyle, { color: colorrdata }]}>Next</Text>
      </View>
    );
  };
  const _renderSkipButton = () => {
    return (
      <View style={SwiperStyle.setbgbuttondiv}>
        <TouchableOpacity onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}>
          <Text style={[SwiperStyle.Nexttextstyle, { color: colorrdata }]}>Skip</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <AppIntroSlider
        data={Swiperdata}
        renderItem={RenderItem}
        renderNextButton={_renderNextButton}
        renderSkipButton={_renderSkipButton}
        renderDoneButton={_renderDoneButton}
        showSkipButton={true}
        activeDotStyle={[SwiperStyle.activedotstyle, { backgroundColor: colorrdata }]}
        dotStyle={SwiperStyle.dotSwiperStyleet}
      />
    </>
  );
};
export default App;

