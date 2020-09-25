import {Button, View, Text} from "native-base";
import React, { Component } from 'react';
import { SettingsContext } from '../../SettingsContext';
import Icon from 'react-native-ionicons';

export default class EditButton extends Component {

    render() {
        return (
            <View >
                <Button transparent onPress={() =>
                    this.context.toggleEditMode()
                }>
                    <Icon name='md-create' color='#ffffff' />
                </Button>
            </View >
        )
    }

}
EditButton.contextType = SettingsContext;

