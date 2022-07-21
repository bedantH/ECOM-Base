import React from 'react'
import {View, Button, TextInput, TouchableHighlight, Text} from 'react-native';
import { styles } from '../styles/components/quantityStepper.styles';

export const QuantityStepper = () => {
  return (
    <View style={styles.stepperContainer}>
        <TouchableHighlight style={styles.stepper}>
            <Text>-</Text>
        </TouchableHighlight>
        <TextInput
            value="1"
        />
         <TouchableHighlight style={styles.stepper}>
            <Text>+</Text>
        </TouchableHighlight>
    </View>
  )
}
