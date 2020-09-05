
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
                <Button full info onChange={this.props.onChange}
                    style={{ margin: 10, flexGrow: 1, backgroundColor: this.props.backgroundColor }}
                    onPress={() => Tts.speak(this.props.speakText)}>
                    <Text style={{ fontSize: this.props.fontSize }}>
                        {this.props.textValue}
                    </Text>
                </Button>

                {this.props.editMode &&
                    <Fab direction="up" position="bottomRight" visible="">
                        <Icon name="md-create" color="#ffffff" />
                    </Fab>}
                {this.props.editMode &&
                    <Fab direction="down" position="topRight">
                        <Icon name="md-close" color="#ffffff" />
                    </Fab>}
            </View >
        )
    }

}