import { StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors, Fonts } from '../../utils';

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = 0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flexGrow: 1
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: "transparent"
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
    paddingRight: 11,
  },
  titleStyle: {
    color: Colors.White_text_color,
    fontWeight: "bold",
    fontSize: 18
  },
  flexDirectionrowskipnext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '20%',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  homeheadertext: {
    color: Colors.White_text_color,
    fontWeight: '700',
    fontSize: 25,
    position: 'relative',
    top: 25,
  },
  whilistminbody: {
    width: '90%',
    marginTop: '7%',
    height: '100%',
    marginHorizontal: '5%',
  },
  iconlessthanback: {
    color: 'hsl(214.3, 83.2%, 51%)',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    position: 'relative',
    left: -7,
  },
  cellulardatatext: {
    fontSize: 18,
    fontFamily: Fonts.Poppins_Medium,
    color: 'black',
  },
  toggleswotchview: {
    marginTop: '5%',
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.light_gray_text_color,
    paddingBottom: 22,
    marginBottom: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  downlodtoggleswitchtext: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: 16,
  },
  righticonminview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    width: '100%',
    marginTop: '5%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.light_gray_text_color,
    paddingBottom: 17,
  },
  righticonminviewtwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    width: '100%',
    marginTop: '7%',
    borderBottomWidth: 1,
    paddingBottom: 17,
    borderBottomColor: 'red',
  },
  chekiconstyle: {
    color: 'black',
  },
  standardrecommedtext: {
    fontFamily: Fonts.Poppins_Medium,
    color: 'black',
    fontSize: 16,
  },
  downloadfastertext: {
    fontSize: 14.5,
    fontFamily: Fonts.Poppins_Medium,
    opacity: 0.5,
    paddingTop: '3%',
    color: 'black',
  },
  centerokbutton: {
    flexDirection:'row',
    justifyContent:'center',
  },
  offlinedoenloadstextset: {
    fontSize: 18,
    fontFamily: Fonts.Poppins_Medium,
    paddingTop: '8%',
    color: 'black',
  },
  bodysettextwidth: {
    width: '80%',
  },
  deletedownloads: {
    fontFamily: Fonts.Poppins_Medium,
    color: 'red',
    fontSize: 18,
  },
  redcoloricondelete: {
    color: 'red',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'gray',
    opacity: Platform.OS === 'ios' ? 1 : 0.9,
  },

  modalView: {
    backgroundColor: "white",
    borderRadius: 7,
    width: '90%',
    shadowColor: "#000",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  setshadowstylemodaltwo: {
    backgroundColor: "white",
    padding: 1.2,
    borderRadius: 7,
    width: '100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centericon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

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
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    color: 'black',
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 10,
    paddingRight: 10,
  },
  togglrswitchflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  setbuttonwidth: {
    width: '50%',
    marginHorizontal: '25%',
    paddingBottom: 25,
  },
  buttonset: {
    borderWidth: 1,
    borderColor: 'hsl(216.8, 90.7%, 38%)',
    backgroundColor: 'hsl(216.8, 90.7%, 38%)',
    width: '100%',
    borderRadius: 222,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTextStyleSignWithNumber: {

    color: 'hsl(216.8, 90.7%, 38%)',
    fontWeight: '700',
    fontSize: 18,
  },
  buttonTextStyleSignWithNumber2: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  paregraphtextmodal: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 15,
    paddingBottom: 25,
    color: 'gray',
    fontWeight: '700',
  },
  hometextheadercolor: {
    color: 'hsl(214.3, 83.2%, 51%)',
    fontSize: 23,
    fontWeight: '700',
    marginTop: 12,
    paddingLeft: 2,
  },
  nabarview: {
    flexDirection: 'row',
    paddingLeft: 7,
  },
  icomvlose: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: 15,
    left: -15,
  },
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
  },
 
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  minflexview: {
    width: '93%',

  }
});