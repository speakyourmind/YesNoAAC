import {
  Body, Button, Container,
  Header,
  Left, Right, Text, Title
} from "native-base";
import React from "react";
import { Col, Grid, Row } from 'react-native-easy-grid';
import Icon from 'react-native-ionicons';
import { SettingsContext } from '../../SettingsContext';
import SuperButton from '../components/SuperButton.js';
import EditButton from '../components/EditButton.js';
import { styles } from '../styles/styles';

export default class HomeScreen extends React.Component {

  constructor() {
    super();

  }
  render() {
    var button_1 = { ...this.context.button_1 };
    var button_2 = { ...this.context.button_2 };
    const button1 = <SuperButton asyncKey="Button 1" buttonData={this.context.button_1} buttonWithProps={button_1} />;
    const button2 = <SuperButton asyncKey="Button 2" buttonData={this.context.button_2} buttonWithProps={button_2} />

    let grid;
    if (this.context.direction === 'row') {
      grid =
        <Grid>
          <Row>{button1}</Row>
          <Row>{button2}</Row>
        </Grid>;
    } else {
      grid =
        <Grid>
          <Col>{button1}</Col>
          <Col>{button2}</Col>
        </Grid>;
    }
    return (
      <Container>
        {!this.context.editMode &&
          <Header>
            <Left>
              <Button transparent onPress={() =>
                this.props.navigation.navigate('Settings')
              }>
                <Icon name='menu' color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Title></Title>
            </Body>
            <Right>
              <EditButton></EditButton>
              <Button transparent>
                <Icon name='ios-information-circle-outline' color='#ffffff' onPress={() =>
                  this.props.navigation.navigate('About')
                } />
              </Button>
            </Right>
          </Header>
        }
        {this.context.editMode &&
          <Header style={styles.editHeader} >
            <Left>
            </Left>
            <Body>
              <Title>Editing Screen</Title>
            </Body>
            <Right>
              <Button transparent onPress={() =>
                this.context.toggleEditMode()
              }>
                <Text>DONE</Text>
              </Button>
            </Right>
          </Header>
        }
        {grid}
      </Container>
    );
  }
}
HomeScreen.contextType = SettingsContext;