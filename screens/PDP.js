import React from "react";
import {SafeAreaView, Button} from "react-native";
import { Ratings } from "../components";

function PDP () {
    return (
        <SafeAreaView>
            <Ratings />
            <Button title="Add to Cart" />
        </SafeAreaView>
    )
} 

export {PDP}