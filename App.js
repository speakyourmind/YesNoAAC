/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleProvider } from "native-base";
import React from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';
import { SettingsContext } from './SettingsContext';
import HomeScreen from './src/layouts/HomeScreen.js';
import SettingsScreen from './src/layouts/SettingsScreen.js';
import AboutScreen from './src/layouts/AboutScreen.js';

const BUTTON_1_KEY = 'button_1'
const BUTTON_2_KEY = 'button_2'
const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      button_1: {
        key: 'button_1',
        textValue: 'YES',
        speakText: 'YES',
        backgroundColor: '#2ecc71'
      },
      button_2: {
        key: 'button_2',
        textValue: 'NO',
        speakText: 'NO',
        backgroundColor: '#e74c3c'
      }
    };
  }

  async componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
    this.loadAsyncData();
    this.setState({ isReady: true });
  }

  loadAsyncData = async () => {
    try {
      const button1 = await AsyncStorage.getItem(BUTTON_1_KEY)
      if (button1 !== null) {
        this.setState({ button_1: JSON.parse(button1) });
        console.log(button1);
      }
      const button2 = await AsyncStorage.getItem(BUTTON_2_KEY)
      if (button2 !== null) {
        this.setState({ button_2: JSON.parse(button2) });
        console.log(button2);
      }
    } catch (e) {
      console.log(e)
    }
  }

  storeButton1 = async (key, button1) => {
    try {
      await AsyncStorage.setItem(BUTTON_1_KEY, JSON.stringify(button1))
      // this.setState({ button1});
    } catch (e) {
      console.log(e);
    }
  }
  storeButton2 = async (key, button2) => {
    try {
      await AsyncStorage.setItem(BUTTON_2_KEY, JSON.stringify(button2))
      // this.setState({ button2});
    } catch (e) {
      console.log(e);
    }
  }

  updateButton_1 = (button_1_data) => {
    // Finally, update the app state
    this.setState({ button_1: button_1_data });
    this.storeButton1(BUTTON_1_KEY, this.state.button_1);
  }
  updateButton_2 = (button_2_data) => {
    // Finally, update the app state
    this.setState({ button_2: button_2_data });
    this.storeButton1(BUTTON_2_KEY, this.state.button_2);
  }
  render() {
    return (
      <SettingsContext.Provider value={{
        button_1: this.state.button_1,
        updateButton_1: this.updateButton_1,
        button_2: this.state.button_2,
        updateButton_2: this.updateButton_2
      }}>
        <StyleProvider style={getTheme(commonColor)}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
              animationEnabled: false,
              headerShown: false
            }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Settings" component={SettingsScreen} />
              <Stack.Screen name="About" component={AboutScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </StyleProvider>
      </SettingsContext.Provider>
    );
  }
}

