import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const Geoguesser = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImagePicker = () => {
    const options = {
      title: 'Take a Picture',
      mediaType: 'photo',
      quality: 0.5,
    };

    ImagePicker.launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.uri) {
        setProfileImage(response.uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      {profileImage && (
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
      )}
      <TouchableOpacity onPress={handleImagePicker}>
        <Text>Take a Picture</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
});

export default Geoguesser;
