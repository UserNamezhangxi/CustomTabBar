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
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';


export default class App extends Component<Props> {
    render() {
        return <ScrollableTabView
            style={{marginTop: 20, }}
            initialPage={1}
            renderTabBar={() => <DefaultTabBar />}
            >
            <Text tabLabel='Tab #1'>My</Text>
            <Text tabLabel='Tab #2'>favorite</Text>

        </ScrollableTabView>;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
