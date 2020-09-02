import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";

import { Col, Row, Grid } from 'react-native-easy-grid'
import SuperButton from '../components/SuperButton.js';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Grid>
        <Row>
          <SuperButton textValue='Yes' speakText='Yes' backgroundColor='#2ecc71' fontSize={100} />
        </Row>
        <Row>
          <SuperButton textValue='No' speakText='No' backgroundColor='#e74c3c' fontSize={100} />
        </Row> 
      </Grid>
      </Container>
    );
  }
}