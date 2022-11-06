import { WebView } from "react-native-webview";

export default function SongPreview({ route }) {
    const songUrl = route.params.url;
    return <WebView source={{uri: songUrl }} />;
}


