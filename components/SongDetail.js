import { WebView } from "react-native-webview";

export default function SongDetail({ route }) {
    const songUrl = route.params.url;
    return <WebView source={{uri: songUrl }} />;
}


