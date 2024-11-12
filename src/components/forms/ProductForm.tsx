'use client'

import { productFormSchema } from "@/schemas/productFormSchema"
import { Product } from "@/types/product"
import { z } from "zod"
import { Form, FormField } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"

interface Props {
    type: "create" | "edit"
    handleSubmit: (data: z.infer<typeof productFormSchema>) => void
    productToEdit?: Product 
}

export const ProductForm = ({ type, handleSubmit, productToEdit }: Props) => {


    const productForm = useForm<z.infer<typeof productFormSchema>>({
        resolver: zodResolver(productFormSchema),
        defaultValues: {
            name: "",
            price: "",
            stock: "",
        },
    })

    useEffect(() => {
        if (productToEdit) {
            productForm.setValue("name", productToEdit.name);
            productForm.setValue("price", productToEdit.price.toString());
            productForm.setValue("stock", productToEdit.stock.toString());
        }
    }, [productToEdit, productForm]);

    if (type === "create") {
        return (
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
                        Create
                    </Button>
                </form>
            </Form>
        )
    }
    else {
        return (
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
        )
    }
}