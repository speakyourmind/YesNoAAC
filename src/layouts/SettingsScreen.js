import {
  Body, Container, Content, Form, Header,
  Item, Label, Right,
  Separator, Text, Title
} from "native-base";
import React from "react";
import { TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const BUTTON_1 = 'button 1 text'

export default class SettingsScreen extends React.Component {
  state = {
    button1Text: ''
  }
  componentDidMount() {
    this.loadAsyncData();
  }

  loadAsyncData = async () => {
    try {
      const button1Text = await AsyncStorage.getItem(BUTTON_1)
      if (button1Text !== null) {
        this.setState({ button1Text: JSON.parse(button1Text) });
      }
    } catch (e) {
      console.log(e)
    }
  }

  storeButton1Text = async (key, button1Text) => {
    try {
      await AsyncStorage.setItem(BUTTON_1, JSON.stringify(button1Text))
      // this.setState({ button1Text });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Container>
      
        <Content>
          <Form>
            <Separator>
              <Text>BUTTON 1</Text>
            </Separator>
            <Item fixedLabel>
              <Label>Title</Label>
              <TextInput
                value={this.state.button1Text}
                onChangeText={(button1Text) => {
                  this.setState({ button1Text });
                  this.storeButton1Text(BUTTON_1, button1Text);
                  console.log(button1Text)
                }}
              />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}