import React, { useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import ImageInput from './ImageInput';

interface ImageInputListProps {
  uris: string[];
  onRemoveImage: (uri: string) => void;
  onAddImage: (uri: string) => void;
}

const ImageInputList = ({
  uris = [],
  onRemoveImage,
  onAddImage,
}: ImageInputListProps) => {
  const scrollView = useRef<ScrollView>();

  return (
    <View>
      <ScrollView
        style={styles.container}
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current?.scrollToEnd()}
      >
        {uris.map((uri) => (
          <View key={uri} style={styles.image}>
            <ImageInput uri={uri} onChangeImage={() => onRemoveImage(uri)} />
          </View>
        ))}
        <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
      </ScrollView>
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginHorizontal: 5,
  },
});
