
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tts from 'react-native-tts';
import {
    View,
    Container,
    Button,
    Text,
    Fab
} from "native-base";
import Icon from 'react-native-ionicons';

export default class SuperButton extends Component {

    render() {
        return (
            <View style={{ flexGrow: 1 }} >
                <Button full disabled={this.props.disabled} onChange={this.props.onChange}
                    style={{ margin: 10, flexGrow: 1, backgroundColor: this.props.backgroundColor }}
                    onPress={speak()} >
                    <Text style={{ fontSize: this.props.fontSize, color: this.props.fontColor }}>
                        {this.props.textValue}
                    </Text>

                </Button>

            </View >
        )
    }

}

function speak() {
    return () => Tts.speak(this.props.textValue);
}
