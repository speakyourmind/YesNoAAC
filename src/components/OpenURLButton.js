import React, { useCallback } from "react";
import { Alert, Linking, StyleSheet, View, Button } from "react-native";
import SuperButton from "./TTSButton.js";

const OpenButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button full info title={children} onPress={handlePress} />;
};
export default class OpenURLButton extends React.Component {
  render() {
    return (
      <View style={{ flexGrow: 1}}>
        <OpenButton url={this.props.url}>{this.props.buttonText}</OpenButton>
      </View>
    );
  }
}