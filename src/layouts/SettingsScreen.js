import React from "react";
import {
    View,
    Container,
    Header,
    Title,
    Left,
    Body,
    Right,
    Content, H1, H2, H3, Form, Item, Label, Input, ListItem, List, Thumbnail,
    Button,
    Text,
    StyleProvider
  } from "native-base";

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <Container>
     <Header>
        <Body>
          <Title>Settings</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Form>
          <Item fixedLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item fixedLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
        <List>
          <ListItem>
            <Body>
              <Text>Version</Text>
              <Text note numberOfLines={1}>v0.0.1</Text>
              <Button info>
                <Text>jnvlksljdfv</Text>
              </Button>
            </Body>
          </ListItem>
        </List>
      </Content>


      </Container>
    );
  }
}