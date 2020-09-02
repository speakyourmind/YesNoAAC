import React, { useCallback } from "react";
import { Alert, Linking, StyleSheet, View, Button } from "react-native";
import SuperButton from "./SuperButton.js";

const supportedURL = "https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=QY6S73LW86FA8&source=url";

const unsupportedURL = "slack://open?team=123456";

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
        <OpenButton url={supportedURL}>DONATE</OpenButton>
      </View>
    );
  }
}