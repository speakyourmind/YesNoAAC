import {
  Body, Container, Content, Form, Header,
  Item, Label, Right, Left, Button,
  Separator, Text, Title, Picker, List, ListItem, View
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
          <List>
            <ListItem>
              <Body>
                <Label>Button Direction</Label>
                <View
                  style={{
                    marginTop: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    borderColor: '#000000',
                    borderWidth: 2,
                    alignSelf: 'stretch'
                  }}>
                  <Picker
                    note
                    style={{ color: '#000', placeholderTextColor: '#000' }}
                    mode="dropdown"
                    selectedValue={this.context.direction}
                    onValueChange={(text) => {
                      this.context.direction = text;
                      this.context.updateDirection( this.context.direction);

                    }}
                  >
                    <Picker.Item label="Row Wise" value="row" />
                    <Picker.Item label="Column Wise" value="col" />
                  </Picker>
                </View>
              </Body>
            </ListItem>
            <Separator style={{ backgroundColor: '#2e343b', marginTop: 10 }} >
              <Text color='#ffffff' style={{ fontSize: 14, color: '#fff' }}>BUTTON 1</Text>
            </Separator>

            <ListItem>
              <Body>
                <Label>Title</Label>
                <TextInput
                  style={{
                    marginTop: 10,
                    marginLeft: 5,
                    marginRight: 5
                  }}
                  value={this.context.button_1.textValue}
                  borderWidth={2}
                  onChangeText={(text) => {
                    var button_1 = { ...this.context.button_1 }
                    button_1.textValue = text;
                    this.context.updateButton_1( button_1);
                  }}
                />
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Label>Speak Text</Label>
                <TextInput
                  style={{
                    marginTop: 10,
                    marginLeft: 5,
                    marginRight: 5
                  }}
                  value={this.context.button_1.speakText}
                  borderWidth={2}
                  onChangeText={(text) => {
                    var button_1 = { ...this.context.button_1 }
                    button_1.speakText = text;
                    this.context.updateButton_1(button_1);
                  }}
                />
              </Body>
            </ListItem>

            <ListItem>
              <Body>

                <Label>Text Color</Label>
                <View
                  style={{
                    marginTop: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    borderColor: '#000000',
                    borderWidth: 2,
                    alignSelf: 'stretch'
                  }}>
                  <Picker
                    note
                    style={{ color: '#000', placeholderTextColor: '#000' }}
                    mode="dropdown"
                    selectedValue={this.context.button_1.fontColor}
                    onValueChange={(text) => {
                      var button_1 = { ...this.context.button_1 }
                      button_1.fontColor = text;
                      this.context.updateButton_1(button_1);
                    }}
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
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Label>Background Color</Label>
                <View
                  style={{
                    marginTop: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    borderColor: '#000000',
                    borderWidth: 2,
                    alignSelf: 'stretch'
                  }}>
                  <Picker
                    note
                    style={{ color: '#000', placeholderTextColor: '#000' }}
                    mode="dropdown"
                    selectedValue={this.context.button_1.backgroundColor}
                    onValueChange={(text) => {
                      var button_1 = { ...this.context.button_1 }
                      button_1.backgroundColor = text;
                      this.context.updateButton_1(button_1);
                    }}
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
              </Body>
            </ListItem>
            <Separator style={{ backgroundColor: '#2e343b', marginTop: 10 }} >
              <Text color='#ffffff' style={{ fontSize: 14, color: '#fff' }}>BUTTON 2</Text>
            </Separator>

            <ListItem>
              <Body>
                <Label>Title</Label>
                <TextInput
                  style={{
                    marginTop: 10,
                    marginLeft: 5,
                    marginRight: 5
                  }}
                  value={this.context.button_2.textValue}
                  borderWidth={2}
                  onChangeText={(text) => {
                    var button_2 = { ...this.context.button_2 }
                    button_2.textValue = text;
                    this.context.updateButton_2(BUTTON_2_KEY, button_2);
                  }}
                />
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Label>Speak Text</Label>
                <TextInput
                  style={{
                    marginTop: 10,
                    marginLeft: 5,
                    marginRight: 5
                  }}
                  value={this.context.button_2.speakText}
                  borderWidth={2}
                  onChangeText={(text) => {
                    var button_2 = { ...this.context.button_2 }
                    button_2.speakText = text;
                    this.context.updateButton_2(button_2);
                  }}
                />
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Label>Text Color</Label>
                <View
                  style={{
                    marginTop: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    borderColor: '#000000',
                    borderWidth: 2,
                    alignSelf: 'stretch'
                  }}>
                  <Picker
                    note
                    mode="dropdown"
                    style={{ color: '#000', placeholderTextColor: '#000' }}
                    selectedValue={this.context.button_2.fontColor}
                    onValueChange={(text) => {
                      var button_2 = { ...this.context.button_2 }
                      button_2.fontColor = text;
                      this.context.updateButton_2(button_2);
                    }}
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
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Label>Background Color</Label>
                <View
                  style={{
                    marginTop: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    borderColor: '#000000',
                    borderWidth: 2,
                    alignSelf: 'stretch'
                  }}>
                  <Picker
                    note
                    mode="dropdown"
                    style={{ color: '#000', placeholderTextColor: '#000' }}
                    selectedValue={this.context.button_2.backgroundColor}
                    onValueChange={(text) => {
                      var button_2 = { ...this.context.button_2 }
                      button_2.backgroundColor = text;
                      this.context.updateButton_2(button_2);
                    }}
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
              </Body>
            </ListItem>

          </List>

        </Content>
      </Container>
    );
  }
}
SettingsScreen.contextType = SettingsContext;