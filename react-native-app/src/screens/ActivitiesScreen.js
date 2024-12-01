import React from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useQuery } from '@tanstack/react-query';

// Simulate fetching activities for the selected month
const fetchActivities = async (month) => {
  const activities = [
    { id: 1, name: 'Running', date: '2024-01-10', distance: 5000, time: 25, elevation: 100 },
    { id: 2, name: 'Cycling', date: '2024-01-11', distance: 15000, time: 45, elevation: 200 },
    { id: 3, name: 'Swimming', date: '2024-02-10', distance: 2000, time: 30, elevation: 50 },
    { id: 4, name: 'Running', date: '2024-01-20', distance: 10000, time: 50, elevation: 300 },
    { id: 5, name: 'Cycling', date: '2024-02-15', distance: 20000, time: 70, elevation: 250 },
    { id: 6, name: 'Swimming', date: '2024-03-05', distance: 2500, time: 40, elevation: 60 },
    { id: 7, name: 'Running', date: '2024-03-25', distance: 8000, time: 35, elevation: 200 },
    { id: 8, name: 'Cycling', date: '2024-04-10', distance: 12000, time: 55, elevation: 300 },
    { id: 9, name: 'Swimming', date: '2024-04-12', distance: 3500, time: 40, elevation: 80 },
    { id: 10, name: 'Running', date: '2024-05-01', distance: 6000, time: 28, elevation: 150 },
    { id: 11, name: 'Cycling', date: '2024-06-10', distance: 15000, time: 60, elevation: 500 },
    { id: 12, name: 'Swimming', date: '2024-07-12', distance: 3000, time: 30, elevation: 100 },
  ];

  // Filter activities based on the month name
  return activities.filter((activity) => {
    const activityMonth = new Date(activity.date).toLocaleString('default', { month: 'long' }).toLowerCase();
    return activityMonth === month.toLowerCase(); // Compare month names
  });
};

export default function ActivitiesScreen({ route }) {
  const { month } = route.params;  // Get the month from the navigation parameters

  // Fetch activities for the selected month using React Query
  const { data: activities, isLoading, error } = useQuery({
    queryKey: ['activities', month.name],  // Pass month as part of the query key
    queryFn: () => fetchActivities(month.name),  // Fetch the activities for the given month
  });

  // Display a loading indicator while fetching data
  if (isLoading) return <ActivityIndicator size="large" color="#007AFF" />;

  // Show an error message if there was a problem with fetching the data
  if (error) return <Text style={styles.errorText}>Error fetching data</Text>;

  // If no activities found, display a message
  if (activities.length === 0) {
    return <Text style={styles.noDataText}>No activities found for {month.name}</Text>;
  }

  // Render the list of activities
  return (
    <FlatList
      data={activities}  // Ensure that 'activities' is an array
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.activityTitle}>{item.name}</Text>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.details}>Distance: {item.distance} meters</Text>
          <Text style={styles.details}>Time: {item.time} min</Text>
          <Text style={styles.details}>Elevation: {item.elevation} meters</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',  // White background for each card
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',  // Shadow color for iOS
    shadowOffset: { width: 0, height: 4 },  // Shadow position
    shadowOpacity: 0.1,  // Shadow opacity
    shadowRadius: 5,  // Shadow blur radius
    elevation: 3,  // Shadow effect for Android
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',  // Dark color for activity name
  },
  date: {
    fontSize: 14,
    color: '#666',  // Lighter color for the date
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    color: '#444',  // Dark color for activity details
  },
  errorText: {
    color: 'red',  // Red color for error text
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  noDataText: {
    color: '#444',  // Text color for no data message
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});
