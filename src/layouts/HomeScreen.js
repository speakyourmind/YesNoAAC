import { Container } from "native-base";
import React from "react";
import { Grid, Row } from 'react-native-easy-grid';
import SuperButton from '../components/SuperButton.js';

export default class HomeScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      editMode: false,
      
    }
  }

  render() {
    return (
      <Container>
        <Grid>
          <Row>
            <SuperButton key={this.props.button_1.key}
              textValue={this.props.button_1.textValue}
              speakText={this.props.button_1.textValue}
              backgroundColor={this.props.button_1.backgroundColor}
              fontSize={100}
              editMode={this.props.editMode} />
          </Row>
          <Row>
            <SuperButton key={this.props.button_2.key}
              textValue={this.props.button_2.textValue}
              speakText={this.props.button_2.textValue}
              backgroundColor={this.props.button_2.backgroundColor}
              fontSize={100}
              editMode={this.props.editMode} />
          </Row>

        </Grid>
      </Container>
    );
  }
}