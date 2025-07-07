import LifeBar from "@/components/LifeBar";
import MovieStore from "@/components/MovieStore";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import { Text, View } from "react-native";
import movieDatabase from '@/database/movies.json'
import { Movie } from "./types/types";

export default function Index() {

  const [lifePointsLost, setLifePointsLost] = useState(0);
  const [moviesChosen, setMoviesChosen] = useState<Movie[]>([]);

  const handleButtonPress = (singleMovieChosen: Movie) => {
   setMoviesChosen([...moviesChosen, singleMovieChosen])
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>MovieDLE</Text>
      <SearchBar onPress={handleButtonPress}  />
      <LifeBar lifePointsLost={lifePointsLost}  />
      <MovieStore movies={moviesChosen} />
    </View>
  );
}
