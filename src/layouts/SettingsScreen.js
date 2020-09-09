import {
  Body, Container, Content, Form, Header,
  Item, Label, Right, Left, Button,
  Separator, Text, Title
} from "native-base";
import React from "react";
import { TextInput } from 'react-native';
import Icon from 'react-native-ionicons';
import { SettingsContext } from '../../SettingsContext';


export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() =>
              this.props.navigation.navigate('Home')
            }>
              <Icon name='ios-arrow-back' color='#ffffff' />
            </Button>
          </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='ios-information-circle-outline' color='#ffffff' onPress={() =>
                this.props.navigation.navigate('About')
              } />
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            <Separator>
              <Text>BUTTON 1</Text>
            </Separator>
            <Item fixedLabel>
              <Label>Title</Label>
              <TextInput
                value={this.context.button_1.textValue}
                onChangeText={(text) => {
                  var button_1 = { ...this.context.button_1 }
                  button_1.textValue = text;
                  this.context.updateButton_1(button_1);
                }}
              />
            </Item>
            <Item fixedLabel>
              <Label>Speak Text</Label>
              <TextInput
                value={this.context.button_1.speakText}
                onChangeText={(text) => {
                  var button_1 = { ...this.context.button_1 }
                  button_1.speakText = text;
                  this.context.updateButton_1(button_1);
                }}
              />
            </Item>
            <Separator>
              <Text>BUTTON 2</Text>
            </Separator>
            <Item fixedLabel>
              <Label>Title</Label>
              <TextInput
                value={this.context.button_2.textValue}
                onChangeText={(button2Text) => {
                  var button_2 = { ...this.context.button_2 }
                  button_2.textValue = button2Text;
                  this.context.updateButton_2(button_2);
                }}
              />
            </Item>
            <Item fixedLabel>
              <Label>Speak Text</Label>
              <TextInput
                value={this.context.button_2.speakText}
                onChangeText={(text) => {
                  var button_2 = { ...this.context.button_2 }
                  button_2.speakText = text;
                  this.context.updateButton_2(button_2);
                }}
              />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
SettingsScreen.contextType = SettingsContext;