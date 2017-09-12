import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';

import Icon from 'react-native-vector-icon/FontAwsome'
const Header = props => (
    <View>
        <TouchableWithoutFeedback onPres={() => null}>
            <Icon
                name="bar"

            />
        </TouchableWithoutFeedback>
    </View>
)
export default Heade