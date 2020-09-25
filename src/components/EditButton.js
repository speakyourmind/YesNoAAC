import { Button, View } from "native-base";
import React, { Component } from 'react';
import Icon from 'react-native-ionicons';
import { SettingsContext } from '../../SettingsContext';

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

