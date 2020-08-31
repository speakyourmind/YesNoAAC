/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  Dimensions
} from 'react-native';
import {
  View,
  Container,
  Header,
  Button,
  Text,
  StyleProvider
} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid'
import SuperButton from './SuperButton';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';

function HomeScreen() {
  return (
    <Container>
      <Grid>
        <Row>
          <SuperButton textValue='Yes' backgroundColor='#2ecc71' fontSize={100} />
        </Row>
        <Row>
          <SuperButton textValue='No' backgroundColor='#e74c3c' fontSize={100} />
        </Row>
      </Grid>
    </Container>);
}
function SettingsScreen() {
  return (
    <Container>
      <Header />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    </Container>
  );
}
function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <StyleProvider style={getTheme(material)}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? "md-home" : "md-home";
              } else if (route.name === 'Settings') {
                iconName = focused ? "md-settings" : "md-settings";
              } else if (route.name === 'About') {
                iconName = focused ? "md-information-circle" : "md-information-circle";
              }

              // You can return any component that you like here!
              return <Icon name={iconName} color="#ffffff" />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            labelStyle: {
              fontSize: 12,
            },
            style: {
              backgroundColor: '#2c3e50',
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{ tabBarLabel: 'Home' }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ tabBarLabel: 'Settings' }}
          />
          <Tab.Screen
            name="About"
            component={AboutScreen}
            options={{ tabBarLabel: 'About' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </StyleProvider>
  );
}
