import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import AboutScreen from "./about";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen.</Text>
      <Link href="./about">
        <Text style={styles.button}>Go to About screen</Text>
      </Link>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});