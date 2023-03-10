import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenA } from './src/ScreenA';
import { ScreenB } from './src/ScreenB';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="ScreenA">
        <Stack.Screen name='ScreenA' component={ScreenA}/>
        <Stack.Screen name='ScreenB' component={ScreenB}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
