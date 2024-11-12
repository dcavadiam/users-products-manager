'use client'
import { z } from "zod";
import { PackagePlus } from "lucide-react";
import { productFormSchema } from "@/schemas/productFormSchema";
import { redirect } from "next/navigation";
import { useProduct } from "@/context/product";
import { Product } from "@/types/product";
import { ProductForm } from "@/components/forms/ProductForm";

export default function CreateProduct() {

    const { products, setProducts } = useProduct();

    function handleSubmit(data: z.infer<typeof productFormSchema>) {
        const newProduct: Product = {
            id: crypto.randomUUID(),
            name: data.name,
            price: Number(data.price),
            stock: Number(data.stock),
        }
        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        alert("Product created successfully");
        redirect("/products");

    }
    return (
        <section className="w-full flex flex-col gap-4 px-6 py-4">
            <h1 className="text-2xl font-bold flex items-center">
                <PackagePlus className="w-10 text-black" /> Create new product
            </h1>
            <ProductForm type="create" handleSubmit={handleSubmit} />

        </section>
    );

}
