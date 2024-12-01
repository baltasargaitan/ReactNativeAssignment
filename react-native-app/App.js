import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import AuthScreen from './src/screens/AuthScreen';
import useStore from './src/state/useStore'; // Zustand global status

const queryClient = new QueryClient();

export default function App() {
  const authToken = useStore((state) => state.authToken); //  token 

  useEffect(() => {
    console.log('Auth Token:', authToken); // Token status checker
  }, [authToken]);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {authToken ? <AppNavigator /> : <AuthScreen />}
      </NavigationContainer>
    </QueryClientProvider>
  );
}
