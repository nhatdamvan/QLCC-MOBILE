import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, WIDTH} from 'styles/styleGlobal';

export default function ButtonCustom(props: any) {
  const {label, onPress, isLoading} = props;
  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        isLoading ? {backgroundColor: '#A3B3CE'} : null,
      ]}
      onPress={onPress}>
      {isLoading ? <ActivityIndicator color={COLORS.white} /> : null}
      <Text style={styles.textLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    paddingVertical: 12,
    width: WIDTH * 0.9,
    backgroundColor: COLORS.blue,
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
    paddingHorizontal: 12,
  },
});
