import React from 'react'
import { View, Text } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from '../styles/components/ratings.styles';

export const Ratings = ({ rating }) => {
  return (
    <View style={styles.ratingWrapper}>
        <Text style={styles.outerText}>
            <Ionicons name="star" />
            <Text style={styles.innerText}>
                {rating}
            </Text>
        </Text>
    </View>
  )
}