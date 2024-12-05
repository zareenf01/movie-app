import { StyleSheet, View, Text } from "react-native";

export default function Explore() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Explore</Text>
      </View>
    </>
  );
}

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
