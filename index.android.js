/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ToastAndroid,
  ToolbarAndroid
} from 'react-native';
/*
import List from './app/components/List'
import Slider from './app/components/Slider'
import Header from './app/components/Header'
*/

export default class AwesomeProject extends Component {
    onBtnPress() {
        ToastAndroid.show('Button Pressed', ToastAndroid.SHORT);
        //requestAuthorization();
    }
  render() {
    let pic = {
        uri: 'https://cdn4.iconfinder.com/data/icons/marine-and-nautical/78/Marine_nautical-09-512.png'
      }
    return (
      <View style={styles.container}>
        <ToolbarAndroid
              style={styles.toolbar}
              title="Title"
              navIcon={require("./app/drawable/icons8-Hummingbird-48.png")}
              //onActionSelected={this.onActionSelected}
              actions = {[
                  {title: "Quit", show: "never"}
              ]}
        />
        <Image
            source={pic}
            style={{width:100, height: 100 , marginBottom: 10}}
        />
        <Button
            onPress={this.onBtnPress}
            title="Find me!"
            color="#99826F"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffdab9',
  },
  toolbar: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#2196F3',
      height: 56,
      alignSelf: 'stretch',
      flex: 1,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
