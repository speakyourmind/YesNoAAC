

import {
    Button,
    Text, View
} from "native-base";
import React, { Component } from 'react';
import Tts from 'react-native-tts';


export default class TTSButton extends Component {
    speak = (speakText) => {

    }
    render() {
        return (
            <View style={{ flexGrow: 1 }} >
                <Button full disabled={this.props.disabled} onChange={this.props.onChange}
                    style={{ margin: this.props.margin, flexGrow: 1, backgroundColor: this.props.backgroundColor }}
                    onPress={() => {
                        Tts.speak(this.props.textValue)
                    }} >
                    <Text style={{ fontSize: this.props.fontSize, color: this.props.fontColor }}>
                        {this.props.textValue}
                    </Text>

                </Button>

            </View >
        )
    }

}

