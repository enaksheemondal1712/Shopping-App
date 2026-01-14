"use client";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";


export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

export const AppContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({}); // Stores {productId: quantity}
    const currency = "$";
    const delivery_fee = 10;

    // --- FIX: Define the addToCart function here ---
    const addToCart = async (itemId) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
        // toast.success("Added to cart!"); 
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            if (cartItems[items] > 0) {
                totalCount += cartItems[items];
            }
        }
        return totalCount;
    };

    const getProductsData = async () => {
        try {
            const response = await axios.get('/api/product/list');
            if (response.data.success) {
                setProducts(response.data.products);
            }
        } catch (error) {
            console.error("Error fetching products:", error.message);
        }
    };

    useEffect(() => {
        getProductsData();
    }, []);

    const value = {
        products,
        currency,
        delivery_fee,
        cartItems,
        setCartItems,
        getCartCount,
        addToCart // --- FIX: Make sure this is included in the value object ---
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};