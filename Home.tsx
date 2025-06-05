import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import FeedbackForm from "../../components/FeedbackForm";
import Carousel from "react-native-snap-carousel";

const sliderWidth = Dimensions.get("window").width;
const itemWidth = 120;

const earthyImages = [
  require("../../assets/images/image1.jpg"),
  require("../../assets/images/image2.jpg"),
  require("../../assets/images/image3.jpg"),
];

const renderCarouselItem = ({ item }: { item: any }) => (
  <Image source={item} style={styles.carouselImage} />
);

export default function Home() {
  return (
    <View style={styles.container}>
      <Carousel
        data={earthyImages}
        renderItem={renderCarouselItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        autoplay={true}
        loop={true}
        autoplayDelay={1000}
        autoplayInterval={5000}
      />
      <Text style={styles.title}>Welcome to Parity! 🌱</Text>
      <Text style={styles.subtitle}>Explore your wellness & productivity</Text>
      <FeedbackForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    justifyContent: "flex-start",
    backgroundColor: "#f5ebe0",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#071739",
    marginBottom: 18,
    marginTop: 25,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#071739",
    marginBottom: 20,
  },
  carouselImage: {
    width: itemWidth,
    height: 80,
    borderRadius: 12,
    marginHorizontal: 5,
  },
});
