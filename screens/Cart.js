import React from "react";
import { SafeAreaView, Button } from "react-native";
import { QuantityStepper } from "../components";

function Cart() {
    return (
        <SafeAreaView>
            <QuantityStepper />
        </SafeAreaView>
    )
}

export { Cart }