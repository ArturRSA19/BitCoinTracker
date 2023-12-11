import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';


export default function QuotationItems(){
    return(
        <View style={styles.mainContent}> 

            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image 
                    style={styles.logoBitCoin}
                    source={require('../../../assets/bitCoinLogo.png')}
                    />
                    <Text style={styles.dayCotation}>11/12/2023</Text>
                </View>
            </View>

            <View style={styles.contextRight}>
                <Text style={styles.price}>$ 53331.009</Text>
            </View>

        </View>
    )
}