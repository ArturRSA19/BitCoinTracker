import React, { Fragment } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style.js';

export default function QuotationsList(){
    return (
        <Fragment>
        <View style={styles.filters}>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() => {}}
            >
                <Text style={styles.textButtonQuery}>7D</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() => {}}
            >
                <Text style={styles.textButtonQuery}>15D</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() => {}}
            >
                <Text style={styles.textButtonQuery}>1M</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() => {}}
            >
                <Text style={styles.textButtonQuery}>3M</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={() => {}}
            >
                <Text style={styles.textButtonQuery}>6M</Text>
            </TouchableOpacity>
        </View>
        <ScrollView></ScrollView>
        </Fragment>
    )
}