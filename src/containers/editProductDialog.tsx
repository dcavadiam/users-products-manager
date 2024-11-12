import { z } from "zod"
import { useState } from "react"

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
import { EditButton } from "@/components/EditButton"
import { useProduct } from "@/context/product"
import { productFormSchema } from "@/schemas/productFormSchema"
import { ProductForm } from "@/components/forms/ProductForm"

export const EditProductDialog = ({ id }: { id: string }) => {

    const [open, setOpen] = useState<boolean>(false);
    const { products, setProducts } = useProduct();


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

    const productToEdit = products.find(product => product.id === id);

return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <EditButton />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Edit user</DialogTitle>
                <DialogDescription>
                    Edit user details here. Click save when youre done.
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