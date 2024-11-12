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
import { useUser } from "@/context/user"
import { userFormSchema } from "@/schemas/userFormSchema"
import { UserForm } from "@/components/forms/UserForm"
import { EditButton } from "@/components/EditButton"

export const EditUserDialog = ({id}: {id: string}) => {

    const [open, setOpen] = useState<boolean>(false);
    const { users, setUsers } = useUser();

    function handleSubmit(data: z.infer<typeof userFormSchema>) {
        const updatedUsers = users.map((user) => {
            if (user.id === id) {
                return {
                    ...user,
                    name: data.name,
                    email: data.email,
                    role: data.role,
                };
            }
            return user;
        });
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        alert("User updated successfully");
        setOpen(false);
    }

    const userToEdit = users.find(user => user.id === id);

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
                <UserForm type="edit" handleSubmit={handleSubmit} userToEdit={userToEdit} />
                <DialogFooter>
                    <Button type="submit" form="edit-user-form">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}