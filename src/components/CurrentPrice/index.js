import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from './style.js';

export default function CurrentPrice (){
    return (
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>$ 52456.789</Text>
            <Text style={styles.textPrice}>Ultima cotação</Text>
        </View>
    )
}