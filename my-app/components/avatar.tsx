import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Progress } from '@chakra-ui/react';
import { Color, FontFamily, FontSize } from './GlobalStyles';

const Avatar = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatarImage}
        contentFit='cover'
        source={require('../assets/avatar.jpg')}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.userName}>John Decorte</Text>
        <Text style={styles.userLevel}>Level 10.77</Text>
        <Progress value={88} size='xs' colorScheme='pink' style={styles.progressIndicator}/>
        <Text style={styles.cryptocurrencyAmount}>644 ₳</Text>
        <Text style={styles.coinAmount}>5©</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 233,
    height: 50,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  detailsContainer: {
    marginLeft: 20,
    width: 163,
    height: 36,
  },
  userName: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 15,
    color: Color.colorWhite,
    fontFamily: FontFamily.roundedMplus1c,
  },
  userLevel: {
    position: 'absolute',
    top: '58.33%',
    left: 0,
    fontSize: FontSize.size_3xs,
    color: Color.colorWhite,
    fontFamily: FontFamily.roundedMplus1c,
  },
  progressIndicator: {
    position: 'absolute',
    top: '80.56%',
    left: '36.2%',
    right: '-0.61%',
    bottom: '13.89%',
    width: '64.42%',
    height: '5.56%',
  },
  cryptocurrencyAmount: {
    position: 'absolute',
    left: 134,
    top: 6,
    fontSize: FontSize.size_3xs,
    color: Color.colorWhite,
    fontFamily: FontFamily.roundedMplus1c,
  },
  coinAmount: {
    position: 'absolute',
    left: 107,
    top: 6,
    fontSize: FontSize.size_3xs,
    color: Color.colorWhite,
    fontFamily: FontFamily.roundedMplus1c,
  },
});

export default Avatar;
