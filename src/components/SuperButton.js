import {
    Body, Button,
    Fab, Header,
    Left, List, ListItem, Picker, Right, Separator, Text, Title, View
} from "native-base";
import { Component, default as React } from "react";
import {
    Modal,
    SafeAreaView, ScrollView, TextInput, StyleSheet,
} from "react-native";
import Icon from 'react-native-ionicons';
import TTSButton from '../components/TTSButton.js';
import { SettingsContext } from '../../SettingsContext';
import SettingsSlider from '../components/SettingsSlider.js';


export default class SuperButton extends Component {

    constructor() {
        super();
        this.state = {
            inEdit: false,
        }
    }
    render() {
        var buttonData = this.props.buttonData;
        var buttonWithProps = this.props.buttonWithProps;
        var key = this.props.asyncKey;

        return (
            <View style={{ flexGrow: 1 }} >
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.inEdit}
                    onRequestClose={() => {
                        this.setState({ inEdit: false });
                    }}>
                    <Header>
                        <Left style={{ flex: 1 }}>
                            <Button transparent onPress={() => {
                                this.setState({ inEdit: !this.state.inEdit });
                            }}>
                                <Icon name='ios-arrow-back' color='#ffffff' />
                                <Title style={styles.paddedTitle}>Edit Button 1</Title>
                            </Button>
                        </Left>
                        <Right></Right>
                    </Header>
                    <SafeAreaView style={styles.container}>
                        <ScrollView style={styles.scrollView}>
                            <List>
                                <ListItem style={{ height: 200, flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }} >
                                    <Body >
                                        <View style={{
                                            borderColor: '#000000',
                                            borderWidth: 2
                                        }}>
                                            <Button full style={{ width: 300, flexGrow: 1, backgroundColor: buttonData.backgroundColor }}>
                                                <Text style={{ fontSize: buttonData.fontSize, color: buttonData.fontColor }}>
                                                    {buttonData.textValue}
                                                </Text>
                                            </Button>
                                        </View>
                                    </Body>
                                </ListItem>
                                <Separator style={{ backgroundColor: '#2e343b', marginTop: 10 }} >
                                    <Text color='#ffffff' style={{ fontSize: 18, color: '#fff' }}>TEXT</Text>
                                </Separator>
                                <ListItem>
                                    <Body>
                                        <Text style={styles.titleText}>Title</Text>
                                        <TextInput
                                            style={styles.input}
                                            value={buttonData.textValue}
                                            borderWidth={2}
                                            onChangeText={(text) => {
                                                buttonWithProps.textValue = text;
                                                this.context.updateComponent(key, buttonData, buttonWithProps);
                                            }}
                                        />
                                    </Body>
                                </ListItem>

                                <ListItem>
                                    <Body>
                                        <Text style={styles.titleText}>Font Size</Text>
                                        <SettingsSlider
                                         minimumValue={10}
                                         maximumValue={200}
                                         step={10}
                                            value={buttonData.fontSize}
                                            onSlidingComplete={(value) => {
                                                buttonWithProps.fontSize = value;
                                                this.context.updateComponent(key, buttonData, buttonWithProps);
                                            }}
                                        />
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                        <Text style={styles.titleText}>Text Color</Text>
                                        <View style={styles.pickerView}>
                                            <Picker
                                                note
                                                style={{ color: '#000', placeholderTextColor: '#000' }}
                                                mode="dropdown"
                                                selectedValue={buttonData.fontColor}
                                                onValueChange={(text) => {
                                                    buttonWithProps.fontColor = text;
                                                    this.context.updateComponent(key, buttonData, buttonWithProps);
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
                                    <Text color='#ffffff' style={{ fontSize: 18, color: '#fff' }}>BACKGROUND</Text>
                                </Separator>
                                <ListItem>
                                    <Body>
                                        <Text style={styles.titleText}>Background Color</Text>
                                        <View style={styles.pickerView}>
                                            <Picker
                                                note
                                                style={{ color: '#000', placeholderTextColor: '#000' }}
                                                mode="dropdown"
                                                selectedValue={buttonData.backgroundColor}
                                                onValueChange={(text) => {
                                                    buttonWithProps.backgroundColor = text;
                                                    this.context.updateComponent(key, buttonData, buttonWithProps);
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

                        </ScrollView>
                    </SafeAreaView>
                </Modal>
                <TTSButton key={buttonData.key}
                    textValue={buttonData.textValue}
                    speakText={buttonData.speakText}
                    fontColor={buttonData.fontColor}
                    backgroundColor={buttonData.backgroundColor}
                    margin={this.context.margin}
                    fontSize={buttonData.fontSize} disabled={this.context.editMode} />
                {this.context.editMode &&
                    <Fab style={{ backgroundColor: '#2c3e50' }} direction="up" position="bottomRight" visible="" onPress={() => {
                        this.setState({ inEdit: true });
                    }}>
                        <Icon name="md-create" color="#ffffff" />
                    </Fab>}

            </View>

        )
    }

}
const styles = StyleSheet.create({
    paddedTitle: {
        paddingLeft: 40
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000'
    },
    input: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
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
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#000000',
        borderWidth: 2,
        alignSelf: 'stretch'
    }
});
SuperButton.contextType = SettingsContext;
