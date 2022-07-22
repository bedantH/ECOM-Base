import React, {useState} from 'react'
import { View, Button, TextInput, TouchableOpacity, Text } from 'react-native';
import { quantityStepper } from '../styles';

export const QuantityStepper = () => {

    const [ counter, setCounter ] = useState(1);

    const add = () => {
        if (counter < 10){
            setCounter(counter+1);
        }
    }

    const sub = () => {
        if (counter > 1){
            setCounter(counter-1);
        }
    }
    
    return (
        <View style={quantityStepper.stepperContainer}>
            <TouchableOpacity style={quantityStepper.stepper} onPress={sub}>
                <Text style={[quantityStepper.textCenter, quantityStepper.sub]}>-</Text>
            </TouchableOpacity>
            <TextInput style={quantityStepper.textInput}
                value={counter.toString()}
            />
            <TouchableOpacity style={quantityStepper.stepper} onPress={add}>
                <Text style={[quantityStepper.textCenter, quantityStepper.add]}>+</Text>
            </TouchableOpacity>
        </View>
    )
}
