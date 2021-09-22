import LottieView from 'lottie-react-native';
import React from 'react';

interface ActivityIndicatorProps {
  animating: boolean;
}

const ActivityIndicator = ({ animating = false }: ActivityIndicatorProps) => {
  if (!animating) return null;

  return (
    <LottieView
      source={require('../assets/animations/loader.json')}
      autoPlay
      loop
    />
  );
};

export default ActivityIndicator;
