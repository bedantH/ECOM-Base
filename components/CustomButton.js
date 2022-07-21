import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Button, Alert } from 'react-native';

const CustomButton = () => {
  return (
    <View>
        <Text>
            Hello World!
        </Text>
        <Button
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}
        />
    </View>
  )
}

export default CustomButton