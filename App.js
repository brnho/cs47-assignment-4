import { StyleSheet, SafeAreaView, FlatList, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import AuthButton from "./components/AuthButton";
import Song from "./components/Song";
import Header from "./components/Header";
import SongDetail from "./components/SongDetail";
import SongPreview from "./components/SongPreview";

const Stack = createStackNavigator();

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  const SongList = ({ navigation }) => (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={tracks}
        renderItem={({ item }) => <Song track={item} navigation={navigation} />}
        keyExtractor={(_, index) => index}
      />
    </SafeAreaView>
  );
  
  let contentDisplayed = null;
  if (token) {
    contentDisplayed = <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Back' component={SongList} options={{ headerShown: false }} />
        <Stack.Screen name='SongDetail' component={SongDetail} options={songDetailHeader} />
        <Stack.Screen name='SongPreview' component={SongPreview} options={songPreviewHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  } else {
    contentDisplayed = <SafeAreaView style={styles.container}><AuthButton getSpotifyAuth={getSpotifyAuth} /></SafeAreaView>;
  }

  return (
    <>{contentDisplayed}</>
  );
}

const songDetailHeader = {
  title: 'Song Details',
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTitleStyle: {
    color: 'white',
  }
}

const songPreviewHeader = {...songDetailHeader, title: 'Song Preview'}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1, // expand to fill the entire screen
  },
});
