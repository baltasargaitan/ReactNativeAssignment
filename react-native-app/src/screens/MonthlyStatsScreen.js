import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchMonthlyStats = async () => {
  const response = await axios.get('TU_ENDPOINT_PARA_STATS', {
    headers: { Authorization: `Bearer TU_ACCESS_TOKEN` },
  });
  return response.data;
};

export default function MonthlyStatsScreen() {
  const { data: stats, isLoading, error } = useQuery(['monthlyStats'], fetchMonthlyStats);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching stats</Text>;

  return (
    <View style={styles.container}>
      {stats.map((month, index) => (
        <View key={index} style={styles.card}>
          <Text>Month: {month.name}</Text>
          <Text>Total Distance: {month.total_distance}m</Text>
          <Text>Total Time: {month.total_time}min</Text>
        </View>
      ))}
    </View>
  );
}



const { data: stats, isLoading, error } = useQuery(['monthlyStats'], fetchMonthlyStats);


const styles = StyleSheet.create({
  container: { padding: 10 },
  card: { marginBottom: 10, padding: 10, borderWidth: 1, borderRadius: 5 },
});


if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
