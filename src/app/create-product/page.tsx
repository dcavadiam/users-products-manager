'use client'

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PackagePlus } from "lucide-react";

const productFormSchema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters long" }).max(50, { message: "Name cannot be longer than 50 characters" }),
    price: z.string().min(1, { message: "Price must be greater than 0" }),
    stock: z.string().min(1, { message: "Stock must be greater than 0" }),
})

export default function CreateProduct() {

    const productForm = useForm<z.infer<typeof productFormSchema>>({
        resolver: zodResolver(productFormSchema),
        defaultValues: {
            name: "",
            price: "",
            stock: "",
        },
    })

    function handleSubmit(data: z.infer<typeof productFormSchema>) {
        console.log(data)
    }
    return (
        <section className="w-full flex flex-col gap-4 px-6 py-4">
            <h1 className="text-2xl font-bold flex items-center">
                <PackagePlus className="w-10 text-black" /> Create new product
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
                        Create
                    </Button>
                </form>
            </Form>
        </section>
    );

}
