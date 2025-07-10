import { render } from '@testing-library/react-native';

import SearchBar from '@/components/SearchBar';

describe('<SearchBar />', () => {
  test('Text renders correctly on SearchBar', () => {
    const { getByTestId } = render(<SearchBar refreshMovieFoundList={() => null} />);

    const searchBarTextInput = getByTestId('searchBarTextInput');

    const searchBarOkButton = getByTestId('searchBarOkButton');

    expect(searchBarTextInput).toBeOnTheScreen();
    expect(searchBarOkButton).toBeOnTheScreen();
  });

  // test('No results available should appear', () => {
  //   const { getByPlaceholderText, getByText, getByTestId } = render(<SearchBar onPress={()=>null}/>);

  //   const noMoviesAvailableText = getByTestId('noMoviesAvailableText')
  //   expect(noMoviesAvailableText).toBeOnTheScreen()
  // });
});
