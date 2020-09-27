
import React, { Component } from 'react';
import Slider from '@react-native-community/slider';

export default class SettingsSlider extends Component {

    render() {
        return (
            <Slider
                style={{ width: 325, flex: 1, marginTop: 15, marginBottom: 5,transform: [{ scaleX: 1.5 }, { scaleY: 2.0 }] }}
                minimumValue={this.props.minimumValue}
                maximumValue={this.props.maximumValue}
                step={this.props.step}
                minimumTrackTintColor="#277CB4"
                maximumTrackTintColor="#000000"
                thumbTintColor="#277CB4"
                value={this.props.value}
                onSlidingComplete={this.props.onSlidingComplete}
            />
        )
    }

}

