import {Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from 'styles/styleGlobal';

const RowComponent = props => {
  const {label, value, onPressValue} = props;
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.textLabel}>{label}</Text>
        {label === 'Số điện thoại liên hệ' ? (
          <TouchableOpacity onPress={onPressValue}>
            <Text style={[styles.textValue, {textDecorationLine: 'underline', color: COLORS.green}]}>
              {value}
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.textValue}>{value}</Text>
        )}
      </View>
      <View style={styles.devide} />
    </View>
  );
};

export default React.memo(RowComponent);

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
});
