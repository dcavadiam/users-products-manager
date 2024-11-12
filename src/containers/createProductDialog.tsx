'use client'

import { z } from "zod"
import { useState } from "react"
import { useProduct } from "@/context/product"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ProductForm } from "@/components/forms/ProductForm"
import { PackagePlus } from "lucide-react"

import { productFormSchema } from "@/schemas/productFormSchema"

import { Product } from "@/types/product"

export const CreateProductDialog = () => {
    const [open, setOpen] = useState<boolean>(false);
    const { products, setProducts } = useProduct();

    // Function to handle creating a new product
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
        setOpen(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-blue-500 text-white">
                    <PackagePlus className="w-5 text-white" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create new product</DialogTitle>
                    <DialogDescription>
                        Create a new product here. Click save when youre done.
                    </DialogDescription>
                </DialogHeader>
                {/* Form */}
                <ProductForm type="create" handleSubmit={handleSubmit} />
                <DialogFooter>
                    <Button type="submit" form="product-form">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}