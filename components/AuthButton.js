import { StyleSheet, View, Text, Image, TouchableHighlight } from "react-native";
import { Themes } from "../assets/Themes";

export default function AuthButton({ getSpotifyAuth }) {
  return (
    <TouchableHighlight onPress={getSpotifyAuth}>
      <View style={styles.container} onTouc>
        <Image style={styles.logo} source={require('../assets/spotify-logo.png')}/>
        <Text style={styles.text}>CONNECT WITH SPOTIFY</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.spotify,
    flexDirection: 'row',
    alignItems: "center",
    padding: 10,
    borderRadius: 99999,
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  }
});
