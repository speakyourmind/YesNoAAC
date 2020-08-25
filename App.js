/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {
  View,
  Container,
  Button,
  Text
} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid'
import SuperButton from './SuperButton';

const App: () => React$Node = () => {
  return (
    <Container>
      <Grid >
        <Row>
          <SuperButton textValue='Yes' backgroundColor='#2ecc71' fontSize={100} />
        </Row>
        <Row>
          <SuperButton textValue='No' backgroundColor='#e74c3c' fontSize={100} />
        </Row>
      </Grid>
    </Container>
  );
};

export default App;
