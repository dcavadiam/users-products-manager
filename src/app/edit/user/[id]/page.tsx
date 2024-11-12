'use client'

import { z } from "zod";
import { UserPlus } from "lucide-react";
import { useUser } from "@/context/user";
import { redirect, useParams } from "next/navigation";
import { userFormSchema } from "@/schemas/userFormSchema";
import { UserForm } from "@/components/forms/UserForm";

export default function EditUser() {
    const newParams = useParams<{ id: string }>();

    const { users, setUsers } = useUser();

    function handleSubmit(data: z.infer<typeof userFormSchema>) {
        const updatedUsers = users.map((user) => {
            if (user.id === newParams.id) {
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
        redirect("/users");
    }

    const userToEdit = users.find(user => user.id === newParams.id);

    return (
        <section className="w-full flex flex-col gap-8 px-6 py-4">
            <h1 className="text-2xl font-bold flex items-center">
                <UserPlus className="w-10 text-black" /> Edit User
            </h1>
            <UserForm type="edit" handleSubmit={handleSubmit} userToEdit={userToEdit} />
        </section>
    );
}
