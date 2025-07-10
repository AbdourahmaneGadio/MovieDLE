import { render } from '@testing-library/react-native';

import LifeBar from "@/components/LifeBar";

describe('<LifeBar />', () => {
  test('Text renders correctly on LifeBar', () => {
    const { getByTestId } = render(<LifeBar lifePointsLost={100} />);

    getByTestId('remainingLife')
    getByTestId('lifeLost')
  });

  test('Remaining life should be full', () => {
    const { getByTestId } = render(<LifeBar lifePointsLost={0} />);

    const remainingLife = getByTestId('remainingLife')
    const lifeLost = getByTestId('lifeLost')

    expect(remainingLife).toBeOnTheScreen
    expect(remainingLife).toHaveStyle({ width: '100%' });
    expect(lifeLost).not.toBeOnTheScreen
    expect(lifeLost).toHaveStyle({ width: '0%', visibility: 'hidden' });
  });

  test('Life bar should be half full', () => {
    const { getByTestId} = render(<LifeBar lifePointsLost={50} />);
    
    const remainingLife = getByTestId('remainingLife')
    const lifeLost = getByTestId('lifeLost')

    expect(remainingLife).toBeOnTheScreen
    expect(remainingLife).toHaveStyle({ width: '50%' });
    expect(lifeLost).toHaveStyle({ width: '50%', visibility: '' });

  });

  test('Life lost should be full', () => {
    const { getByTestId} = render(<LifeBar lifePointsLost={100} />);
    
    const remainingLife = getByTestId('remainingLife')
    const lifeLost = getByTestId('lifeLost')

    expect(remainingLife).toBeOnTheScreen
    expect(remainingLife).toHaveStyle({ width: '0%', visibility: 'hidden' });
    expect(lifeLost).toHaveStyle({ width: '100%', visibility: '' });

  });
});
