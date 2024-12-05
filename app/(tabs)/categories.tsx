import { StyleSheet, Text, View } from "react-native";
import React from "react";

const categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>
    </View>
  );
};

export default categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#fff",
  },
});
