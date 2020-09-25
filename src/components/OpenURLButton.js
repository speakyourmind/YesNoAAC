import React, { useCallback } from "react";
import { Alert, Button, Linking, View } from "react-native";

const OpenButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
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