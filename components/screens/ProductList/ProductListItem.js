import { Pressable, Image, Text, View } from "react-native"
import { commonStyle, productListItem } from "../../../styles";
export const ProductListItem = ({ id, title, description, price, image, rating, navigation }) => {

    const handlePressEvent = () => {
        navigation.navigate("productDetailsPage")
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
            />
            <View style={productListItem.productDetails}>
                <Text style={productListItem.productDetails.rating}>
                    {rating}
                </Text>
                <Text style={productListItem.productDetails.title}>
                    {title}
                </Text>
                <Text style={productListItem.productDetails.description}>
                    {description}
                </Text>
                <Text style={productListItem.productDetails.price}>
                    {price}
                </Text>
            </View>
        </Pressable>
    )
}