import { StyleSheet, View } from 'react-native';

type LifeBarProps = {
  lifePointsLost: number;
};

export default function LifeBar(props: LifeBarProps) {
  const lifePoints = 100;
  const lifePointsLost = props.lifePointsLost;
  const lifePointsRemaning = lifePoints - lifePointsLost;

  return (
    <View style={stylesLifeBar.container}>
      <View
        style={{
          borderColor: 'green',
          borderWidth: 5,
          width: `${lifePointsRemaning}%`,
          visibility: lifePointsRemaning > 0 ? '' : 'hidden',
        }}
        testID="remainingLife"></View>
      <View
        style={{
          borderColor: 'red',
          borderWidth: 5,
          width: `${lifePointsLost}%`,
          visibility: lifePointsLost > 0 ? '' : 'hidden',
        }}
        testID="lifeLost"></View>
    </View>
  );
}

const stylesLifeBar = StyleSheet.create({
  container: {
    borderColor: 'gold',
    borderWidth: 5,
    marginVertical: 5,
    flexDirection: 'row',
    width: `90%`,
  },
});
