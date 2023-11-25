import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

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
];


const Leaderboard = () => {
  // renderItem function for FlatList
  const renderItem = ({ item }) => (
    <View style={styles.userContainer}>
      <Image source={item.medal} style={styles.medalImage} />
      <Image source={item.image} style={styles.userImage} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <View style={styles.userStats}>
          <Text style={styles.userStatsText}>{item.matches} Matches</Text>
          <Text style={styles.userStatsText}>{item.totalPoints} Points</Text>
          <Text style={styles.userStatsText}>{item.wins} Wins</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>Leaderboard</Text>
      <FlatList
        data={leaderboard.sort((a, b) => b.totalPoints - a.totalPoints)}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
  centeredText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D0F13',
    marginBottom: 20,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginBottom: 15,
    elevation: 3, // for android shadow
    shadowColor: '#000', // for ios shadow
    shadowOffset: { width: 0, height: 2 }, // for ios shadow
    shadowOpacity: 0.1, // for ios shadow
    shadowRadius: 2, // for ios shadow
  },
  medalImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0D0F13',
  },
  userStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  userStatsText: {
    fontSize: 14,
    color: '#656565',
  },
  list: {
    width: '100%',
  },
});

export default Leaderboard;
