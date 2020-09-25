import { Body, Button, Fab, Header, Left, List, ListItem, Right, Separator, Text, Title, View } from "native-base";
import { Component, default as React } from "react";
import { Modal, SafeAreaView, ScrollView, TextInput } from "react-native";
import Icon from 'react-native-ionicons';
import { SettingsContext } from '../../SettingsContext';
import TTSButton from '../components/TTSButton.js';
import SettingsColourPicker from './SettingsColourPicker.js';
import SettingsSlider from './SettingsSlider.js';
import { styles } from '../styles/styles';

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
                    }}
                >
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
                        <ScrollView >
                            <List>
                                <ListItem style={{ height: 200, flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }} >
                                    <Body >
                                        <View style={styles.bordered}>
                                            <Button full style={{ width: 300, flexGrow: 1, backgroundColor: buttonData.backgroundColor }}>
                                                <Text style={{ fontSize: buttonData.fontSize, color: buttonData.fontColor }}>
                                                    {buttonData.textValue}
                                                </Text>
                                            </Button>
                                        </View>
                                    </Body>
                                </ListItem>
                                <Separator style={[styles.separator, styles.backgroundDark]} >
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
                                        <SettingsColourPicker
                                            selectedValue={buttonData.fontColor}
                                            onValueChange={(text) => {
                                                buttonWithProps.fontColor = text;
                                                this.context.updateComponent(key, buttonData, buttonWithProps);
                                            }}>
                                        </SettingsColourPicker>
                                    </Body>
                                </ListItem>

                                <Separator style={[styles.separator, styles.backgroundDark]} >
                                    <Text color='#ffffff' style={{ fontSize: 18, color: '#fff' }}>BACKGROUND</Text>
                                </Separator>
                                <ListItem last>
                                    <Body>
                                        <Text style={styles.titleText}>Background Color</Text>
                                        <SettingsColourPicker
                                            selectedValue={buttonData.backgroundColor}
                                            onValueChange={(text) => {
                                                buttonWithProps.backgroundColor = text;
                                                this.context.updateComponent(key, buttonData, buttonWithProps);
                                            }}
                                        >
                                        </SettingsColourPicker>
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
                    fontSize={buttonData.fontSize}
                    disabled={this.context.editMode} />
                {this.context.editMode &&
                    <Fab style={styles.backgroundDark} direction="up" position="bottomRight" visible="" onPress={() => {
                        this.setState({ inEdit: true });
                    }}>
                        <Icon name="md-create" color="#ffffff" />
                    </Fab>}

            </View>

        )
    }

}

SuperButton.contextType = SettingsContext;
