import { StyleSheet } from 'react-native';
import { Col } from 'react-native-table-component';
import { SF, SH, Fonts, Colors } from '../../utils';

export default StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    height: 'auto',
  },
  aerrowstylesset: {
    position: 'relative',
    right: 10,
  },
  inputMobile: {
    marginBottom: SH(13),
    paddingHorizontal: 12,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 7,
    height: 47,
    color: 'gray',
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: 7,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  numberinputMobile: {
    marginBottom: SH(13),
    paddingHorizontal: 12,
    width: '100%',
    paddingTop: 12,
    paddingBottom: 7,
    height: 47,
    color: 'gray',
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: 7,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  minviewallcontent: {
    width: '90%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: ColorTheme.sp_Theme,
  },
  sacroowviewstyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    height: 'auto',
  },
  sacroowviewstyletwor: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    height: 'auto',

  },
  flexrowpassword: {
    width: '100%',
    borderRadius: SH(7),
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginBottom: SH(15),
    height: 47,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  setinputpassword: {
    width: '80%',
    color: 'gray',
    fontSize: SF(17),
    padding: 0,
    paddingTop: 5,
    fontFamily: Fonts.Poppins_Medium,
  },

  headerstylebgcolor: {
    backgroundColor: '#e3f2f0'
  },
  minviewaudioacall: {
    width: '100%',
    height: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
  },
  setheaderspacepadding: {
    height: 60,
    backgroundColor: '#e3f2f0',
    paddingTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,

  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingTop: 20,
    paddingBottom: 20,
    width: '95%',
  },
  setbgcolorgrsay: {
    backgroundColor: 'gray',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    opacity: Platform.OS === 'ios' ? 2 : 0.9,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  closeIcon: {
    position: 'absolute',
    right: 15,
    top: 16,
    height: 40,
    width: 40,
    backgroundColor: '#046665',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  iconclosestyle: {
    color: 'white',
    paddingBottom: 3,
  },
  checkiconright: {
    borderWidth: 3,
    height: 80,
    width: 80,
    borderRadius: 100,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  setroundcenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  setbackgroundicon: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 15,
  },
  registertextset: {
    paddingTop: 25,
    paddingBottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  settext: {
    color: 'black',
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
  },
  setokbutton: {
    width: '47%'
  },
  setokbuttonsetotp: {
    width: '30%'
  },

  buttonminview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingTop: 20,
  },
  buttonminviewtwo: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  setbuttonstyle: {
    backgroundColor: 'red',
    width: '50%'
  },
  setinputstyleapply: {
    paddingHorizontal: 12,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 7,
    height: 50,
    color: 'gray',
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: 7,
    backgroundColor: '#e3f2f0',

  },
  setalldetailesminview: {
    paddingTop: 70,
  },
  setbgimage: {
    height: '100%',
    width: '100%',
  },
  setsplashscreehhieight: {
    height: 100,
    width: 100,
  },
  setminviewstylesplasg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  container: {
    height: '100%'
  },
  chiropractorText: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(20),
    fontStyle: 'normal',
    paddingRight: 15,
    paddingLeft: 3,
    color: '#fff',
    fontWeight: '500',
  },
  marginrighthome: {
    paddingLeft: 7,

  },
  flexrowplusicon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusiconstyle: {
    position: 'relative',
    top: -2,
  },
  seticoncolor: {
    color: 'white',
    paddingLeft: 7,
  },
  seticonstyle: {
    color: Colors.theme_backgound,
  },
  seticonstyletwos: {
    color: 'white',
  },
  minviewtwoiconcall: {
    flexDirection: 'row',
  },
  seticongbgoclor: {
    width: 40,
    height: 40,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 200,
  },

  flexrowsidemnu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  settablestyle: {
    fontSize: SF(32),
    fontFamily: Fonts.Poppins_Medium,
    color: 'black',
    position: 'relative',
    left: 100,
  },
  settextstyle: {
    fontSize: 20,
    fontFamily: Fonts.Poppins_Bold,
    fontWeight: '700'
  },
  sp_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sp_textStyle: {
    color: '#f38831',
    fontSize: 24,
    fontFamily: Fonts.Poppins_Regular,
    marginBottom: SH(50)
  },
  sp_textClinic: {
    color: '#046665',
    fontSize: 24,
    fontFamily: Fonts.Poppins_Regular,
    marginBottom: SH(50)
  },
  sp_dr_name: {
    color: '#263238',
    fontSize: 24,
    fontFamily: Fonts.Poppins_Regular,
    marginTop: SH(50)
  },

  SearchHomeTab: {
    width: '100%',
    backgroundColor: 'transperent',
    shadowColor: "transperent",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 0,
    },
    shadowOpacity: 0,
    shadowRadius: Platform.OS === 'ios' ? 0 : 0,
    elevation: Platform.OS === 'ios' ? 0 : 0,
    color: Colors.theme_backgound,
    fontFamily: Fonts.Poppins_Regular,
    color: '#fff'
  },
  TabInputSearch: {
    color: '#fff'
  },

  flexsewtrwo: {
    width: '85%',
    backgroundColor: 'transperent',
    flexDirection: 'row',
    alignItems: 'center'
  },
  SearchCloseIcon: {
    fontSize: SF(25)
  },
  SlectModuleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 'auto'
  },

  minstyleviewphotograpgy: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  minstyleviewphotograpgyTwo: {
    flexDirection: 'row',
    height: '100%',
  },
  container: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  PositionRelative: {
    position: 'relative',
    height: '100%',
    backgroundColor: 'white',
  },
  PositionAbsolute: {
    position: 'absolute',
    top: 0,
  },

  heightset: {
    height: 'auto',
  },
  ScrolHeightView: {
    height: '100%',
    overflow: 'scroll'
  },

  flexrowiconcolorpicker: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  setmarginright: {
    marginRight: 10,
  },
  Settitlestyle: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
  },
  // tabstyle
  TabsettextActiveBox: {
    backgroundColor: 'red',
    width: '50%',
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  TabsettextBox: {
    backgroundColor: 'white',
    width: '50%',
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  TabBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: SH(10)
  },
  
  TabsettextActive: {
    color: Colors.White_text_color,
    fontSize: 16,
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center'
  },
  setwhiteboxstyle: {
    width: 100,
  },
  setwhiteboxstyle: {
    paddingHorizontal: 10,
    marginBottom: 7
  },
  setwidthtooltip: {

  },
  tolltiptext: {
    fontSize: 15,
    fontFamily: Fonts.Poppins_Medium,
  },
  buttonStyle: {
    backgroundColor: 'green',
    width: 100,
  },
  seticonview: {
    marginLeft: 10,
  },
  settextcolor: {
    color: 'white'
  },
  iconcolorwhite: {
    color: 'white'
  },
  flexiconvirw: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  flexrowiconcolorpicker: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  setmarginright: {
    marginRight: 10,
  },
  minviewsetall: {
    backgroundColor: 'white',
    height: '100%'
  },

  LeadDropdown: {
    borderWidth: 0,
    padding: 0,
    paddingVertical: SH(5),
    width: '100%',
    borderRightWidth: 0,
    borderRadius: 0,
    minHeight: 'auto',
    paddingHorizontal: SH(10)
  },
  icon: {
    marginRight: 5,
  },
  selectedTextStyleLead: {
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
  },
  LeadsUpDownArroIcon: {
    fontSize: SF(24)
  },
  CommonDrop: {
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
    borderRadius: 7,
  },
  FormGroup: {
    marginBottom: SH(10)
  },
  Tablehead: {
    paddingVertical: SH(10),
    paddingHorizontal: SH(10)
  },
  TableheadText: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18)
  },
  TablerowSection: {
    paddingHorizontal: SH(10),
    paddingVertical: SH(8)
  },
  descountbox: {
    paddingVertical: SH(6),
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightgrey
  },
  simplestatetext: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
    paddingVertical: SH(6),
  },
  ItemStyle: {
    paddingHorizontal: SH(20)
  },
  AttactcenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0
  },
  AttactmodalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    paddingVertical: SH(10),
    paddingHorizontal: SH(20),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  Attactbutton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },

  AttactColseIcon: {
    fontSize: SF(25)
  },

  AttactmodalText: {
    paddingVertical: SH(5),
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.gray,
  },
  AttactmodalTextHeader: {
    fontSize: SF(18),
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.theme_backgound,
    textAlign: 'left',
    paddingBottom: SH(10)
  },

  AttactmodalViewHader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%'
  },
  AttactmodalViewTile: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    textAlign: 'left',
    width: '100%',
  },
  button: {
    justifyContent: 'center'
  },
  LineIcon: {
    flexDirection: 'row',
    justifyContent: 'center'
  }

});