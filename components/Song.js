import { StyleSheet, View, Text, Image } from "react-native";
import millisToMinutesAndSeconds from '../utils/millisToMinutesAndSeconds';

export default function Song({ track, index }) {
  return (
    <>
      {track && (
        <View style={styles.container}>
          <Text style={[styles.text, styles.index]}>{index + 1}</Text>
          <Image
            style={styles.image}
            source={{ uri: track.album.images[0].url }}
          />
          <View style={styles.songInfo}>
            <Text style={styles.text} numberOfLines={1}>{track.name}</Text>
            <Text style={[styles.text, styles.artist]} numberOfLines={1}>{track.artists[0].name}</Text>
          </View>
          <Text style={[styles.text, styles.albumName]} numberOfLines={1}>{track.album.name}</Text>
          <Text style={[styles.text, styles.duration]}>{millisToMinutesAndSeconds(track.duration_ms)}</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:  "flex-start",
    width: "100%",
    height: 60,
    marginBottom: 20,
  },
  text: {
    color: "white",
  },
  index: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  songInfo: {
    paddingLeft: 20,
    width: '25%',
  },
  image: {
    width: 60,
    height: 60,
    //resizeMode: "contain",
  },
  albumName: {
    padding: 10,
    width: '30%',
  },  
  duration: {
    width: '15%',
    color: '#808080',
  },
  artist: {
    color: '#808080',
  }
});
