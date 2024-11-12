'use client'

import { z } from "zod";
import { UserPlus } from "lucide-react";
import { useUser } from "@/context/user";
import { redirect } from "next/navigation";
import { userFormSchema } from "@/schemas/userFormSchema";
import { UserForm } from "@/components/forms/UserForm";

export default function CreateUser() {

    const { users, setUsers } = useUser();

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
        redirect("/users");
    }


    return (
        <section className="w-full flex flex-col gap-8 px-6 py-4">
            <h1 className="text-2xl font-bold flex items-center">
                <UserPlus className="w-10 text-black" /> Create new user
            </h1>
            <UserForm type="create" handleSubmit={handleSubmit} />
        </section>
    )
}
