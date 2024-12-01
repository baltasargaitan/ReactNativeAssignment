React Native Strava App (Manual Data)

## Description

Below is a React Native application using **Expo**, **Zustand** for state management, and **React Query** to handle data fetching and caching. This application simulates activity data for a Strava-like application and contains two main screens: **Activities** and **Monthly Stats**. OAuth authentication is implemented, and it can fetch data from the **Strava API**-if used-or **manual activity data**.

Excerpt from README: The application gracefully handles network errors and also provides a seamless user experience while fetching data.

## Features

- **OAuth Authentication**: A user can sign in with OAuth - securely manages token and refresh functionality
- **Activities Screen**: Shows recent activities along with name, date, distance, time, elevation gain
- **Monthly Stats Screen**: shows aggregated data of last 3 months(total distance, total time, total elevation gain).
- **Manual Data Handling**: If the app does not use Strava, it simulates activities using manually entered data.
- **Deep Linking**: The app supports deep linking for OAuth redirection.

## Technologies

- **Expo**: A framework for building React Native apps with great developer tools.
- **Zustand**: A small and simple state management library.
- **React Query**: A powerful data fetching and caching library.
- **Strava API**: Fetches real-time activity data (when available).
- **OAuth**: Secure authentication.
- **React Navigation**: For navigating between the screens of the app.

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/baltasargaitan/ReactNativeAssignament.git
   cd react-native-app
   ```

2. **Install dependencies**:
   Make sure **Node.js** and **Expo CLI** are installed. Otherwise, follow the installation at the link: [Expo](https://docs.expo.dev/get-started/installation/).

   ```bash
   npm install
   ```

3. **Run the app**:
Start the application  with Expo:

    ```bash
    expo start
    ```

4. **Authentication**:
    If using Strava, replace OAuth credentials in the relevant files according to the Strava API documentation. Otherwise, the application uses manual data for activities.

## Manual Data Configuration

If you do not use Strava, the app will fall back to a list of pre-configured activities. These can be found and changed in the file `data/activities.js`.

## Features Breakdown

### Authentication

- **OAuth Login**: Users log in using either Strava or a mock login.
- **Token Handling**: App handles authentication tokens properly, with automatic refresh.
- **Deep Linking**: Handles OAuth redirect via deep linking for seamless user experience.

### Activities Screen

- **Recent Activities**: A list of the user's recent activities.
- **Activity Details**: Activity name, date, distance, time, and elevation gain.

### Monthly Stats Screen

- **Aggregated Data**: Statistics for each of the last 3 months on total distance, total time, total elevation gain
- **Navigation**: Tap a month to see activities from that month.

### Data Management

- **React Query**: Fetching and caching of activity and monthly data.
- **Zustand**: Handles other state, such as user preferences and login state.

## Error Handling

- **Network Errors**: If data fetching fails, an error message is displayed.
- **Loading States**: The app displays loading spinners while fetching data.

## UI/UX

The UI is simple and user-friendly, designed to present activity data clearly without distractions.

## Known Issues and Future Improvements

- **Strava Integration**: App simulates data but has not fully tested the live Strava API integration
- **UI Enhancements**: The UI could be further enhanced with more advanced styling and animations.

## Running in Production

To build a production APK:

```bash
expo build:android
