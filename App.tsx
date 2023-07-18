import { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text } from 'react-native';
import { myColors } from './src/styles/Colors';
import MyKeyboard from './src/components/Keyboard';



export default function App() {
  
  return (
    
      <SafeAreaView style={styles.container}>
        <MyKeyboard />
      </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.dark,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
