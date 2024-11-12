'use client';
import { useState } from "react";

import { DeleteButton } from "@/components/DeleteButton";
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

interface Props {
    handleDelete: () => void;
}

// Confirm dialog component for deleting a user or product
export const ConfirmDialog = ({ handleDelete }: Props) => {

    const [open, setOpen] = useState<boolean>(false);
    console.log(open);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <DeleteButton onClick={() => setOpen(true)} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this item?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={handleDelete}>Delete</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}