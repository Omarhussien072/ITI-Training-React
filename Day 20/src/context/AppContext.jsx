import axios from "axios";
import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
    let [user, setUser] = useState({
        username: 'omar',
        age: 23,
    });

    let [products, setProducts] = useState([{}]);
    const getProducts = async () => {
        let { data } = await axios('https://fakestoreapi.com/products');
        setProducts(data);
        return data;
    };

    return (
        <>
            <AppContext.Provider value={{ user, products, getProducts }}>
                {children}
            </AppContext.Provider>
        </>
    );
}
