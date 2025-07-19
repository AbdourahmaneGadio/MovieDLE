import {
  cleanup,
  fireEvent,
  render,
} from '@testing-library/react-native';

import SearchBar from '@/components/SearchBar';

afterEach(cleanup);

describe('<SearchBar />', () => {
  test('SearchBar renders correctly', () => {
    const tree = render(
      <SearchBar
        refreshMovieFoundList={() => null}
      />
    ).toJSON;
    expect(tree).toMatchSnapshot();
  });

  test('The search bar text should change', () => {
    const { getByTestId } = render(
      <SearchBar
        refreshMovieFoundList={() => null}
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
});
