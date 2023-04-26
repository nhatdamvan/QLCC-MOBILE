import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

import {COLORS} from 'styles/styleGlobal';
import moment from 'moment';
import {Fonts, getStatusTicket} from 'utils';
import RouteName from 'routes/RouteName';
import {navigate} from 'routes/rootNavigation';
import TicketItem from './TicketItem';

const ListTicketRequests = props => {
  const {ticketRequests, statusTicket, isLoading} = props;
  const renderItem = ({item}) => {
    return <TicketItem item={item} />;
  };
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.labelContainer,
          {backgroundColor: getStatusTicket(statusTicket).color},
        ]}>
        <Text style={styles.labelText}>
          {getStatusTicket(statusTicket).label}
        </Text>
      </View>
      {isLoading ? (
        <ActivityIndicator color={COLORS.blue} />
      ) : (
        <FlatList
          contentContainerStyle={{}}
          data={ticketRequests}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};
export default React.memo(ListTicketRequests);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  labelContainer: {
    borderRadius: 50,
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 12,
    // width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    marginBottom: 12,
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
