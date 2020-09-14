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
const MARGIN_KEY = 'margin'
const FONT_SIZE_KEY = 'fontSize'
const FONT_SIZE_DEFAULT=100
const BUTTON_1_DEFAULT = {
  key: 'button_1',
  textValue: 'YES',
  speakText: 'YES',
  fontColor: '#ffffff',
  backgroundColor: '#1F894B'
};
const BUTTON_2_DEFAULT = {
  key: 'button_2',
  textValue: 'NO',
  speakText: 'NO',
  fontColor: '#ffffff',
  backgroundColor: '#c0392b'
};

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      direction: 'row',
      margin:10,
      button_1: {
        key: 'button_1',
        textValue: 'YES',
        speakText: 'YES',
        fontColor: '#ffffff',
        backgroundColor: '#1F894B',
      },
      button_2: {
        key: 'button_2',
        textValue: 'NO',
        speakText: 'NO',
        fontColor: '#ffffff',
        backgroundColor: '#c0392b',
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
      const margin = await AsyncStorage.getItem(MARGIN_KEY)
      if (margin !== null) {
        this.setState({ margin: JSON.parse(margin) });
      }
      const fontSize = await AsyncStorage.getItem(FONT_SIZE_KEY)
      if (fontSize !== null) {
        this.setState({ fontSize: JSON.parse(fontSize) });
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
  updateMargin = (margin_data) => {
    this.setState({ margin: margin_data });
    this.storeAsync(MARGIN_KEY, this.state.margin);
  }
  updateFontSize = (fontSize_data) => {
    this.setState({ fontSize: fontSize_data });
    this.storeAsync(FONT_SIZE_KEY, this.state.fontSize);
  }
  updateButton = (button_1_data, button_2_data) => {
    this.setState({ button_1: button_1_data });
    this.setState({ button_2: button_2_data });
    this.storeAsync(BUTTON_1_KEY, this.state.button_1);
    this.storeAsync(BUTTON_2_KEY, this.state.button_2);

  }

  restoreDefaults = () => {
    this.updateDirection('row');
    this.updateMargin(10);
    this.updateFontSize(FONT_SIZE_DEFAULT);
    this.updateButton(BUTTON_1_DEFAULT, BUTTON_2_DEFAULT);
  }

  render() {
    return (
      <SettingsContext.Provider value={{
        button_1: this.state.button_1,
        button_2: this.state.button_2,
        updateButton: this.updateButton,
        direction: this.state.direction,
        updateDirection: this.updateDirection,
        margin: this.state.margin,
        updateMargin: this.updateMargin,
        fontSize: this.state.fontSize,
        updateFontSize: this.updateFontSize,
        restoreDefaults: this.restoreDefaults,
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
