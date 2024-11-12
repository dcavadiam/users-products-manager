'use client';

import { DeleteButton } from "./DeleteButton";
import { Card } from "./ui/card"

import { Product } from "@/types/product";
import { useProduct } from "@/context/product";
import { EditProductDialog } from "@/containers/editProductDialog";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }: { product: Product }) => {
    const { id, name, price, stock } = product;
    const { products, setProducts } = useProduct();

    // State to ensure the component is only rendered on the client
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Ensure the component is only rendered on the client
    }, []);

    const handleDeleteProduct = (productId: string) => {
        const updatedProducts = products.filter(({ id }) => id !== productId);
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
    }
    if (!isClient) return null; // Only render the component on the client

    return (
        <Card className="w-full max-w-[300px] bg-white shadow-md rounded-lg">
            <div className="flex flex-col  justify-between p-4">
                <div className="flex items-center justify-between max-sm:flex-col-reverse max-sm:items-start sm:gap-2 mb-2">
                    <span className="text-lg font-semibold">{name}</span>
                    {
                        stock === 0 ? <span className="bg-red-200 bg-opacity-55 px-2 rounded-sm text-red-800 font-semibold text-sm">Not available</span> : <span className="bg-green-200 bg-opacity-55 px-2 rounded-sm text-green-800 font-semibold text-sm">Available</span>
                    }
                </div>
                <span className="text-3xl font-semibold ">${price}</span>
                <span className="text-sm text-gray-500 mb-2">Stock: {stock}</span>
                <div className="flex items-center gap-2 ">
                    <EditProductDialog id={id} />
                    <DeleteButton onClick={() => handleDeleteProduct(id)} />
                </div>
            </div>
        </Card>
    )
}