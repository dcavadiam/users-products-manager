'use client';

import { EditButton } from "./EditButton";
import { DeleteButton } from "./DeleteButton";
import { Card } from "./ui/card"

import { Product } from "@/types/product";

export const ProductCard = ({ product }: { product: Product }) => {
    const {  name, price, stock } = product;
    return (
        <Card className="w-full max-w-[300px] bg-white shadow-md rounded-lg">
            <div className="flex flex-col  justify-between p-4">
                <div className="flex items-center justify-between max-sm:flex-col-reverse max-sm:items-start sm:gap-2 mb-2">
                    <span className="text-lg font-semibold">{name}</span>
                    {
                        stock === 0 ? <span className="bg-red-200 bg-opacity-55 px-2 rounded-sm text-red-800 font-semibold text-sm">Out of Stock</span> : <span className="bg-green-200 bg-opacity-55 px-2 rounded-sm text-green-800 font-semibold text-sm">In Stock</span>
                    }
                </div>
                <span className="text-3xl font-semibold ">${price}</span>
                <span className="text-sm text-gray-500 mb-2">Stock: {stock}</span>
                <div className="flex items-center gap-2 ">
                    <EditButton onClick={()=>{}} />
                    <DeleteButton onClick={()=>{}} />
                </div>
            </div>
        </Card>
    )
}