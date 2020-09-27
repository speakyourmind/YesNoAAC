import { Body, Button, Container, Content, Header, Left, List, ListItem, Right, Text, Title } from "native-base";
import React from "react";
import Icon from 'react-native-ionicons';
import OpenURLButton from '../components/OpenURLButton.js';
import { styles } from '../styles/styles';

const visitUsURL = "https://speakyourmindfoundation.org/";
const getHelpURL = "https://speakyourmindfoundation.org/gethelp.html";

export default class AboutScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent
              accessibilityLabel="Go back"
              accessibilityHint="Navigates to the previous screen."
              onPress={() =>
                this.props.navigation.goBack()
              }>
              <Icon name='ios-arrow-back' color='#ffffff' />

            </Button>

          </Left>
          <Body>
            <Title>About Us</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem>
              <Body style={{ flex: 1 }}>
                <Text style={styles.titleText}>SpeakYourMind Foundation</Text>
                <Text>We are a 501(c)(3) nonprofit organization spun out of the BrainGate Lab at Brown University and Massachusetts General Hospital.
                </Text>
                <Text>We create, distribute, and support assistive communication technologies for individuals who are unable to effectively communicate due to neurological injury and disease.
                </Text>
              </Body>
            </ListItem>

            <ListItem>
              <Body>
                <Text style={styles.titleText}>Learn More</Text>
                <Text>Visit our website to find out more about who we are and who we help.</Text>
              </Body>
              <Right>
                <OpenURLButton url={visitUsURL} buttonText='VISIT US'>
                </OpenURLButton>
              </Right>
            </ListItem>
            <ListItem>
              <Body>
                <Text style={styles.titleText}>Need something custom?</Text>
                <Text>Fill out our questionnaire and we'll get in touch.</Text>
              </Body>
              <Right>
                <OpenURLButton url={getHelpURL} buttonText='GET HELP'>
                </OpenURLButton>
              </Right>
            </ListItem>
            <ListItem>
              <Body>
                <Text style={styles.titleText}>Version</Text>
                <Text numberOfLines={1}>v0.0.4</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Text style={styles.titleText}>Contact</Text>
                <Text numberOfLines={1}>support@speakyourmindfoundation.org</Text>
              </Body>
            </ListItem>

            <ListItem >
              <Body>
                <Text style={styles.titleText}>Disclaimer</Text>
                <Text>Systems (hardware and software) provided by the SpeakYourMind Foundation are not medical devices and have not been approved for use by the FDA; therefore, these systems shall not be used or depended on to provide medical treatment or to make any form of healthcare decisions. Other means of communication must be used for any medical related purpose.</Text>
              </Body>

            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}