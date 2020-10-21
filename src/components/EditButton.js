import { Button, View,Text } from "native-base";
import React, { Component } from 'react';
import Icon from 'react-native-ionicons';
import { SettingsContext } from '../../SettingsContext';
import { styles } from '../styles/styles';

export default class EditButton extends Component {

    render() {
        return (
            <View >
                <Button transparent onPress={() =>
                    this.context.toggleEditMode()
                }>
                   <Text style={styles.headerText}>EDIT</Text>
                </Button>
            </View >
        )
    }

}
EditButton.contextType = SettingsContext;

