'use client'
import { useForm } from "react-hook-form";
import { Form, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PackagePlus } from "lucide-react";
import { useProduct } from "@/context/product";
import { redirect, useParams } from "next/navigation";  
import { useEffect } from "react";
import { Product } from "@/types/product";

export default function EditProduct() {
    const newParams = useParams<{ id: string }>();

    const { products, setProducts } = useProduct();

    const newProduct = products.find(product => product.id === newParams.id);

    if (!newProduct) {
        return <div>Product not found</div>;
    }

    const productForm = useForm<Product>({
        defaultValues: newProduct,
    });

    useEffect(() => {
        const productToEdit = products.find(product => product.id === newParams.id);
        if (productToEdit) {
            productForm.setValue("name", productToEdit.name);
            productForm.setValue("price", productToEdit.price);
            productForm.setValue("stock", productToEdit.stock);
        }
    }, [newParams.id, products, productForm]);

    const handleSubmit = (data: Product) => {
        const updatedProducts = products.map((product) => {
            if (product.id === newParams.id) {
                return {
                    ...product,
                    name: data.name,
                    price: data.price,
                    stock: data.stock,
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

            <Form {...productForm}>
                <form onSubmit={productForm.handleSubmit(handleSubmit)} className="w-full max-w-[500px] flex flex-col gap-4">
                    <FormField control={productForm.control} name="name" render={({ field }) => (
                        <>
                            <Input {...field} className={`bg-white w-full px-4 py-2 rounded-lg shadow-md text-gray-500 ${productForm.formState.errors.name ? 'border-red-500' : ''}`} placeholder="Name" />
                            {productForm.formState.errors.name && (
                                <span className="text-sm text-red-500 ">{productForm.formState.errors.name.message}</span>
                            )}
                        </>
                    )} />
                    <FormField control={productForm.control} name="price" render={({ field }) => (
                        <>
                            <Input {...field} type="number" className={`bg-white w-full px-4 py-2 rounded-lg shadow-md text-gray-500 ${productForm.formState.errors.price ? 'border-red-500' : ''}`} placeholder="Price" />
                            {productForm.formState.errors.price && (
                                <span className="text-sm text-red-500 ">{productForm.formState.errors.price.message}</span>
                            )}
                        </>
                    )} />
                    <FormField control={productForm.control} name="stock" render={({ field }) => (
                        <>
                            <Input {...field} type="number" className={`bg-white w-full px-4 py-2 rounded-lg shadow-md text-gray-500 ${productForm.formState.errors.stock ? 'border-red-500' : ''}`} placeholder="Stock" />
                            {productForm.formState.errors.stock && (
                                <span className="text-sm text-red-500 ">{productForm.formState.errors.stock.message}</span>
                            )}
                        </>
                    )} />
                    <Button className="w-full mb-4 px-4 py-2 rounded-lg shadow-md">
                        Save
                    </Button>
                </form>
            </Form>
        </section>
    );

}