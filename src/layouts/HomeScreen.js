import { Container } from "native-base";
import React from "react";
import { Grid, Row } from 'react-native-easy-grid';
import SuperButton from '../components/SuperButton.js';



export default class HomeScreen extends React.Component {
  
static button_1 = {
  key:'button_1',
  textValue: 'Yes',
  backgroundColor: '#2ecc71'
}
static button_2 = {
  key:'button_2',
  textValue: 'No',
  backgroundColor: '#e74c3c'
}
 static buttons = [HomeScreen.button_1, HomeScreen.button_2]
  constructor() {
    super();
    this.state = {
      editMode: false
    }
  }

  render() {
    return (
      <Container>
        <Grid>
          {HomeScreen.buttons.map((button,key) => {
            return (
              <Row key={key}>
                <SuperButton key={button.key}
                  textValue={button.textValue}
                  speakText={button.textValue}
                  backgroundColor={button.backgroundColor}
                  fontSize={100} 
                  editMode={this.state.editMode} />
              </Row>
            );
          })}

        </Grid>
      </Container>
    );
  }
}