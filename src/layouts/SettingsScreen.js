import {
  Body,
  Button, Container, Content, Header,
  Left,
  List, ListItem, Picker, Right,
  Text, Title, View
} from "native-base";
import React from "react";
import { Alert } from 'react-native';
import Icon from 'react-native-ionicons';
import { SettingsContext } from '../../SettingsContext';
import SettingsSlider from '../components/SettingsSlider.js';
import { styles } from '../styles/styles';

export default class SettingsScreen extends React.Component {

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
          <Left>
            <Button transparent
              accessibilityLabel="Go back"
              accessibilityHint="Navigates to the home screen."
              style={{minWidth:50,minHeight:50}}
              onPress={() =>
                this.props.navigation.navigate('Home')
              }>
              <Icon name='ios-arrow-back' color='#ffffff' />

            </Button>

          </Left>
          <Body >
            <Title>Settings</Title>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button transparent
              style={{ minWidth: 50, minHeight: 50 }}>
              <Icon name='ios-information-circle-outline' color='#ffffff' onPress={() =>
                this.props.navigation.navigate('About')
              } />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            <ListItem style={styles.listItem}>
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
            <ListItem style={styles.listItem}>
              <Body>
                <Text style={styles.titleText}>Button Gap</Text>
                <SettingsSlider
                  value={this.context.margin}
                  minimumValue={0}
                  maximumValue={200}
                  step={5}
                  onSlidingComplete={(value) => {
                    this.context.updateMargin(value);
                  }}
                />
              </Body>
            </ListItem>
            
            <ListItem last>
              <Body>
                <Text style={styles.titleText}>Disclaimer</Text>
                <Text>Systems (hardware and software) provided by the SpeakYourMind Foundation are not medical devices and have not been approved for use by the FDA; therefore, these systems shall not be used or depended on to provide medical treatment or to make any form of healthcare decisions. Other means of communication must be used for any medical related purpose.</Text>
              </Body>

            </ListItem>
          </List>

        </Content>
        <Button full info
          style={{ minWidth: 50, minHeight: 50, }} onPress={() =>
            this.restoreDefaultsAlert()}>
          <Text>RESTORE DEFAULTS</Text>
        </Button>
      </Container >
    );
  }
}
SettingsScreen.contextType = SettingsContext;