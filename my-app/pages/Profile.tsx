import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const leaderboard = [
  {
    name: 'Matsco',
    position: 1,
  },
  // Add more users as needed
];

const Profile = () => {
  const navigation = useNavigation();

  const navigateToAnotherPage = () => {
    // Navigate to another screen with the panel parameter
    navigation.navigate('Connection', { panel: 'details' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../assets/goldo.jpg')} // Replace with your image path
          style={styles.profileImage}
        />
        <Text style={styles.userName}>{leaderboard[0].name}</Text>
        <Text style={styles.topText}>Top:</Text>
        <TouchableOpacity onPress={navigateToAnotherPage}>
          <Image
            source={require('../assets/reglages.png')} // Replace with your image path
            style={styles.medalImage}
          />
        </TouchableOpacity>
        {leaderboard.map((user, index) => (
          <View key={index} style={styles.userContainer}>
            <View style={styles.userData}>
              <Text style={styles.positionText}>{user.position}</Text>
              {user.position === 1 && (
                <Image
                  source={require('../assets/or.png')} // Replace with your image path
                  style={styles.medalImage}
                />
              )}
              {user.position === 2 && (
                <Image
                  source={require('../assets/argent.png')} // Replace with your image path
                  style={styles.medalImage}
                />
              )}
              {user.position === 3 && (
                <Image
                  source={require('../assets/bronze.png')} // Replace with your image path
                  style={styles.medalImage}
                />
              )}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 15, 20, 1)', // Darker shade of blue
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    marginTop: 50, // Add some margin from the top
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  topText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 15,
  },
  userData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  positionText: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  medalImage: {
    width: 30, // Adjust width as needed
    height: 30, // Adjust height as needed
    marginLeft: 10, // Add some margin to separate the medals
  },
  description: {
    color: 'white',
    fontSize: 18,
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default Profile;
