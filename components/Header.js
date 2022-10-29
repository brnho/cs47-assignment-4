import { StyleSheet, View, Text, Image } from "react-native";
import { Themes } from "../assets/Themes";

export default function AuthButton({ getSpotifyAuth }) {
  return (
    <View style={styles.container} onTouc>
        <Image style={styles.logo} source={require('../assets/spotify-logo.png')}/>
        <Text style={styles.text}>My Top Tracks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  }
});
