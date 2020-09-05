/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleProvider } from "native-base";
import React from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-ionicons';
import SplashScreen from 'react-native-splash-screen';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';
import AboutScreen from './src/layouts/AboutScreen.js';
import HomeScreen from './src/layouts/HomeScreen.js';
import SettingsScreen from './src/layouts/SettingsScreen.js';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
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
      <StyleProvider style={getTheme(commonColor)}>

        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = "md-home";
                } else if (route.name === 'Settings') {
                  iconName = "md-settings";
                } else if (route.name === 'About') {
                  iconName = "md-information-circle";
                }

                // You can return any component that you like here!
                return <Icon name={iconName} color="#ffffff" />;
              },
            })}
            tabBarOptions={{
              indicatorStyle: {
                height: null,
                top: 0,
                backgroundColor: 'blue',
                borderRadius:10
            },
              activeBackgroundColor: '#415b76',
              style: {
                backgroundColor: '#2c3e50',
                borderTopWidth: 1,
                borderTopColor: '#D3D3D3'
              },
              showLabel: false,

            }}
          >
            <Tab.Screen name="Home" component={HomeScreen} accessibilityLabel="Home Screen"/>
            <Tab.Screen name="Settings" component={SettingsScreen} accessibilityLabel="Settings Screen"/>
            <Tab.Screen name="About" component={AboutScreen} accessibilityLabel="About Screen"/>
          </Tab.Navigator>
        </NavigationContainer>
      </StyleProvider >
    );
  }
}

