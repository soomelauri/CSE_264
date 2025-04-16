'use client'

import { useShoppingCart } from "../context/shoppingCartContext"

let rawProducts = {
    "products": [
      {
        "id": 1,
        "name": "Wireless Headphones",
        "description": "Premium noise-cancelling wireless headphones with 30-hour battery life",
        "price": 199.99,
        "category": "Electronics",
        "imageUrl": "/images/headphones.jpg",
        "stock": 15
      },
      {
        "id": 2,
        "name": "Smart Watch",
        "description": "Fitness tracker with heart rate monitor and sleep analysis",
        "price": 149.99,
        "category": "Electronics",
        "imageUrl": "/images/smartwatch.jpg",
        "stock": 20
      },
      {
        "id": 3,
        "name": "Portable Bluetooth Speaker",
        "description": "Waterproof speaker with 360° sound and 12-hour playtime",
        "price": 79.99,
        "category": "Electronics",
        "imageUrl": "/images/speaker.jpg",
        "stock": 25
      },
      {
        "id": 4,
        "name": "Leather Wallet",
        "description": "Handcrafted genuine leather wallet with RFID protection",
        "price": 49.99,
        "category": "Accessories",
        "imageUrl": "/images/wallet.jpg",
        "stock": 30
      },
      {
        "id": 5,
        "name": "Stainless Steel Water Bottle",
        "description": "Vacuum insulated bottle that keeps drinks cold for 24 hours",
        "price": 34.99,
        "category": "Home",
        "imageUrl": "/images/bottle.jpg",
        "stock": 40
      },
      {
        "id": 6,
        "name": "Wireless Charging Pad",
        "description": "Fast-charging compatible with all Qi-enabled devices",
        "price": 29.99,
        "category": "Electronics",
        "imageUrl": "/images/charger.jpg",
        "stock": 18
      },
      {
        "id": 7,
        "name": "Blue Light Blocking Glasses",
        "description": "Stylish frames that reduce eye strain from screen time",
        "price": 39.99,
        "category": "Accessories",
        "imageUrl": "/images/glasses.jpg",
        "stock": 22
      },
      {
        "id": 8,
        "name": "Bamboo Cutting Board",
        "description": "Sustainable kitchen essential with juice groove and handles",
        "price": 24.99,
        "category": "Home",
        "imageUrl": "/images/cuttingboard.jpg",
        "stock": 35
      }
    ]
  }

export default function Store() {
    // normally useEffect fetches data from db

    let products = rawProducts.products

    const { cartItems, addToCart, cartTotal } = useShoppingCart()

    const pleaseAdd = (id) => {
        let newItems = products.filter(p => p.id === id)
        addToCart(newItems[0])
    }

    return (
        <div>
            <h1>Store</h1>
            {products.map(product => (
                <li key={product.id}>
                    {product.name}: {product.description} ${product.price}
                    <button onClick={() => pleaseAdd(product.id)}>Add To Cart</button>
                </li>
            ))}

            <h3>My Cart</h3>
            {cartItems.map(item => (
                <li key={item.id}>{item.name}: {item.quantity}</li>
            ))}
            <h4>Cart Total: ${cartTotal}</h4>

        </div>
    )
}
