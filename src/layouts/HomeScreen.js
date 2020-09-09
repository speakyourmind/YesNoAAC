import { Container, Header, Left, Body, Right, Button, Title } from "native-base";
import React from "react";
import { Grid, Row,Col} from 'react-native-easy-grid';
import SuperButton from '../components/SuperButton.js';
import { SettingsContext } from '../../SettingsContext';
import Icon from 'react-native-ionicons';

export default class HomeScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      editMode: false
    }
  }

  render() {
    let grid;
    if (this.context.direction==='row') {
      grid =
        <Grid>
          <Row>
            <SuperButton key={this.context.button_1.key}
              textValue={this.context.button_1.textValue}
              speakText={this.context.button_1.speakText}
              fontColor={this.context.button_1.fontColor}
              backgroundColor={this.context.button_1.backgroundColor}
              fontSize={100} />
          </Row>
          <Row>
            <SuperButton key={this.context.button_2.key}
              textValue={this.context.button_2.textValue}
              speakText={this.context.button_2.speakText}
              fontColor={this.context.button_2.fontColor}
              backgroundColor={this.context.button_2.backgroundColor}
              fontSize={100} />
          </Row>

        </Grid>;
    } else {
      grid = <Grid>
        <Col>
          <SuperButton key={this.context.button_1.key}
            textValue={this.context.button_1.textValue}
            speakText={this.context.button_1.speakText}
            fontColor={this.context.button_1.fontColor}
            backgroundColor={this.context.button_1.backgroundColor}
            fontSize={100} />
        </Col>
        <Col>
          <SuperButton key={this.context.button_2.key}
            textValue={this.context.button_2.textValue}
            speakText={this.context.button_2.speakText}
            fontColor={this.context.button_2.fontColor}
            backgroundColor={this.context.button_2.backgroundColor}
            fontSize={100} />
        </Col>

      </Grid>;
    }
    return (
      <Container>
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
            <Button transparent>
              <Icon name='ios-information-circle-outline' color='#ffffff' onPress={() =>
                this.props.navigation.navigate('About')
              } />
            </Button>
          </Right>
        </Header>
        {grid}
      </Container>
    );
  }
}
HomeScreen.contextType = SettingsContext;