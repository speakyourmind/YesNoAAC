import {
  Container, Header, Left, Body, Right, Button, Title,
  Fab, Label,
  Separator, Text, Picker, List, ListItem, View,
} from "native-base";
import React from "react";
import { Grid, Row, Col } from 'react-native-easy-grid';
import SuperButton from '../components/SuperButton.js';
import { SettingsContext } from '../../SettingsContext';
import Icon from 'react-native-ionicons';
import {
  Alert,
  Modal,
  StyleSheet, TextInput,
  TouchableHighlight, SafeAreaView, ScrollView
} from "react-native";
export default class HomeScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      editMode: false,
      modal1Visible: false,
      modal2Visible: false
    }
  }

  render() {
    let button_1_view =
      <View style={{ flexGrow: 1 }} >
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modal1Visible}
          onRequestClose={() => {
            this.setState({ modal1Visible: false });
          }}
        >

          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <List>
                <ListItem style={{ height: 200, flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }} >
                  <Body >
                    <View style={{
                      borderColor: '#000000',
                      borderWidth: 2
                    }}>
                      <Button full style={{ width: 300, flexGrow: 1, backgroundColor: this.context.button_1.backgroundColor }}>
                        <Text style={{ fontSize: 100, color: this.context.button_1.fontColor }}>
                          {this.context.button_1.textValue}
                        </Text>
                      </Button>
                    </View>
                  </Body>
                </ListItem>
                <Separator style={{ backgroundColor: '#2e343b', marginTop: 10 }} >
                  <Text color='#ffffff' style={{ fontSize: 14, color: '#fff' }}>TEXT</Text>
                </Separator>
                <ListItem>
                  <Body>
                    <Label>Title</Label>
                    <TextInput
                      style={{
                        marginTop: 10,
                        marginLeft: 5,
                        marginRight: 5
                      }}
                      value={this.context.button_1.textValue}
                      borderWidth={2}
                      onChangeText={(text) => {
                        var button_1 = { ...this.context.button_1 }
                        button_1.textValue = text;
                        this.context.updateButton_1(button_1);
                      }}
                    />
                  </Body>
                </ListItem>
                {/* <ListItem>
              <Body>
                <Label>Speak Text</Label>
                <TextInput
                  style={{
                    marginTop: 10,
                    marginLeft: 5,
                    marginRight: 5
                  }}
                  value={this.context.button_1.speakText}
                  borderWidth={2}
                  onChangeText={(text) => {
                    var button_1 = { ...this.context.button_1 }
                    button_1.speakText = text;
                    this.context.updateButton_1(button_1);
                  }}
                />
              </Body>
            </ListItem> */}

                <ListItem>
                  <Body>

                    <Label>Text Color</Label>

                    <View style={styles.pickerView}>
                      <Picker
                        note
                        style={{ color: '#000', placeholderTextColor: '#000' }}
                        mode="dropdown"
                        selectedValue={this.context.button_1.fontColor}
                        onValueChange={(text) => {
                          var button_1 = { ...this.context.button_1 }
                          button_1.fontColor = text;
                          this.context.updateButton_1(button_1);
                        }}
                      >
                        <Picker.Item label="Black" value="#000000" />
                        <Picker.Item label="White" value="#ffffff" />
                        <Picker.Item label="Red" value="#c0392b" />
                        <Picker.Item label="Orange" value="#C75000" />
                        <Picker.Item label="Green" value="#1F894B" />
                        <Picker.Item label="Blue" value="#277CB4" />
                        <Picker.Item label="Purple" value="#8e44ad" />
                      </Picker>
                    </View>
                  </Body>
                </ListItem>

                <Separator style={{ backgroundColor: '#2e343b', marginTop: 10 }} >
                  <Text color='#ffffff' style={{ fontSize: 14, color: '#fff' }}>BACKGROUND</Text>
                </Separator>

                <ListItem>
                  <Body>
                    <Label>Background Color</Label>

                    <View style={styles.pickerView}>
                      <Picker
                        note
                        style={{ color: '#000', placeholderTextColor: '#000' }}
                        mode="dropdown"
                        selectedValue={this.context.button_1.backgroundColor}
                        onValueChange={(text) => {
                          var button_1 = { ...this.context.button_1 }
                          button_1.backgroundColor = text;
                          this.context.updateButton_1(button_1);
                        }}
                      >
                        <Picker.Item label="Black" value="#000000" />
                        <Picker.Item label="White" value="#ffffff" />
                        <Picker.Item label="Red" value="#c0392b" />
                        <Picker.Item label="Orange" value="#C75000" />
                        <Picker.Item label="Green" value="#1F894B" />
                        <Picker.Item label="Blue" value="#277CB4" />
                        <Picker.Item label="Purple" value="#8e44ad" />
                      </Picker>
                    </View>
                  </Body>
                </ListItem>

              </List>
              <Button full info onPress={() => {
                this.setState({ modal1Visible: !this.state.modal1Visible });
              }}              >
                <Text style={styles.textStyle}>DONE</Text>
              </Button>

            </ScrollView>
          </SafeAreaView>
        </Modal>
        <SuperButton key={this.context.button_1.key}
          textValue={this.context.button_1.textValue}
          speakText={this.context.button_1.speakText}
          fontColor={this.context.button_1.fontColor}
          backgroundColor={this.context.button_1.backgroundColor}
          fontSize={80} />
        {this.state.editMode &&
          <Fab style={{ backgroundColor: '#2c3e50' }} direction="up" position="bottomRight" visible="" onPress={() => {
            this.setState({ modal1Visible: true });
          }}>
            <Icon name="md-create" color="#ffffff" />
          </Fab>}

      </View>
    let button_2_view =
      <View style={{ flexGrow: 1 }} >
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modal2Visible}
          onRequestClose={() => {
            this.setState({ modal2Visible: false });
          }}
        >

          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <List>
                <ListItem style={{ height: 200, flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }} >
                  <Body >
                    <View style={{
                      borderColor: '#000000',
                      borderWidth: 2
                    }}>
                      <Button full style={{ width: 300, flexGrow: 1, backgroundColor: this.context.button_2.backgroundColor }}>
                        <Text style={{ fontSize: 100, color: this.context.button_2.fontColor }}>
                          {this.context.button_2.textValue}
                        </Text>
                      </Button>
                    </View>
                  </Body>
                </ListItem>
                <Separator style={{ backgroundColor: '#2e343b', marginTop: 10 }} >
                  <Text color='#ffffff' style={{ fontSize: 14, color: '#fff' }}>TEXT</Text>
                </Separator>
                <ListItem>
                  <Body>
                    <Label>Title</Label>
                    <TextInput
                      style={{
                        marginTop: 10,
                        marginLeft: 5,
                        marginRight: 5
                      }}
                      value={this.context.button_2.textValue}
                      borderWidth={2}
                      onChangeText={(text) => {
                        var button_2 = { ...this.context.button_2 }
                        button_2.textValue = text;
                        this.context.updateButton_2(button_2);
                      }}
                    />
                  </Body>
                </ListItem>
                {/* <ListItem>
          <Body>
            <Label>Speak Text</Label>
            <TextInput
              style={{
                marginTop: 10,
                marginLeft: 5,
                marginRight: 5
              }}
              value={this.context.button_2.speakText}
              borderWidth={2}
              onChangeText={(text) => {
                var button_2 = { ...this.context.button_2 }
                button_2.speakText = text;
                this.context.updateButton_2(button_2);
              }}
            />
          </Body>
        </ListItem> */}

                <ListItem>
                  <Body>

                    <Label>Text Color</Label>

                    <View style={styles.pickerView}>
                      <Picker
                        note
                        style={{ color: '#000', placeholderTextColor: '#000' }}
                        mode="dropdown"
                        selectedValue={this.context.button_2.fontColor}
                        onValueChange={(text) => {
                          var button_2 = { ...this.context.button_2 }
                          button_2.fontColor = text;
                          this.context.updateButton_2(button_2);
                        }}
                      >
                        <Picker.Item label="Black" value="#000000" />
                        <Picker.Item label="White" value="#ffffff" />
                        <Picker.Item label="Red" value="#c0392b" />
                        <Picker.Item label="Orange" value="#C75000" />
                        <Picker.Item label="Green" value="#1F894B" />
                        <Picker.Item label="Blue" value="#277CB4" />
                        <Picker.Item label="Purple" value="#8e44ad" />
                      </Picker>
                    </View>
                  </Body>
                </ListItem>

                <Separator style={{ backgroundColor: '#2e343b', marginTop: 10 }} >
                  <Text color='#ffffff' style={{ fontSize: 14, color: '#fff' }}>BACKGROUND</Text>
                </Separator>

                <ListItem>
                  <Body>
                    <Label>Background Color</Label>

                    <View style={styles.pickerView}>
                      <Picker
                        note
                        style={{ color: '#000', placeholderTextColor: '#000' }}
                        mode="dropdown"
                        selectedValue={this.context.button_2.backgroundColor}
                        onValueChange={(text) => {
                          var button_2 = { ...this.context.button_2 }
                          button_2.backgroundColor = text;
                          this.context.updateButton_2(button_2);
                        }}
                      >
                        <Picker.Item label="Black" value="#000000" />
                        <Picker.Item label="White" value="#ffffff" />
                        <Picker.Item label="Red" value="#c0392b" />
                        <Picker.Item label="Orange" value="#C75000" />
                        <Picker.Item label="Green" value="#1F894B" />
                        <Picker.Item label="Blue" value="#277CB4" />
                        <Picker.Item label="Purple" value="#8e44ad" />
                      </Picker>
                    </View>
                  </Body>
                </ListItem>


              </List>
              <Button full info onPress={() => {
                this.setState({ modal2Visible: !this.state.modal2Visible });
              }}
              >
                <Text style={styles.textStyle}>DONE</Text>
              </Button>
            </ScrollView>
          </SafeAreaView>
        </Modal>
        <SuperButton key={this.context.button_2.key}
          textValue={this.context.button_2.textValue}
          speakText={this.context.button_2.speakText}
          fontColor={this.context.button_2.fontColor}
          backgroundColor={this.context.button_2.backgroundColor}
          fontSize={80} />
        {this.state.editMode &&
          <Fab style={{ backgroundColor: '#2c3e50' }} direction="up" position="bottomRight" visible="" onPress={() => {
            this.setState({ modal2Visible: true });
          }}>
            <Icon name="md-create" color="#ffffff" />
          </Fab>}

      </View>

    let grid;
    if (this.context.direction === 'row') {
      grid =
        <Grid>
          <Row>
            {button_1_view}
          </Row>
          <Row>
            {button_2_view}
          </Row>
        </Grid>;
    } else {
      grid =
        <Grid>
          <Col>
            {button_1_view}
          </Col>
          <Col>
            {button_2_view}
          </Col>
        </Grid>;
    }
    return (
      <Container>
        {!this.state.editMode &&
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
              <Button transparent onPress={() =>
                this.setState({ editMode: !this.state.editMode })
              }>
                <Icon name='md-create' color='#ffffff' />
              </Button>
              <Button transparent>
                <Icon name='ios-information-circle-outline' color='#ffffff' onPress={() =>
                  this.props.navigation.navigate('About')
                } />
              </Button>
            </Right>
          </Header>
        }
        {this.state.editMode &&
          <Header >
            <Left>
            </Left>
            <Body>
              <Title>Editing Screen</Title>
            </Body>
            <Right>
              <Button transparent onPress={() =>
                this.setState({ editMode: !this.state.editMode })
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
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pickerView: {
    width: 300,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    borderColor: '#000000',
    borderWidth: 2,
    alignSelf: 'stretch'
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
HomeScreen.contextType = SettingsContext;