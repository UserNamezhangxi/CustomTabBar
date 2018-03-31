/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
import ScrollableTabView  from 'react-native-scrollable-tab-view';
import CustomTabBar from './CustomTabBar'
import Mine from './Mine/Mine'
import Find from './Find/Find'
import Shop from './Shop/Shop'
import Home from './Home/Home'

export default class Main extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {
            tabNames: ['主页', '购物', '发现', '我的'],
            tabIconNames: ['ios-search', 'ios-albums', 'ios-paper-plane', 'ios-person-add']
        };
    }

    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        return (
            <ScrollableTabView
                renderTabBar={() => <CustomTabBar tabNames={tabNames} tabIconNames={tabIconNames}/>}
                tabBarPosition='bottom'>
                <Home tabLabel='主页'/>
                <Shop tabLabel='购物'/>
                <Find tabLabel='发现'/>
                <Mine tabLabel='我的'/>
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({

});
