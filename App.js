import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";

const WebViewComponent = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: "https://www.fiap.com.br" }}
        style={styles.webview}
      />
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <WebViewComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
