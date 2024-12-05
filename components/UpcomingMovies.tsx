import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface UpcomingMoviesProps {
  data: Movie[];
}

const UpcomingMovies: React.FC<UpcomingMoviesProps> = ({ data }) => {
  const renderMovie = ({ item }: { item: Movie }) => (
    <View style={styles.box}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.image}
      />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upcoming Movies</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMovie}
        contentContainerStyle={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default UpcomingMovies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: "white",
    fontWeight: "500",
    fontSize: 20,
    marginBottom: 10,
  },
  list: {
    paddingBottom: 20,
    marginHorizontal: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    padding: 10,
    marginTop: 10,
    textAlign: "center",
  },
  box: {
    backgroundColor: "#242424cc",
    borderRadius: 10,
    height: 250,
    width: 150,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 8,
  },
});
