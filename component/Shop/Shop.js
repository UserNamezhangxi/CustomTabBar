/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,

} from 'react-native';

export default class Shop extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize:30}}>
                    Shop
                </Text>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});
