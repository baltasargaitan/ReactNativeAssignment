import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native'; // Navigation hook
import useStore from '../state/useStore'; // Zustand for global state (authToken)

// Simulating fetching monthly stats
const fetchMonthlyStats = async ({ queryKey }) => {
  const [, token] = queryKey; // Extract token from the queryKey
  if (!token) throw new Error('No token provided');

  // Simulated data
  return [
    { name: 'January', total_distance: 100000, total_time: 1500, total_elevation: 500 },
    { name: 'February', total_distance: 120000, total_time: 1600, total_elevation: 600 },
    { name: 'March', total_distance: 110000, total_time: 1550, total_elevation: 550 },
    { name: 'April', total_distance: 770000, total_time: 7005, total_elevation: 5500 },
    { name: 'May', total_distance: 100000, total_time: 1700, total_elevation: 750 },
    { name: 'June', total_distance: 150000, total_time: 1800, total_elevation: 850 },
    { name: 'July', total_distance: 9500000, total_time: 1600, total_elevation: 600 },
    { name: 'August', total_distance: 6600, total_time: 1500, total_elevation: 6500 },
    { name: 'September', total_distance: 400, total_time: 1600, total_elevation: 300 },
    { name: 'October', total_distance: 100, total_time: 10, total_elevation: 100 },
    { name: 'November', total_distance: 97775000, total_time: 1600, total_elevation: 61100 },
    { name: 'December', total_distance: 90000005000, total_time: 160000, total_elevation: 78500 },
  ];
};

export default function MonthlyStatsScreen() {
  const authToken = useStore((state) => state.authToken); // Get authToken from Zustand store
  const navigation = useNavigation(); // Navigation hook

  // Query to fetch monthly stats based on authToken
  const { data: stats, isLoading, error } = useQuery({
    queryKey: ['monthlyStats', authToken], // Pass authToken as part of queryKey
    queryFn: fetchMonthlyStats,
    enabled: !!authToken, // Only fetch data if there is a token
  });

  if (isLoading) return <ActivityIndicator size="large" color="#007AFF" />; // Loading spinner
  if (error) return <Text style={styles.errorText}>{error.message}</Text>; // Display error message

  // Navigate to Activities screen with the selected month
  const handleMonthPress = (month) => {
    navigation.navigate('Activities', { month });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {stats.map((month, index) => (
        <View key={index} style={styles.card} onTouchEnd={() => handleMonthPress(month)}>
          <Text style={styles.monthName}>{month.name}</Text>
          <Text style={styles.statText}>Total Distance: {month.total_distance} meters</Text>
          <Text style={styles.statText}>Total Time: {month.total_time} minutes</Text>
          <Text style={styles.statText}>Total Elevation Gain: {month.total_elevation} meters</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  monthName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  statText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
