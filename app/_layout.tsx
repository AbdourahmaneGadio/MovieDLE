import { Stack } from 'expo-router';

export default function RootLayout() {
  return <Stack screenOptions={{
    // Hide the header for this route
    headerShown: __DEV__,
  }}/>;
}
