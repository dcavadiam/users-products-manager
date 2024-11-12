'use client'
import { Product } from "@/types/product";
import { createContext, useContext, useState } from "react";
import PRODUCTS from "../mocks/products.json";

interface ProductContextProps {
    products: Product[];
    setProducts: (product: Product[]) => void;
}

export const ProductContext = createContext<ProductContextProps>({
    products: [],
    setProducts: () => { },
});

export function ProductProvider({ children }: { children: React.ReactNode }) {
    const ISSERVER = typeof window === "undefined"; // Check if the code is running on the server
    const [products, setProducts] = useState<Product[]>(ISSERVER ? PRODUCTS : localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products") as string) : PRODUCTS);

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProduct() {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProduct must be used within a ProductProvider.");
    }
    return context;
}