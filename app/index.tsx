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
  const [movieToFind, setMovieToFind] = useState<Movie>(movieDatabase[0]);

  const handleButtonPress = (singleMovieChosen: Movie) => {
   setMoviesChosen([...moviesChosen, singleMovieChosen])

   if (singleMovieChosen != movieToFind){
    setLifePointsLost(lifePointsLost+10)
   }
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
