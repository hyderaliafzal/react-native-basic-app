import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    ToolbarAndroid
} from 'react-native';

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
    },
});
export  default class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Title'
        }
        console.log(this);
    }

    onActionSelected(position) {
        if (position === 0) { // index of 'Settings'
            showSettings();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ToolbarAndroid
                    style={styles.toolbar}
                    title={this.state.title}
                    navIcon={require("../drawable/icons8-Hummingbird-48.png")}
                    //onActionSelected={this.onActionSelected}
                    actions={[
                        {title: "Log out", show: "never"}
                    ]}
                />
            </View>
        );
    }

}


AppRegistry.registerComponent('Toolbar', () => Toolbar);
