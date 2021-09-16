import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

interface ListItemProps {
  title: string;
  description: string;
  image: ImageSourcePropType;
}

function ListItem({ title, description, image }: ListItemProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.description}>{description}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  description: {
    color: colors.medium,
  },
  title: {
    fontWeight: '500',
  },
});

export default ListItem;
