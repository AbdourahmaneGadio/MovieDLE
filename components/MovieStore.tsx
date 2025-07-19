import { MovieDetails } from '@/app/types/types';
import { imagesUrlBase } from '@/app/var/EnvVar';
import { Image } from 'expo-image';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface MovieStoreProps {
  movies: MovieDetails[];
  movieToFind: MovieDetails;
}

export default function MovieStore({
  movies,
  movieToFind,
}: MovieStoreProps) {
  const checkMovieProperties = function (
    movieItem: MovieDetails,
    columnType: string
  ) {
    let columnBackgroundColor = 'white';

    function checkGenres(
      movieToFind: MovieDetails,
      movieItem: MovieDetails
    ): [boolean, boolean] {
      const haveSameGenre =
        movieToFind.genres.length ===
          movieItem.genres.length &&
        movieToFind.genres.every(
          (item, index) =>
            JSON.stringify(item) ===
            JSON.stringify(
              movieItem.genres[index]
            )
        );

      const hameAtLeastOneGenreSimilar =
        movieToFind.genres.some(item1 =>
          movieItem.genres.some(
            item2 => item1.id === item2.id
          )
        );

      return [
        haveSameGenre,
        hameAtLeastOneGenreSimilar,
      ];
    }

    const [
      haveSameGenre,
      hameAtLeastOneGenreSimilar,
    ] = checkGenres(movieToFind, movieItem);

    switch (columnType) {
      case 'Title':
        columnBackgroundColor =
          movieItem.title === movieToFind.title
            ? 'green'
            : 'red';
        break;
      case 'Genre':
        columnBackgroundColor = haveSameGenre
          ? 'green'
          : hameAtLeastOneGenreSimilar
            ? 'orange'
            : 'red';
        break;
      case 'Release Year':
        columnBackgroundColor =
          movieItem.release_date ===
          movieToFind.release_date
            ? 'green'
            : 'red';
        break;
      case 'Runtime':
        columnBackgroundColor =
          movieItem.runtime ===
          movieToFind.runtime
            ? 'green'
            : 'red';
        break;
      default:
        columnBackgroundColor = 'white';
        break;
    }

    return {
      backgroundColor: columnBackgroundColor,
    };
  };

  return (
    <View
      style={stylesMovieStore.container}
      testID="movieStoreContainer">
      <View
        style={stylesMovieStore.columnsContainer}
        testID="movieColumns">
        <View
          style={[
            stylesMovieStore.columnTextContainer,
          ]}>
          <Text
            style={
              stylesMovieStore.columnTextItem
            }>
            Image
          </Text>
        </View>
        <View
          style={[
            stylesMovieStore.columnTextContainer,
          ]}>
          <Text
            style={
              stylesMovieStore.columnTextItem
            }>
            Title
          </Text>
        </View>
        <View
          style={[
            stylesMovieStore.columnTextContainer,
          ]}>
          <Text
            style={
              stylesMovieStore.columnTextItem
            }>
            Genre(s)
          </Text>
        </View>
        <View
          style={[
            stylesMovieStore.columnTextContainer,
          ]}>
          <Text
            style={
              stylesMovieStore.columnTextItem
            }>
            Release year
          </Text>
        </View>
        <View
          style={[
            stylesMovieStore.columnTextContainer,
          ]}>
          <Text
            style={
              stylesMovieStore.columnTextItem
            }>
            Runtime
          </Text>
        </View>
      </View>

      <FlatList
        data={movies}
        testID="moviesList"
        keyExtractor={item => item.id.toString()}
        inverted
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View
            style={stylesMovieStore.movieItem}
            testID="movieItem">
            <View
              style={
                stylesMovieStore.imageContainer
              }>
              <Image
                style={stylesMovieStore.image}
                source={`${imagesUrlBase}${item.poster_path}`}
                contentFit="cover"
                transition={1000}
              />
            </View>
            <View
              style={[
                stylesMovieStore.textContainer,
                checkMovieProperties(
                  item,
                  'Title'
                ),
              ]}>
              <Text
                style={stylesMovieStore.textItem}>
                {item.title}
              </Text>
            </View>
            <View
              style={[
                stylesMovieStore.textContainer,
                checkMovieProperties(
                  item,
                  'Genre'
                ),
              ]}>
              {item.genres.map((item, index) => (
                <Text
                  key={`${index}`}
                  style={
                    stylesMovieStore.textItem
                  }>
                  {item.name}
                </Text>
              ))}
            </View>
            <View
              style={[
                stylesMovieStore.textContainer,
                checkMovieProperties(
                  item,
                  'Release Year'
                ),
              ]}>
              <Text
                style={stylesMovieStore.textItem}>
                {new Date(
                  item.release_date
                ).getFullYear()}
              </Text>
            </View>
            <View
              style={[
                stylesMovieStore.textContainer,
                checkMovieProperties(
                  item,
                  'Runtime'
                ),
              ]}>
              <Text
                style={stylesMovieStore.textItem}>
                {item.runtime}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const stylesMovieStore = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
  },
  columnsContainer: {
    marginVertical: 15,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnTextContainer: {
    width: '18%', // 100 divide by number of columns
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 'auto',
  },
  columnTextItem: {
    textAlign: 'center',
    fontSize: 15,
  },
  movieItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minHeight: 100,
    height: 150,
    borderRadius: 20,
    marginBottom: 10,
  },
  imageContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '18%',
    height: '100%',
    marginHorizontal: 'auto',
    borderRadius: 20,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#0553',
    borderRadius: 15,
  },
  textContainer: {
    width: '18%', // 100 divide by number of columns
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
  },
  textItem: {
    textAlign: 'center',
    fontSize: 12,
  },
});
