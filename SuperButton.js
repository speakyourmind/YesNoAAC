
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tts from 'react-native-tts';
import {
    View,
    Container,
    Button,
    Text
  } from "native-base";
export default class SuperButton extends Component {
    render() {
        return (
            <View style={{ flexGrow: 1 }}>
                <Button full success
                    style={{ margin: 10, flexGrow: 1,backgroundColor: this.props.backgroundColor}}
                    onPress={() => Tts.speak(this.props.textValue)}
                    >
                    <Text style={{ fontSize: this.props.fontSize }}>{this.props.textValue}</Text>
                </Button>
            </View>
        )
    }

}