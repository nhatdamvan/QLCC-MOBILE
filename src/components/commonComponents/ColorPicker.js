import React, { useState } from "react";
import { View, Text, Image, Pressable, Modal, TouchableOpacity } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import { ColorpickerStyle } from '../../styles';
import { useDispatch, useSelector } from "react-redux";
import Button from '../../components/commonComponents/Button';
import images from '../../index';
import { commonActions } from "../../redux/reducers/commonReducer";

const ColorPickerset = () => {  
  const [modalVisible, setModalVisible] = useState(false);
  const { colorrdata } = useSelector(state => state.commonReducer) || { colorrdata };
  const [currentColor, setCurrentColor] = useState('');
  const dispatch = useDispatch();
  const onColorChange = (selectedColor) => {
    setCurrentColor(selectedColor);
    dispatch(commonActions.color_picker_set_action({data: selectedColor}))
  };

  console.log('setCurrentColor', currentColor)
  return (
    <View>
      <View style={ColorpickerStyle.centeredViewtwo}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={ColorpickerStyle.centeredView}>
            <View style={ColorpickerStyle.modalView}>
              <View style={ColorpickerStyle.setheight}>
                <View
                  style={[
                    { backgroundColor: currentColor, borderRadius: 7 },
                  ]}
                >
                  <Text style={ColorpickerStyle.setcolorwhite}>{currentColor}</Text>
                  <ColorPicker
                    color={currentColor}
                    onColorChange={(selectedColor)=> onColorChange(selectedColor)}
                    onColorSelected={'red'}         
                    thumbSize={50}
                    noSnap={true}
                    defaultProps={true}
                    row={false}
                    gapSize={0}
                    discreteLength={0}
                    sliderHidden={true}
                    discrete={true}
                  />
                </View>
              </View>
              <View style={ColorpickerStyle.setbuttonwidth}>
                <Button title="ok"
                  buttonStyle={{ backgroundColor: colorrdata, borderColor: colorrdata }}
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image style={ColorpickerStyle.colorpickerpickerimagwidth} resizeMode='cover' source={images.Color_picker_image} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default ColorPickerset;