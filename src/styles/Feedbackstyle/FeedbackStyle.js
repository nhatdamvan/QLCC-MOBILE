import { StyleSheet, Dimensions } from 'react-native';
import {  Fonts } from '../../utils';

export default StyleSheet.create({

  keybordtopviewstyle: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  setheight: {
    width:200,
  },
  centerlottiw: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    marginTop:20,
  },
  accounttexttwo: {
    fontSize:18,
    fontFamily:Fonts.Poppins_Medium,
    textAlign:'center',
    marginTop:30,
  },
  accounttext: {
    fontSize:18,
    fontFamily:Fonts.Poppins_Medium,
    textAlign:'center',
    marginTop:20,
  },
  minflexview: {
    paddingHorizontal:10,
    width:'100%'
  },
  inputfeedback: {
    backgroundColor:'transparent',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 0,
    elevation: Platform.OS === 'ios' ? 1 : 0,
  },
  feedbackgeightstyle: {
    height:100,
    backgroundColor:'white',
    borderRadius:7,
    marginTop:20,
    marginBottom:30,
    width:'100%',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  accountbutton: {
    marginBottom:20,
  }
});
