import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

const useLocation = () => {
  const [location, setLocation] =
    useState<{ latitude: number; longitude: number }>();

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { granted } = await Location.requestForegroundPermissionsAsync();
        if (!granted) return;

        const {
          coords: { latitude, longitude },
        } = await Location.getLastKnownPositionAsync();

        setLocation({ latitude, longitude });
      } catch (error) {
        console.log(error);
      }
    };
    getLocation();
  }, []);

  return location;
};

export default useLocation;

const styles = StyleSheet.create({});
