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
const DIRECTION_KEY = 'direction'
const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      direction: 'row',
      button_1: {
        key: 'button_1',
        textValue: 'YES',
        speakText: 'YES',
        fontColor: '#ffffff',
        backgroundColor: '#1F894B',
        fontSize: 100,
      },
      button_2: {
        key: 'button_2',
        textValue: 'NO',
        speakText: 'NO',
        fontColor: '#ffffff',
        backgroundColor: '#c0392b',
        fontSize: 100,
      }
    };
  }

  async componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    this.loadAsyncData();
    this.setState({ isReady: true });
    SplashScreen.hide();
    
  }

  loadAsyncData = async () => {
    try {
      const direction = await AsyncStorage.getItem(DIRECTION_KEY)
      if (direction !== null) {
        this.setState({ direction: JSON.parse(direction) });
      }
      const button1 = await AsyncStorage.getItem(BUTTON_1_KEY)
      if (button1 !== null) {
        this.setState({ button_1: JSON.parse(button1) });
      }
      const button2 = await AsyncStorage.getItem(BUTTON_2_KEY)
      if (button2 !== null) {
        this.setState({ button_2: JSON.parse(button2) });
      }
    } catch (e) {
      console.log(e)
    }
  }

  storeAsync = async (key, button) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(button))
      // this.setState({ button1});
    } catch (e) {
      console.log(e);
    }
  }

  updateDirection = (direction_data) => {
    this.setState({ direction: direction_data });
    this.storeAsync(DIRECTION_KEY, this.state.direction);
  }
  updateButton_1 = (button_1_data) => {
    this.setState({ button_1: button_1_data });
    this.storeAsync(BUTTON_1_KEY, this.state.button_1);
  }
  updateButton_2 = (button_2_data) => {
    this.setState({ button_2: button_2_data });
    this.storeAsync(BUTTON_2_KEY, this.state.button_2);
  }

  updateButton = (key, button_state, button_data) => {
    this.setState({ button_state: button_data });
    this.storeAsync(key, button_state);

  }

  render() {
    return (
      <SettingsContext.Provider value={{
        button_1: this.state.button_1,
        updateButton_1: this.updateButton_1,
        button_2: this.state.button_2,
        updateButton_2: this.updateButton_2,
        direction: this.state.direction,
        updateDirection: this.updateDirection,
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

