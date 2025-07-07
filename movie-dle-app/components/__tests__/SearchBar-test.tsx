import { fireEvent, render } from '@testing-library/react-native';

import SearchBar from "@/components/SearchBar";

describe('<SearchBar />', () => {
  test('Text renders correctly on SearchBar', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<SearchBar />);

    const searchBarTextInput = getByTestId('searchBarTextInput');

    const searchBarOkButton = getByTestId('searchBarOkButton');

    expect(searchBarTextInput).toBeOnTheScreen
    expect(searchBarOkButton).toBeOnTheScreen
  });


});
