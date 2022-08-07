import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }: any) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: imgUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  card: {
    position: "relative",
    marginHorizontal: 4,
  },
  title: {
    position: "absolute",
    bottom: 4,
    left: 4,
    color: "white",
    fontWeight: "bold",
  },
});
