import React from "react";
import { View, Button, TextInput, StyleSheet, SafeAreaView } from "react-native";

export const PLP = ({ navigation }) => {

    const showProductDetailsPage = () => {
        navigation.navigate("PDP")
    }

    return (
        <SafeAreaView>

            <Button
                title="Hello World"
                onPress={showProductDetailsPage}
            />
        </SafeAreaView>
    )
} 