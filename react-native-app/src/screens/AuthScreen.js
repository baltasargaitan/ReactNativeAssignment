import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, ImageBackground } from 'react-native';
import useStore from '../state/useStore'; // Global state management

export default function AuthScreen() {
  const setAuthToken = useStore((state) => state.setAuthToken); // Function to set authToken

  // Handle login and set the token
  const handleLogin = () => {
    const mockToken = 'mock-token-for-assignment';
    setAuthToken(mockToken); // Update token in Zustand state
    Alert.alert('Login Successful', 'You are now logged in!');
  };

  return (
    <ImageBackground
      source={require('../../assets/background.png')} // Background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Strava App</Text>
        <Text style={styles.subtitle}>Track your activities and reach your goals</Text>
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login with Mock Token</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // Background image styling
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover', // Ensures the background image covers the whole screen
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.85)', // Subtle background to make content stand out
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 10, // Elevation for Android
  },

  title: {
    fontSize: 36,
    fontWeight: '700', // Bold text for the title
    color: '#2E3A59', // A professional and modern dark color
    marginBottom: 15,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 18,
    color: '#607D8B', // Subtle, modern grey color for the subtitle
    marginBottom: 40,
    textAlign: 'center',
    fontStyle: 'italic',
  },

  button: {
    backgroundColor: '#4CAF50', // Elegant green color for the button
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 5, // Adding slight shadow for button hover effect
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '600', // Semi-bold text for button
    color: '#fff', // White text for contrast
    textAlign: 'center',
  },
});
