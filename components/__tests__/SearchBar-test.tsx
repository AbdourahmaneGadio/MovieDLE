import { fireEvent, render } from '@testing-library/react-native';

import SearchBar from '@/components/SearchBar';
import movieDatabase from '@/database/movies.json';

describe('<SearchBar />', () => {
  test('Text renders correctly on SearchBar', () => {
    const { getByTestId } = render(<SearchBar refreshMovieFoundList={() => null} movieDatabase={[]} />);

    const searchBarTextInput = getByTestId('searchBarTextInput');

    const searchBarOkButton = getByTestId('searchBarOkButton');

    expect(searchBarTextInput).toBeOnTheScreen();
    expect(searchBarOkButton).toBeOnTheScreen();
  });

  test('The search bar text should change', () => {
    const {  getByTestId , getByPlaceholderText} = render(<SearchBar  refreshMovieFoundList={() => null} movieDatabase={[]}/>);
    const searchBarTextInput = getByTestId('searchBarTextInput');
    const expectedText = 'expectedText'
    fireEvent.changeText(searchBarTextInput, expectedText);
    expect(searchBarTextInput.props.value).toBe(expectedText)
  });

  test('The movie list should appear', () => {
    const {  getByTestId , getByPlaceholderText, getAllByTestId} = render(<SearchBar  refreshMovieFoundList={() => null} movieDatabase={movieDatabase}/>);
    const searchBarTextInput = getByTestId('searchBarTextInput');
    const movieSearch = 'm'
    fireEvent.changeText(searchBarTextInput, movieSearch);

    const movieListItemImage= getAllByTestId('movieListItemImage');
    expect(movieListItemImage.length).toBeGreaterThanOrEqual(1)
  });
});
