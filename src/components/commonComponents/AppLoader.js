import { StyleSheet, View } from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

export default function AppLoader() {
  return (
    <View style={[styles.container, StyleSheet.absoluteFillObject]}>
      <Lottie
        source={require('assets/lottie/loader.json')}
        autoPlay
        loop
        style={{ height: 200, width: 200 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  },
});
