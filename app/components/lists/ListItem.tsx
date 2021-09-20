import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, TouchableHighlight, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import colors from '../../config/colors';
import AppText from '../AppText';

interface ListItemProps {
  title: string;
  description?: string;
  image?: ImageSourcePropType;
  Icon?: JSX.Element;
  onPress: () => void;
  renderRightActions?: () => JSX.Element;
}

const ListItem = ({
  title,
  description,
  image,
  Icon,
  onPress,
  renderRightActions,
}: ListItemProps) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {Icon && Icon}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {description && (
              <AppText style={styles.description}>{description}</AppText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
  },
  description: {
    color: colors.medium,
  },
});

export default ListItem;
