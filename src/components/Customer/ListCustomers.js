import RouteName from 'routes/RouteName';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {COLORS} from 'styles/styleGlobal';

const ListCustomers = props => {
  const {customers, navigation, isLoading} = props;
  const renderItem = ({item}) => {
    console.log('item', item);
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.rowContainer}
        onPress={() => {
          navigation.navigate(RouteName.CUSTOMER_DETAIL, {customer: item});
        }}>
        <Text style={styles.textTitle}>{item.Name}</Text>
        <Text style={styles.textCode}>{item.Code}</Text>
        <Text style={styles.textPhone}>{item.PhonenumberFirst}</Text>
        <View style={styles.devide} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={{marginTop: 12}}>
          <ActivityIndicator color={COLORS.blue} />
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{}}
          data={customers}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default React.memo(ListCustomers);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  rowContainer: {
    paddingHorizontal: 8,
    marginTop: 20,
  },
  textTitle: {
    color: COLORS.black,
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    paddingVertical: 4,
  },
  textCode: {
    color: COLORS.gray,
    fontSize: 14,
    paddingVertical: 4,
    marginRight: 20,
  },
  textPhone: {
    color: COLORS.primary,
    fontSize: 14,
    paddingVertical: 4,
    marginRight: 20,
  },
  devide: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.devide,
  },
});
