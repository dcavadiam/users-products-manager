'use client'
import { Product } from "@/types/product";
import { createContext, useContext, useState } from "react";
import PRODUCTS from "../mocks/products.json";

interface ProductContextProps {
    products: Product[];
    setProducts: (product: Product[]) => void;
    searchedProducts: Product[];
    setSearchedProducts: (product: Product[]) => void;
    searchProducts: string;
    setSearchProducts: (search: string) => void;
}

// Create a product context
export const ProductContext = createContext<ProductContextProps>({
    products: [],
    setProducts: () => { },
    searchedProducts: [],
    setSearchedProducts: () => { },
    searchProducts: "",
    setSearchProducts: () => { }
});

// Product provider component
export function ProductProvider({ children }: { children: React.ReactNode }) {
    const ISSERVER = typeof window === "undefined"; // Check if the code is running on the server
    const [products, setProducts] = useState<Product[]>(ISSERVER ? PRODUCTS : localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products") as string) : PRODUCTS);
    const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
    const [searchProducts, setSearchProducts] = useState<string>("");

    return (
        <ProductContext.Provider value={{ products, setProducts, searchedProducts, setSearchedProducts, searchProducts, setSearchProducts }}>
            {children}
        </ProductContext.Provider>
    );
}

// Hook to access the product context
export function useProduct() {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProduct must be used within a ProductProvider.");
    }
    return context;
}