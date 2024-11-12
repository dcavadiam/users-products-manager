'use client';

import { useEffect, useState } from "react";
import { useProduct } from "@/context/product";

import { Card } from "./ui/card"
import { EditProductDialog } from "@/containers/editProductDialog";
import { ConfirmDialog } from "@/containers/confirmDialog";

import { Product } from "@/types/product";
import { Barcode } from "lucide-react";

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
                        // Display a red or green badge based on the stock status
                        stock === 0 ? <span className="bg-red-200 bg-opacity-55 px-2 rounded-sm text-red-800 font-semibold text-sm">Not available</span> : <span className="bg-green-200 bg-opacity-55 px-2 rounded-sm text-green-800 font-semibold text-sm">Available</span>
                    }
                </div>
                <span className="text-3xl font-semibold mb-1">${price}</span>
                <span className="text-sm text-gray-500">Stock: {stock}</span>
                <span className="text-gray-500 text-xs mb-2 flex items-center gap-1"><Barcode className="w-5 h-5" /> {id}</span>
                <div className="flex items-center gap-2 ">
                    {/* Display the edit and delete buttons */}
                    <EditProductDialog id={id} />
                    <ConfirmDialog handleDelete={() => handleDeleteProduct(id)} />
                </div>
            </div>
        </Card>
    )
}