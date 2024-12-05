import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TrendingMovies from "@/components/TrendingMovies";
import UpcomingMovies from "@/components/UpcomingMovies";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { useEffect, useState } from "react";
import { getTrending, getUpcoming } from "@/api/moviedb";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}
export default function HomeScreen() {
  const [trending, setTrending] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  useEffect(() => {
    const trendingMovies = async () => {
      const data = await getTrending();
      console.log("Trendingg: ", data);
      data && data.results && setTrending(data.results);
    };
    const UpcomingMovies = async () => {
      const data = await getUpcoming();
      console.log("Upcoming: ", data);
      data && data.results && setUpcoming(data.results);
    };

    trendingMovies();
    UpcomingMovies();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* nav */}
      <View style={styles.nav}>
        <Bars3CenterLeftIcon size="30" color="white" strokeWidth={2} />
        <Text style={styles.logo}>
          <Text style={styles.M}>M</Text>ovies
        </Text>
        <TouchableOpacity style={styles.search}>
          <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
        </TouchableOpacity>
      </View>

      {/* trending */}

      <TrendingMovies data={trending} />
      {/* upcoming  */}

      <UpcomingMovies data={upcoming} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 10,
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    color: "white",
    marginBottom: 20,
  },
  search: {
    borderRadius: 8,
    backgroundColor: "gray",
    padding: 5,
  },
  logo: {
    color: "white",
    fontWeight: 500,
    fontSize: 30,
  },
  M: {
    color: "red",
  },
  trending: {
    marginTop: 30,
  },
});
