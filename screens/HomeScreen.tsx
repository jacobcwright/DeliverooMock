import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.head}>
        <View>
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            style={styles.headerImage}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 12, color: "gray" }}>
            Deliver Now!
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={36} color="#00CCBB" style={{ margin: 4 }} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safe: {
    backgroundColor: "white",
    paddingTop: 20,
  },
  head: {
    flexDirection: "row",
    paddingBottom: 12,
    alignItems: "center",
    marginHorizontal: 16,
    marginLeft: 8,
  },
  headerImage: {
    height: 36,
    width: 36,
    backgroundColor: "gray",
    padding: 16,
    borderRadius: 100,
    margin: 4,
    marginRight: 12,
  },
});
