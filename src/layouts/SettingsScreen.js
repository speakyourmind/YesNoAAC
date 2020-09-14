import {
  Body, Container, Content, Form, Header,
  Item, Label, Right, Left, Button,
  Separator, Text, Title, Picker, List, ListItem, View, Tab, Tabs
} from "native-base";
import React from "react";
import { TextInput, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-ionicons';
import { SettingsContext } from '../../SettingsContext';
import SuperButton from '../components/SuperButton.js';
import Slider from '@react-native-community/slider';

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);

  }
  restoreDefaultsAlert = () =>
    Alert.alert(
      "Restore Home Screen",
      "Are you sure you would like to erase all changes?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            this.context.restoreDefaults();
            this.props.navigation.navigate('Home');
          }
        }
      ],
      { cancelable: false }
    );

  render() {
    return (
      <Container>
        <Header >
          <Left style={{ flex: 1 }}>
            <Button transparent
              accessibilityLabel="Go back"
              accessibilityHint="Navigates to the home screen."
              onPress={() =>
                this.props.navigation.navigate('Home')
              }>
              <Icon name='ios-arrow-back' color='#ffffff' />

              <Title style={{ paddingLeft: 40 }}>Settings</Title>
            </Button>
          </Left>
          <Right style={{ flex: 1 }}>
            <Button transparent>
              <Icon name='ios-information-circle-outline' color='#ffffff' onPress={() =>
                this.props.navigation.navigate('About')
              } />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            <ListItem>
              <Body>
                <Text style={styles.titleText}>Button Direction</Text>
                <View style={styles.pickerView}>
                  <Picker
                    note
                    style={{ color: '#000', placeholderTextColor: '#000' }}
                    mode="dropdown"
                    selectedValue={this.context.direction}
                    onValueChange={(text) => {
                      this.context.updateDirection(text);
                    }}
                  >
                    <Picker.Item label="Row Wise" value="row" />
                    <Picker.Item label="Column Wise" value="col" />
                  </Picker>
                </View>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Text style={styles.titleText}>Button Gap</Text>
                <Slider
                  style={{ width: 325, flex: 1, marginTop: 15, marginBottom: 5 }}
                  minimumValue={0}
                  maximumValue={100}
                  minimumTrackTintColor="#277CB4"
                  maximumTrackTintColor="#000000"
                  thumbTintColor="#277CB4"
                  value={this.context.margin}
                  onValueChange={(value) => {
                    this.context.updateMargin(value);
                  }}
                />
              </Body>
            </ListItem>
                <ListItem>
                  <Body>
                    <Text style={styles.titleText}>Font Size</Text>
                    <Slider
                      style={{ width: 325, flex: 1, marginTop: 15, marginBottom: 5 }}
                      minimumValue={10}
                      maximumValue={200}
                      step={10}
                      minimumTrackTintColor="#277CB4"
                      maximumTrackTintColor="#000000"
                      thumbTintColor="#277CB4"
                      value={this.context.fontSize}
                      onSlidingComplete={(value) => {
                        console.log("Font Size Slider: "+value);
                        this.context.updateFontSize(value);
                      }}
                    />
                  </Body>
                </ListItem>
            <ListItem>
              <Body>
                <Button full info onPress={() =>
                  this.restoreDefaultsAlert()}>
                  <Text>RESTORE DEFAULTS</Text>
                </Button>
              </Body>
            </ListItem>
          </List>

        </Content>
      </Container >
    );
  }
}
const styles = StyleSheet.create({

  pickerView: {
    width: 300,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    borderColor: '#000000',
    borderWidth: 2,
    alignSelf: 'stretch'
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000'
  },
});
SettingsScreen.contextType = SettingsContext;