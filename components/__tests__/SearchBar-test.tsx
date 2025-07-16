import {
  cleanup,
  fireEvent,
  render,
  waitFor,
} from '@testing-library/react-native';

import { Movie } from '@/app/types/types';
import SearchBar from '@/components/SearchBar';
import movieDatabase from '@/database/movies.json';

afterEach(cleanup);

describe('<SearchBar />', () => {
  test('SearchBar renders correctly', () => {
    const tree = render(
      <SearchBar
        refreshMovieFoundList={function (
          movie: Movie
        ): void {
          throw new Error(
            'Function not implemented.'
          );
        }}
        movieDatabase={[]}
      />
    ).toJSON;
    expect(tree).toMatchSnapshot();
  });

  test('The search bar text should change', () => {
    const { getByTestId } = render(
      <SearchBar
        refreshMovieFoundList={() => null}
        movieDatabase={[]}
      />
    );

    // Init the search bar
    const searchBarTextInput = getByTestId(
      'searchBarTextInput'
    );

    // Tap a text into the search bar and check that the text is shown
    const expectedText = 'expectedText';
    fireEvent.changeText(
      searchBarTextInput,
      expectedText
    );
    expect(searchBarTextInput.props.value).toBe(
      expectedText
    );
  });

  test('The movie list should appear', () => {
    const { getByTestId } = render(
      <SearchBar
        refreshMovieFoundList={() => null}
        movieDatabase={movieDatabase}
      />
    );

    // Init the search bar
    const searchBarTextInput = getByTestId(
      'searchBarTextInput'
    );

    // Use a letter that the movies in the list contains
    const movieSearch = 'm';

    // Trigger the change text and check that the list is printed
    fireEvent.changeText(
      searchBarTextInput,
      movieSearch
    );

    // Get the movie list
    const movieList = getByTestId('movieList');

    // The movie list should be on the screen
    expect(movieList).toBeOnTheScreen();
  });

  test('The list should disappear', async () => {
    const {
      getByTestId,
      getAllByTestId,
      getByText,
      getByPlaceholderText,
    } = render(
      <SearchBar
        refreshMovieFoundList={() => null}
        movieDatabase={movieDatabase}
      />
    );

    // Init the search bar
    const searchBarTextInput = getByTestId(
      'searchBarTextInput'
    );

    // Use a letter that the movies in the list contains
    const movieSearch = 'm';

    // Trigger the change text
    fireEvent.changeText(
      searchBarTextInput,
      movieSearch
    );

    // Get the movie list
    const movieList = getByTestId('movieList');

    // Get the last item of the list
    const movieListPressable = getAllByTestId(
      'movieListPressable'
    );

    // Tap on the last movie of the list
    fireEvent.press(movieListPressable.findLast);

    // The list should not be on screen
    await waitFor(
      () => movieListPressable.findLast
    );
    expect(movieList).not.toBeOnTheScreen;
  });

  test('The text in the search bar should be empty', () => {
    const { getByTestId, getAllByTestId } =
      render(
        <SearchBar
          refreshMovieFoundList={() => null}
          movieDatabase={movieDatabase}
        />
      );

    // Init the search bar
    const searchBarTextInput = getByTestId(
      'searchBarTextInput'
    );

    // Use a letter that the movies in the list contains
    const movieSearch = 'm';

    // Trigger the change text
    fireEvent.changeText(
      searchBarTextInput,
      movieSearch
    );

    // Get the last item of the list
    const movieListPressable = getAllByTestId(
      'movieListPressable'
    );

    // Tap on the last movie of the list
    fireEvent.press(movieListPressable.findLast);

    // The list should not be on the screen
    expect(searchBarTextInput).toHaveTextContent(
      ''
    );
  });
});
