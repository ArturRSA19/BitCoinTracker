import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
      backgroundColor="#00E6D8"
      barStyle="dark-content"
      />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotationsList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 0,
    marginTop: 100
  },
});
