import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MonthlyStatsScreen from '../screens/MonthlyStatsScreen';
import ActivitiesScreen from '../screens/ActivitiesScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="MonthlyStats">
      <Stack.Screen name="MonthlyStats" component={MonthlyStatsScreen} />
      <Stack.Screen name="Activities" component={ActivitiesScreen} />
    </Stack.Navigator>
  );
}
