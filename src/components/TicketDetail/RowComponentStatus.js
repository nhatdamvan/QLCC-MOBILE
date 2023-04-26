import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from 'styles/styleGlobal';
import {getStatusTicket} from 'utils';

const RowComponentStatus = (props) => {
  const {label, value} = props;
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.textLabel}>{label}</Text>
        <View
          style={[
            styles.labelContainer,
            {backgroundColor: getStatusTicket(value).color},
          ]}>
          <Text style={styles.labelText}>{getStatusTicket(value).label}</Text>
        </View>
      </View>
      <View style={styles.devide} />
    </View>
  );
};

export default React.memo(RowComponentStatus);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingVertical: 12,
  },
  textLabel: {
    color: COLORS.gray,
    fontSize: 14,
    width: '60%',
  },
  textValue: {
    color: COLORS.black,
    fontSize: 14,
    textAlign: 'left',
    flex: 1,
  },
  devide: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.devide,
  },
  labelContainer: {
    borderRadius: 8,
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  labelText: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
});
