import { Pressable, Image, Text, View, Touchable, TouchableOpacity, TouchableWithoutFeedback } from "react-native"
import { commonStyle, productListItem } from "../../../styles";
import Ionicons from "react-native-vector-icons/Ionicons";

export const ProductListItem = ({ id, title, description, price, image, rating, navigation }) => {

    const handlePressEvent = () => {
        navigation.navigate("productDetailsPage", {
            productId: id
        })
    }

    return (
        <Pressable
            style={{
                ...productListItem.container,
                ...commonStyle.horizontalAlignCenter,
            }}
            onPress={handlePressEvent}
        >

            <Image
                source={{ uri: image }}
                style={productListItem.productImage}
                resizeMode="center"

            />
            <View style={productListItem.productDetails}>
                <Text style={productListItem.productDetails.rating} >
                    {rating.rate}
                </Text>
                <Text style={productListItem.productDetails.title}>
                    {title.split(" ").slice(0, 10).join(" ")}
                </Text>
                <Text style={productListItem.productDetails.description}>
                    {description.split(" ").slice(0, 10).join(" ")}...
                </Text>
                <Text style={productListItem.productDetails.price}>
                    ${price}
                </Text>
            </View>


        </Pressable>
    )
}