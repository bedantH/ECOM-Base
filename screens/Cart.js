import React from "react";
import {
    SafeAreaView,
    Text,
    Platform
} from "react-native";
import Constants from "expo-constants";

function Cart() {
    return (
        <SafeAreaView style={{ marginTop: Constants.statusBarHeight }}>
            <Text>This is cart section!</Text>
        </SafeAreaView>
    )
}

export { Cart }