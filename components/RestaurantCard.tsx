import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}: any) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Image source={{ uri: imgUrl }} style={styles.image} />
      <View style={{ paddingHorizontal: 12, paddingBottom: 16 }}>
        <Text style={styles.title}>{title}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <StarIcon size={22} color="#00CCBB" opacity={0.5} />
          <Text style={{ color: "gray" }}>
            <Text style={{ color: "#00CCBB" }}>{rating} </Text> - {genre}
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", paddingTop: 4, alignItems: "center" }}
        >
          <LocationMarkerIcon color="gray" opacity={0.5} size={24} />
          <Text style={{ fontSize: 12, color: "gray", marginHorizontal: 4 }}>
            Nearby - {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  image: {
    width: 256,
    height: 144,
    borderRadius: 4,
    margin: 2,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 8,
  },
  wrapper: {
    backgroundColor: "white",
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.2,
    elevation: 2,
  },
});
