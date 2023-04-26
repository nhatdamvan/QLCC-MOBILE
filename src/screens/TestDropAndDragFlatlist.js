import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {DraxProvider, DraxView} from 'react-native-drax';

export default function TestDropAndDragFlatlist() {
  return (
    <DraxProvider>
      <View style={styles.container}>
        <DraxView
          style={styles.draggable}
          onDragStart={() => {
            console.log('start drag');
          }}
          payload="world"
        />
        <DraxView
          style={styles.receiver}
          onReceiveDragEnter={({dragged: {payload}}) => {
            console.log(`hello ${payload}`);
          }}
          onReceiveDragExit={({dragged: {payload}}) => {
            console.log(`goodbye ${payload}`);
          }}
          onReceiveDragDrop={({dragged: {payload}}) => {
            console.log(`received ${payload}`);
          }}
        />
      </View>
    </DraxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  draggable: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  receiver: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
});
