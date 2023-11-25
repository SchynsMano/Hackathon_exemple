import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const leaderboard = [
  {
    name: 'Matsco',
    position: 1,
    matches: 15,
    totalPoints: 120,
    wins: 8,
    image: require('../assets/personne2.avif'),
    medal: require('../assets/or.png'),
  },
  {
    name: 'John',
    position: 2,
    matches: 18,
    totalPoints: 140,
    wins: 10,
    image: require('../assets/personne1.avif'),
    medal: require('../assets/argent.png'),
  },
  {
    name: 'Ernesto',
    position: 3,
    matches: 20,
    totalPoints: 180,
    wins: 12,
    image: require('../assets/personne3.avif'),
    medal: require('../assets/bronze.png'),
  },
  // Add more users as needed
];

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>Leaderboard</Text>
      {leaderboard.map((user, index) => (
        <View key={index} style={styles.userContainer}>
          <View style={styles.userData}>
            <Text>{user.position}</Text>
            <Image source={user.image} style={styles.userImage} />
            <Text>{user.name}</Text>
          </View>
          <View style={styles.scoreContainer}>
            <Text>{user.matches} Matches</Text>
            <Text>{user.totalPoints} Points</Text>
            <Text>{user.wins} Wins</Text>
            <Image source={user.medal} style={styles.medalImage} />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'gray',
    paddingTop: 20,
  },
  centeredText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
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
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  scoreContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  medalImage: {
    width: 20,
    height: 20,
    marginTop: 5,
  },
});

export default Profile;
