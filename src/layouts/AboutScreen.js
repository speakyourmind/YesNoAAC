import { Body, Card, CardItem, Container, Content, H1, Label, List, ListItem, Right, Text, Header, Left, Button, Title } from "native-base";
import React from "react";
import { Image } from 'react-native';
import OpenURLButton from '../components/OpenURLButton.js';
import Icon from 'react-native-ionicons';
import {StyleSheet} from "react-native";

const supportedURL = "https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=QY6S73LW86FA8&source=url";


export default class AboutScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() =>
              this.props.navigation.goBack()
            }>
              <Icon name='ios-arrow-back' color='#ffffff' />
            </Button>
          </Left>
          <Body>
            <Title>About</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content>
          <Card>

            <CardItem>
              <Body>
                <H1>SpeakYourMind Foundation</H1>
                <Text note>We are a 501(c)(3) nonprofit organization spun out of the BrainGate Lab at Brown University and Massachusetts General Hospital.
                </Text>
                <Text note>We create, distribute, and support assistive communication technologies for individuals who are unable to effectively communicate due to neurological injury and disease.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <List>
            <ListItem>
              <Body>
                <Text >We need your help</Text>
                <Text note>Pay it forward to the next person in need.</Text>
              </Body>
              <Right>
                <OpenURLButton>
                </OpenURLButton>
              </Right>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Version</Text>
                <Text note numberOfLines={1}>v0.0.1</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Contact</Text>
                <Text note numberOfLines={1}>support@speakyourmindfoundation.org</Text>
              </Body>
            </ListItem>

            <ListItem >
              <Body>
                <Text>Disclaimer</Text>
                <Text note>"Systems (hardware and software) provided by the SpeakYourMind Foundation are not medical devices and have not been approved for use by the FDA; therefore, these systems shall not be used or depended on to provide medical treatment or to make any form of healthcare decisions. Other means of communication must be used for any medical related purpose.</Text>
              </Body>

            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  }
});