import {Dimensions, Platform} from 'react-native';

export const COLORS = {
  primary: '#3918D9',
  bg_purple: '#222bee',
  gray: '#7E7E7E',
  devide: '#E7E7E7',
  black: '#000000',
  white: '#ffffff',
  bg_gray: '#ECECEC',
  text_gray: '#8A8A8A',
  dark_gray: '#424242',
  red: '#DF0404',
  green: '#00AC4F',
  blue: '#0064D2',
};

export const STYLES = {
  shadow: {
    shadowColor: '#7B53F6',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
  shadowButton: {
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: '#000',
    shadowRadius: 3,
    elevation: 5,
  },
  paddingText: Platform.OS === 'android' ? 12 : 0,
  emptyText: {
    color: '#889197',
    alignSelf: 'center',
    marginTop: 8,
    fontSize: 16,
  },
  emty: {
    alignItems: 'center',
    marginTop: 50,
  },
};
export const WIDTH = Dimensions.get('screen').width;
export const HEIGHT = Dimensions.get('screen').height;
