import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

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

      <View style={styles.search}>
        <View style={styles.searchBar}>
          <SearchIcon size={20} color="#00CCBB" style={{ marginRight: 8 }} />
          <TextInput
            placeholder="Search for Restaurants"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon size={32} color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={{}}>
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 8,
    marginHorizontal: 4,
    justifyContent: "center",
  },
  searchBar: {
    flexDirection: "row",
    marginLeft: 8,
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 12,
  },
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
