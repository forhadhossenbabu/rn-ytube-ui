import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/dist/MaterialIcons";

export default class VideoItem extends React.Component {
  render() {
    let video = this.props.video;
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: video.snippet.thumbnails.medium.url }}
          style={{ height: 200 }}
        />
        <View style={styles.descContainer}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/0.jpg" }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <View style={styles.statusContainer}>
            <Text numberOfLines={2} style={styles.videoTitle}>
              {video.snippet.title}
            </Text>
            <Text style={styles.videoStats}>
              {video.snippet.channelTitle +
                " · " +
                nFormatter(video.statistics.viewCount, 1) +
                " · 3months ago"}
            </Text>
          </View>
          <TouchableOpacity>
            <Icon name="more-vert" size={20} color="#999999" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function nFormatter(num, digits) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (
    (num / si[i].value).toFixed(digits).replace(rx, "$1") +
    si[i].symbol +
    " views"
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  descContainer: {
    flexDirection: "row",
    paddingTop: 15
  },
  statusContainer: {
    paddingHorizontal: 15,
    flex: 1
  },
  videoTitle: {
    fontSize: 16,
    color: "#3c3c3c"
  },
  videoStats: {
    fontSize: 15,
    paddingTop: 3
  }
});
