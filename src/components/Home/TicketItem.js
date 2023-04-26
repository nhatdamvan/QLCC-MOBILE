import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {COLORS, STYLES} from 'styles/styleGlobal';
import RouteName from 'routes/RouteName';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import { Fonts } from 'utils';
import { navigate } from 'routes/rootNavigation';

export default function TicketItem({item}) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <TouchableOpacity
      onLongPress={() => setIsSelected(true)}
      activeOpacity={1}
      style={[
        styles.rowContainer,
        isSelected ? {backgroundColor: COLORS.bg_gray} : null,
      ]}
      onPress={() => {
        navigate(RouteName.TICKET_DETAIL, {ticketRequest: item});
      }}>
      <View style={styles.leftContainer}>
        <FastImage
          style={{width: 20, height: 20}}
          source={require('assets/icons/phone.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View>
        <Text style={styles.textTitle}>{item.RequestTitle}</Text>
        <View style={styles.belowRightContainer}>
          {/* AsignUserId */}
          <Text style={styles.textTime}>{item?.Name}</Text>
          <Text style={styles.textTime}>
            {moment(item.CreatedDate).locale('vi').format('DD/MM/YYYY  LT')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#000',
    shadowRadius: 2,
    elevation: 2,
    // backgroundColor: 'red',
    // justifyContent: 'center',
  },
  leftContainer: {
    paddingHorizontal: 12,
    paddingTop: 4,
  },
  labelText: {
    color: COLORS.white,
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    fontFamily: Fonts.Poppins_Medium,
  },
  textTitle: {
    color: COLORS.black,
    fontSize: 14,
    paddingVertical: 4,
    fontFamily: Fonts.Poppins_Medium,
  },
  textTime: {
    color: COLORS.gray,
    fontSize: 14,
    paddingVertical: 4,
    marginRight: 20,
    fontFamily: Fonts.Poppins_Regular,
  },
  belowRightContainer: {
    flexDirection: 'row',
  },
});
