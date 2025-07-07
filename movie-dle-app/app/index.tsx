import LifeBar from "@/components/LifeBar";
import MovieStore from "@/components/MovieStore";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {

      const [lifePointsLost, setLifePointsLost] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>MovieDLE</Text>
      <SearchBar />
      <LifeBar lifePointsLost={lifePointsLost} />
      <MovieStore />
    </View>
  );
}
