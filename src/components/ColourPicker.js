import { Picker, View, Text } from "native-base";
import React, { Component } from 'react';
import { styles } from './styles';

export default class ColourPicker extends Component {

    render() {
        return (
            <View style={styles.pickerView}>
                <Picker
                    note
                    style={{ color: '#000', placeholderTextColor: '#000' }}
                    mode="dropdown"
                    selectedValue={this.props.selectedValue}
                    onValueChange={this.props.onValueChange}
                >
                    <Picker.Item label="Black" value="#000000" />
                    <Picker.Item label="White" value="#ffffff" />
                    <Picker.Item label="Red" value="#c0392b" />
                    <Picker.Item label="Orange" value="#C75000" />
                    <Picker.Item label="Green" value="#1F894B" />
                    <Picker.Item label="Blue" value="#277CB4" />
                    <Picker.Item label="Purple" value="#8e44ad" />
                </Picker>
            </View>
        )
    }

}
