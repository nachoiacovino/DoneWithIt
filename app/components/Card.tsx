import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import colors from '../config/colors';
import Text from './Text';

interface CardProps {
  title: string;
  description: string;
  image: ImageSourcePropType;
  onPress: () => void;
}

const Card = ({ title, description, image, onPress }: CardProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  description: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
