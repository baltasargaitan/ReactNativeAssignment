import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchActivities = async () => {
  const response = await axios.get('https://www.strava.com/api/v3/athlete/activities', {
    headers: { Authorization: `Bearer TU_ACCESS_TOKEN` },
  });
  return response.data;
};

export default function ActivitiesScreen() {
  const { data: activities, isLoading, error } = useQuery(['activities'], fetchActivities);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching activities</Text>;

  return (
    <FlatList
      data={activities}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>Name: {item.name}</Text>
          <Text>Date: {new Date(item.start_date).toDateString()}</Text>
          <Text>Distance: {item.distance}m</Text>
        </View>
      )}
    />
  );
}



  



const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});




if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;