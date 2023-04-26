import { StyleSheet } from 'react-native';
import { SH, SW, SF, Fonts, Colors, widthPercent } from '../../utils';
export default StyleSheet.create({
  ImageCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageBox: {
    marginVertical: SH(15)
  },
  UserPictureSet: {
    width: SW(100),
    height: SH(110),
    borderRadius: 100
  },
  CelenderHeadText: {
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    fontSize: SF(15),
  },
  CelenderHeadTexttwo: {
    fontFamily: Fonts.Poppins_Medium,
    color: Colors.green_text_color,
    textAlign: 'center',
    fontSize: SF(17),
    textAlign: 'right',
    marginTop: -24,
    paddingRight: 10,
  },
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  SetwidStyle: {
    width: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 7,
    marginRight: 10,
  },
  SetwidStyletwo: {
    width: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 0,
    borderRadius: 7,
    marginRight: 10,
  },
  Setdigitstyle: {
    flexDirection: 'row',
    color: Colors.theme_backgound,
    fontSize: 15,
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center'
  },
  Setdigitstylewhite: {
    flexDirection: 'row',
    color: Colors.theme_backgound,
    fontSize: 15,
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    color: 'white'
  },
  settextstyletile: {
    flexDirection: 'row',
    color: Colors.theme_backgound,
    fontSize: 13,
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    position: 'relative',
    top: 3,
  },
  settextstyletilewhite: {
    flexDirection: 'row',
    color: Colors.theme_backgound,
    fontSize: 13,
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    top: 3,
  },
  Setbgcolohometab: {
    marginTop: 30,
    height: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: Colors.light_gray_text_color,
  },
  setcontainertyle: {
    paddingLeft: 10,
    paddingRight: 5,
  },
  setcentericon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Smilebottomtext: {
    fontSize: 16,
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    marginTop: 20,
  },
  Smilebottomtexttwo: {
    fontSize: SF(14),
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    color: 'white',
    position:'relative',
    top:1,
  },

  Flexminviewplus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    marginHorizontal: 20,
    borderStyle: 'dashed',
    borderColor: 'white',
    marginTop: 10,
    paddingTop: 20,
  },
  Setbuttonwidth: {
    width: widthPercent(27),
    height: 33,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Setfontsize: {
    fontSize: 12,
    color: Colors.theme_backgound,
  },
  Setfullwidth: {
    width: '100%',
    marginTop: 70,
  }
});