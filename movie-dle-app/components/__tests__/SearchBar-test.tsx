import { fireEvent, render } from '@testing-library/react-native';

import SearchBar from "@/components/SearchBar";
import movieDatabase from '@/database/movies.json'

describe('<SearchBar />', () => {
  test('Text renders correctly on SearchBar', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<SearchBar onPress={()=>null}/>);

    const searchBarTextInput = getByTestId('searchBarTextInput');

    const searchBarOkButton = getByTestId('searchBarOkButton');

    expect(searchBarTextInput).toBeOnTheScreen
    expect(searchBarOkButton).toBeOnTheScreen
  });

  test('No results available should appear', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<SearchBar onPress={()=>null}/>);

    const noMoviesAvailableText = getByTestId('noMoviesAvailableText')
    expect(noMoviesAvailableText).toBeOnTheScreen()
  });
});
