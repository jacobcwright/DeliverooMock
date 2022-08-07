import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }: any) => {
  return (
    <View style={{ backgroundColor: "#F5F5F5" }}>
      <View
        style={{
          marginTop: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 16,
        }}
      >
        <Text style={styles.title}>{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text style={styles.description}>{description}</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 16 }}
      >
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Restaurant 1"
          rating="4.5"
          genre="Japanese"
          address="123 Main St"
          short_description="This is a short description of the restaurant"
          dishes={["Dish 1", "Dish 2", "Dish 3"]}
          long={-73.965}
          lat={40.732}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Restaurant 1"
          rating="4.5"
          genre="Japanese"
          address="123 Main St"
          short_description="This is a short description of the restaurant"
          dishes={["Dish 1", "Dish 2", "Dish 3"]}
          long={-73.965}
          lat={40.732}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Restaurant 1"
          rating="4.5"
          genre="Japanese"
          address="123 Main St"
          short_description="This is a short description of the restaurant"
          dishes={["Dish 1", "Dish 2", "Dish 3"]}
          long={-73.965}
          lat={40.732}
        />
        <RestaurantCard
          id={1}
          imgUrl="https://links.papareact.com/gn7"
          title="Restaurant 1"
          rating="4.5"
          genre="Japanese"
          address="123 Main St"
          short_description="This is a short description of the restaurant"
          dishes={["Dish 1", "Dish 2", "Dish 3"]}
          long={-73.965}
          lat={40.732}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    fontSize: 12,
    color: "gray",
    paddingHorizontal: 16,
  },
});
