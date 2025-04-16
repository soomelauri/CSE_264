'use client'

import { createContext, useContext, useState } from "react"

const ShoppingCartContext = createContext()

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}) {
    const [cartItems, setCartItems] = useState([])

    const cartTotal = cartItems.reduce((cost, item) => (item.price * item.quantity) + cost, 0).toFixed(2)

    const addToCart = (newItem) => {
        setCartItems((currItems) => {

            const isInCart = currItems.find((cartItem) => cartItem.id === newItem.id)

            if (isInCart) {
                return currItems.map((cartItem) => cartItem.id === newItem.id ? 
            {...cartItem, quantity: cartItem.quantity+1} : 
            cartItem)

            } else {
                return [...currItems, {...newItem, quantity: 1}]
            }
        })
    }


    return (
        <ShoppingCartContext.Provider value={{cartItems, cartTotal, addToCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
