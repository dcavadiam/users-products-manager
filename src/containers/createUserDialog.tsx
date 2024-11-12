import { z } from "zod"
import { useState } from "react"
import { useUser } from "@/context/user"
import { userFormSchema } from "@/schemas/userFormSchema"

import { UserForm } from "@/components/forms/UserForm"
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
import { UserPlus } from "lucide-react"

export const CreateUserDialog = () => {

    const { users, setUsers } = useUser();

    const [open, setOpen] = useState<boolean>(false);

    function handleSubmit(data: z.infer<typeof userFormSchema>) {
        const newUser = {
            id: crypto.randomUUID(),
            name: data.name,
            email: data.email,
            role: data.role,
        }
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        alert("User created successfully");
        setOpen(false);
    }


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-blue-500 text-white">
                    <UserPlus className="w-5 text-white" />
                </Button>

            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create new user</DialogTitle>
                    <DialogDescription>
                        Create a new user here. Click save when youre done.
                    </DialogDescription>
                </DialogHeader>
                {/* Form */}
                <UserForm type="create" handleSubmit={handleSubmit} />
                <DialogFooter>
                    <Button type="submit" form="user-form">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}