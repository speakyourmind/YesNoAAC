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
import AboutScreen from './src/layouts/AboutScreen.js';
import HomeScreen from './src/layouts/HomeScreen.js';
import SettingsScreen from './src/layouts/SettingsScreen.js';

const BUTTON_1_KEY = 'button_1'
const BUTTON_2_KEY = 'button_2'
const DIRECTION_KEY = 'direction'
const MARGIN_KEY = 'margin'

const BUTTON_1_DEFAULT = {
  key: 'button_1',
  textValue: 'YES',
  speakText: 'YES',
  fontColor: '#ffffff',
  backgroundColor: '#1F894B',
  fontSize: 100,
  inEdit: false,
};
const BUTTON_2_DEFAULT = {
  key: 'button_2',
  textValue: 'NO',
  speakText: 'NO',
  fontColor: '#ffffff',
  backgroundColor: '#c0392b',
  fontSize: 100,
  inEdit: false,
};

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    editMode: false,
    isReady: false,
    direction: 'row',
    margin: 10,
    button_1: {
      key: 'button_1',
      textValue: 'YES',
      speakText: 'YES',
      fontColor: '#ffffff',
      backgroundColor: '#1F894B',
      fontSize: 100,
      inEdit: false,
    },
    button_2: {
      key: 'button_2',
      textValue: 'NO',
      speakText: 'NO',
      fontColor: '#ffffff',
      backgroundColor: '#c0392b',
      fontSize: 100,
      inEdit: false,
    },
  };

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    this.loadAsyncData();
    this.setState({ isReady: true });

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
      const button1 = await AsyncStorage.getItem(BUTTON_1_KEY)
      if (button1 !== null) {
        this.setState({ button_1: JSON.parse(button1) });
      }
      const button2 = await AsyncStorage.getItem(BUTTON_2_KEY)
      if (button2 !== null) {
        this.setState({ button_2: JSON.parse(button2) });
      }
      SplashScreen.hide();
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
    this.storeAsync(DIRECTION_KEY, direction_data);
  }
  updateMargin = (margin_data) => {
    this.setState({ margin: margin_data });
    this.storeAsync(MARGIN_KEY, margin_data);
  }
  updateButton = (button_1_data, button_2_data) => {
    this.setState(prevState => ({
      button_1: button_1_data,
      button_2: button_2_data
    }));
    this.storeAsync(BUTTON_1_KEY, button_1_data);
    this.storeAsync(BUTTON_2_KEY, button_2_data);
  }

  updateComponent = (key, state, data) => {
    // TODO
    if (key === BUTTON_1_KEY) {
      this.setState({ button_1: data });
    }
    if (key === BUTTON_2_KEY) {
      this.setState({ button_2: data });
    }
    this.storeAsync(key, data);

  }

  clearStorage = async () => {
    try {
      await AsyncStorage.clear()
    } catch (e) {
      console.log(e);
    }
  }
  restoreDefaults = () => {
    this.updateDirection('row');
    this.updateMargin(10);
    this.updateButton(BUTTON_1_DEFAULT, BUTTON_2_DEFAULT);
  }

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  }

  render() {
    return (
      <SettingsContext.Provider value={{
        editMode: this.state.editMode,
        toggleEditMode: this.toggleEditMode,

        button_1: this.state.button_1,
        button_2: this.state.button_2,
        updateButton: this.updateButton,

        direction: this.state.direction,
        updateDirection: this.updateDirection,

        margin: this.state.margin,
        updateMargin: this.updateMargin,

        restoreDefaults: this.restoreDefaults,

        updateComponent: this.updateComponent,
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
