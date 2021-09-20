import MaterialCommunityIcons from '@expo/vector-icons/build/MaterialCommunityIcons';
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, TouchableHighlight, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import colors from '../../config/colors';
import Text from '../Text';

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
            <Text style={styles.title}>{title}</Text>
            {description && (
              <Text style={styles.description}>{description}</Text>
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.medium}
            name='chevron-right'
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    flex: 1,
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
