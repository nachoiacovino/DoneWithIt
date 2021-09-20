import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect } from 'react';
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import colors from '../config/colors';

interface ImageInputProps {
  uri?: string;
  onChangeImage: (uri: string) => void;
}

const ImageInput = ({ uri, onChangeImage }: ImageInputProps) => {
  useEffect(() => {
    const requestPermission = async () => {
      const { granted } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!granted)
        alert('You need to enable permission to access the library.');
    };
    requestPermission();
  }, []);

  const handlePress = () => {
    if (!uri) selectImage();
    else
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        { text: 'Yes', onPress: () => onChangeImage('') },
        { text: 'No' },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {uri ? (
          <Image source={{ uri }} style={styles.image} />
        ) : (
          <MaterialCommunityIcons
            name='camera'
            size={40}
            color={colors.medium}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    width: 100,
    justifyContent: 'center',
    marginVertical: 10,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
