'use client';

import { PackagePlus } from "lucide-react";
import { useProduct } from "@/context/product";
import { redirect, useParams } from "next/navigation";
import { productFormSchema } from "@/schemas/productFormSchema";
import { z } from "zod";
import { ProductForm } from "@/components/forms/ProductForm";

export default function EditProduct() {
    const newParams = useParams<{ id: string }>();

    const { products, setProducts } = useProduct();

    const productToEdit = products.find(product => product.id === newParams.id);

    const handleSubmit = (data: z.infer<typeof productFormSchema>) => {
        const updatedProducts = products.map((product) => {
            if (product.id === newParams.id) {
                return {
                    ...product,
                    name: data.name,
                    price: Number(data.price),
                    stock: Number(data.stock),
                };
            }
            return product;
        });
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        alert("Product updated successfully");
        redirect("/products");
    }

    return (
        <section className="w-full flex flex-col gap-8 px-6 py-4">
            <h1 className="text-2xl font-bold flex items-center">
                <PackagePlus className="w-10 text-black" /> Edit Product
            </h1>
            <ProductForm type="edit" handleSubmit={handleSubmit} productToEdit={productToEdit} />
        </section>
    );

}