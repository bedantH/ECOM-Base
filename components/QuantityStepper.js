import React from 'react'
import { View, Button, TextInput, TouchableHighlight, Text } from 'react-native';
import { quantityStepper } from '../styles';

export const QuantityStepper = () => {
  return (
    <View style={quantityStepper.stepperContainer}>
      <TouchableHighlight style={quantityStepper.stepper}>
        <Text>-</Text>
      </TouchableHighlight>
      <TextInput
        value="1"
      />
      <TouchableHighlight style={quantityStepper.stepper}>
        <Text>+</Text>
      </TouchableHighlight>
    </View>
  )
}
