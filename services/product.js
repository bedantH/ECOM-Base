import axios from "axios";

// const product = axios.create("https://fakestoreapi.com")

const config = {
    baseName: "https://fakestoreapi.com/products"
}

export const listAllProducts = () => axios.get("https://fakestoreapi.com/products")


export const getSingleProduct = ({ id }) => axios.get(`https://fakestoreapi.com/products/${id}`)

// export const listAllProducts = () => product.get("/products");

// export const getSingleProduct = ({ id }) => product.get(`/product/${id}`)
