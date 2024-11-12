'use client'

import { z } from "zod"
import { useState } from "react"
import { useProduct } from "@/context/product"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { EditButton } from "@/components/EditButton"
import { Button } from "@/components/ui/button"
import { ProductForm } from "@/components/forms/ProductForm"

import { productFormSchema } from "@/schemas/productFormSchema"

export const EditProductDialog = ({ id }: { id: string }) => {

    const [open, setOpen] = useState<boolean>(false);
    const { products, setProducts } = useProduct();

    // Function to handle updating a product
    const handleSubmit = (data: z.infer<typeof productFormSchema>) => {
        const updatedProducts = products.map((product) => {
            if (product.id === id) {
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
        setOpen(false);
    }

    // Get the product to edit from the products array
    const productToEdit = products.find(product => product.id === id);

return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <EditButton />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Edit product</DialogTitle>
                <DialogDescription>
                    Edit product details here. Click save when youre done.
                </DialogDescription>
            </DialogHeader>
            {/* Form */}
            <ProductForm type="edit" handleSubmit={handleSubmit} productToEdit={productToEdit} />
            <DialogFooter>
                <Button type="submit" form="edit-product-form">Save changes</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
)
}