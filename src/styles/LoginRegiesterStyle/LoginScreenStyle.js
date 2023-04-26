import { StyleSheet } from 'react-native';
import { SH, Fonts, Colors, } from '../../utils';
export default StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  login: {
    color: '#263238',
    fontSize: 30,
    fontFamily: Fonts.Poppins_Medium,
    marginTop: SH(30),
    lineHeight: 36,
    paddingBottom: SH(20),
  },
  setpatintlogin: {
    fontSize: 25,
    // color: Colors.theme_backgound,  
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 20,
    fontFamily: Fonts.Poppins_Medium,
  },
  imagesetus: {
    width: 100,
    height: 100,
  },
  button: {
    marginTop: SH(20),
    width: '100%',
  },
  textStyle: {
    color: '#263238',
    fontSize: 17,
    fontFamily: Fonts.Poppins_Medium,
    marginTop: SH(7),
    lineHeight: 24,
  },
  registerTextStyle: {
    fontSize: 17,
    fontFamily: Fonts.Poppins_Bold,
    marginTop: SH(50),
    lineHeight: 24
  },
  buttonviewsettopspace: {
    marginTop: SH(20),
    width: '100%',
  },
  viewtextStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  logoimage: {
    height: 150,
    width: 150,
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  customClass: {
    confirmButton: 'btn btn-primary',
    cancelButton: 'btn btn-secondary',
  },
  success: {
    confirmButtonColor: 'red',
  },
  activedot: {
    borderTopWidth: 2,
    width: "100%",
    height: "100%",
    borderColor: 'red',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  pleseentername: {
    color: 'red',
    fontSize: 15,
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'left',
    width: '100%',
    marginTop: -3,
    position: 'relative',
    top: -7,
  },
  setbottomspasce: {
    marginBottom: 10,
    width: '100%'
  },
  simplestatetext: {
    fontSize: 18,
    fontFamily: Fonts.Poppins_Medium,
    marginRight: 20,
    width:60,
  },
  simplestatetexttwoset: {
    fontSize: 18,
    fontFamily: Fonts.Poppins_Medium,
    marginRight: 20,
    width:'100%'
  },
  minviewtext: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    paddingTop: 5,
    paddingBottom: 2,
    marginHorizontal: 10,
  },
  Setheightmodal: {
    height: '95%',
    overflow: 'hidden',
    paddingVertical: 0,
    marginBottom: 20,
    marginTop:20,
    paddingHorizontal: 0,
    paddingBottom:20,
    paddingTop:0,
  },
  addplacestextset: {
    paddingRight: 20,
    fontSize: 14,
    fontFamily: Fonts.Poppins_Medium,
    position: 'relative',
    top: 3,
  },
  setserachbgcolorview: {
   position:'relative',
   zIndex:4,
    paddingTop: 10,
    paddingHorizontal:10,
    paddingBottom:10,
  },
  LoginButton: {
    paddingVertical: SH(0)
  }
});