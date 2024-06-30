import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnmimationScreen from './screens/AnimationScreen'
import HomeScreen from './screens/HomeScreen'
import { useState,useEffect } from 'react';

const Stack= createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust the time as needed
  }, []);

  return (
    <NavigationContainer>
    {isLoading ? <AnmimationScreen /> : <Stack.Navigator 
        screenOptions={{ headerShown: false }}>

        <Stack.Screen name="FirstPage" component={HomeScreen} />
       
      </Stack.Navigator>}
      
    </NavigationContainer>
  );
}