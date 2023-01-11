import React, {useState} from 'react';
import { SafeAreaView, View, StyleSheet,StatusBar, Text } from 'react-native';
import { colors } from './src/utils/Colors';

import {Focus} from './src/features/Focus'
import {Timer} from './src/features/Timer'

export default function App() {

  const [currentSubject, setCurrentSubject] = useState('test');

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} /> 
        ) : ( 
        <Timer 
          focusSubject={currentSubject}
          onTimerEnd={() => {}}
          clearSubject={() => {}}
        />
        )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: colors.darkBlue,
      padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})
