/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleProvider, Tab, Tabs, Header, Left, Body, Right, Container, Button, Title, TabHeading, Text } from "native-base";
import React from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';
import AboutScreen from './src/layouts/AboutScreen.js';
import HomeScreen from './src/layouts/HomeScreen.js';
import SettingsScreen from './src/layouts/SettingsScreen.js';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      button_1: {
        key: 'button_1',
        textValue: 'Yes',
        backgroundColor: '#2ecc71'
      },
      button_2: {
        key: 'button_2',
        textValue: 'No',
        backgroundColor: '#e74c3c'
      }
    };
  }

  async componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
    this.setState({ isReady: true });
  }

  render() {
    return (
      <Container>
        <Tabs tabBarUnderlineStyle={{ borderBottomWidth:4 }}>
          <Tab heading={<TabHeading style={{ backgroundColor: '#2c3e50' }}>
            <Text style={{ color: '#ffffff' }}>Home</Text>
          </TabHeading>}>
            <HomeScreen button_1={this.state.button_1} button_2={this.state.button_2} />
          </Tab>
          <Tab
            heading={<TabHeading style={{ backgroundColor: '#2c3e50' }}>
              <Text style={{ color: '#ffffff' }}>Settings</Text>
            </TabHeading>}>
            <SettingsScreen button_1={this.state.button_1} button_2={this.state.button_2} />
          </Tab>
          <Tab
            heading={<TabHeading style={{ backgroundColor: '#2c3e50' }}>
              <Text style={{ color: '#ffffff' }}>About</Text>
            </TabHeading>}><AboutScreen />
          </Tab>
        </Tabs>
        

      </Container>
    );
  }
}

