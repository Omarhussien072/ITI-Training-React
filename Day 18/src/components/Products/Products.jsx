import { useState } from "react";
import Recieve from "../Recieve/Recieve";

export default function Products() {
    let [products,setProducts] = useState([
        {
        id:1,
        productName: 'GTX 5090 SUPER',
        price: 5000,
        description: 'The most powerfull gpu ever made',
        onSale: true,   
        },
        {
        id:2,
        productName: 'GTX 4090 SUPER',
        price: 4000,
        description: 'Last generation powerfull gpu',
        onSale: true,   
        },
        {
        id:3,
        productName: 'GTX 3090 SUPER',
        price: 3000,
        description: 'powerfull GPU',
        onSale: false,   
        },
        {
        id:4,
        productName: 'GTX 1080 TI',
        price: 1500,
        description: 'The Goat.',
        onSale: false,   
        },


]);

    let deleteProduct = (productID) => {
        setProducts(products.filter((product) => {
            return product.id !== productID
        }))
    }
    return (
        <>
        <h1 className="text-center bg-primary p-2">Products</h1>
        <div className="container d-flex justify-content-center align-items-center flex-wrap gap-5 p-4 mt-4 bg-primary">
            {
                products.map((product) => 
                    <Recieve key={product.id} productDetails={product} deleteProduct={deleteProduct}/>
                )
            }
        </div>
        </>
    );
}
