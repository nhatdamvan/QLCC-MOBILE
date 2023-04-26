import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {COLORS} from 'styles/styleGlobal';

const RowComponent = props => {
  const {label, value, editAbel, handleChange} = props;
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.textLabel}>{label}</Text>
        <TextInput
          onChangeText={handleChange}
          style={styles.textValue}
          value={value}
          placeholder={value}
          editable={editAbel}
        />
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
