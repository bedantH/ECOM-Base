import React from 'react'
import {View, Button, TextInput} from 'react-native';

export const QuantityStepper = () => {
  return (
    <View>
        <Button 
                title="-"
            />
            <TextInput 
                value="1"
            />
            <Button
                title="+"
            />
    </View>
  )
}
