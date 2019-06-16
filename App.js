import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/dist/MaterialIcons";
import VideoItem from "./components/VideoItem";
import data from "./api.json";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image
            source={require("./assets/logo.png")}
            style={{ height: 22, width: 98 }}
          />
          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Icon name="search" size={25} style={styles.navItem} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="account-circle" size={25} style={styles.navItem} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            data={data.items}
            renderItem={video => <VideoItem video={video.item} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => (
              <View style={{ height: 0.5, backgroundColor: "#e5e5e5" }} />
            )}
          />
        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="home" size={25} />
            <Text style={styles.tabTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="whatshot" size={25} />
            <Text style={styles.tabTitle}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="subscriptions" size={25} />
            <Text style={styles.tabTitle}>Subscriptions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="folder-shared" size={25} />
            <Text style={styles.tabTitle}>Library</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    height: 55,
    backgroundColor: "white",
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  rightNav: {
    flexDirection: "row"
  },
  navItem: {
    margin: 25
  },
  body: {
    flex: 1
  },
  tabBar: {
    height: 60,
    backgroundColor: "white",
    borderTopWidth: 0.5,
    borderColor: "#e5e5e5",
    justifyContent: "space-around",
    flexDirection: "row"
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center"
  },
  tabTitle: {
    fontSize: 11,
    color: "#3c3c3c",
    paddingTop: 4
  }
});
