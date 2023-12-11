import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';
import QuotationItems from './src/components/QuotationsList/QuotationsItems';

function addZero(number){
  if(number <= 9){
    return "0" + number
  }
  return number
}

function url(qtdDays){
  const date = new Date();
  const listLastDays = qtdDays;
  const end_date = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`;
  date.setDate(date.getDate() - listLastDays);
  const start_date = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`;
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`;
}


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
      <QuotationItems />
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
