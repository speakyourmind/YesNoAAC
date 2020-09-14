
import React, { Component } from 'react';
import Slider from '@react-native-community/slider';


export default class SettingsSlider extends Component {
    
    render() {
        return (
            <Slider
            style={{ width: 325, flex: 1, marginTop: 15, marginBottom: 5 }}
            minimumValue={10}
            maximumValue={200}
            step={10}
            minimumTrackTintColor="#277CB4"
            maximumTrackTintColor="#000000"
            thumbTintColor="#277CB4"
            value={this.props.settingValue}
            onValueChange={this.props.onSettingValueChange}
          />
        )
    }

}

