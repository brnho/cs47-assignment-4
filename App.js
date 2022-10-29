import { StyleSheet, SafeAreaView, FlatList, Text } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import AuthButton from "./components/AuthButton";
import Song from "./components/Song";
import Header from "./components/Header";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed = null;
  if (token) {
    contentDisplayed = <>
      <Header />
      <FlatList
        data={tracks}
        renderItem={({item, index}) => (<Song track={item} index={index} />)}
        keyExtractor={(_, index) => index}
      />
    </>;
  } else {
    contentDisplayed = <AuthButton getSpotifyAuth={getSpotifyAuth} />;
  }

  return (
    <SafeAreaView style={styles.container}>{contentDisplayed}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1, // expand to fill the entire screen
  },
});
