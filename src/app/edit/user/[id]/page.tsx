'use client'

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserPlus } from "lucide-react";
import { useUser } from "@/context/user";
import { redirect, useParams } from "next/navigation";
import { userFormSchema } from "@/schemas/userFormSchema";
import { useEffect } from "react";

export default function EditUser() {
    const newParams = useParams<{ id: string }>();

    const { users, setUsers } = useUser();

    const userForm = useForm<z.infer<typeof userFormSchema>>({
        resolver: zodResolver(userFormSchema),
        defaultValues: {
            name: "",
            email: "",
            role: "",
        },
    });

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

    useEffect(() => {
        if (userToEdit) {
            userForm.setValue("name", userToEdit.name);
            userForm.setValue("email", userToEdit.email);
            userForm.setValue("role", userToEdit.role);
        }
    }, [newParams.id, users, userForm]);

    if (!userToEdit) {
        return <div>User not found</div>;
    }
    return (
        <section className="w-full flex flex-col gap-8 px-6 py-4">
            <h1 className="text-2xl font-bold flex items-center">
                <UserPlus className="w-10 text-black" /> Edit User
            </h1>

            <Form {...userForm}>
                <form onSubmit={userForm.handleSubmit(handleSubmit)} className="w-full max-w-[500px] flex flex-col gap-4">
                    <FormField control={userForm.control} name="name" render={({ field }) => (
                        <>
                            <Input
                                {...field}
                                className={`bg-white w-full px-4 py-2 rounded-lg shadow-md text-gray-500 ${userForm.formState.errors.name ? 'border-red-500' : ''}`}
                                placeholder="Name"
                            />
                            {userForm.formState.errors.name && (
                                <span className="text-sm text-red-500 ">{userForm.formState.errors.name.message}</span>
                            )}
                        </>
                    )} />
                    <FormField control={userForm.control} name="email" render={({ field }) => (
                        <>
                            <Input
                                {...field}
                                className={`bg-white w-full  px-4 py-2 rounded-lg shadow-md text-gray-500 ${userForm.formState.errors.email ? 'border-red-500' : ''}`}
                                placeholder="Email"
                            />
                            {userForm.formState.errors.email && (
                                <span className="text-sm text-red-500 ">{userForm.formState.errors.email.message}</span>
                            )}
                        </>
                    )} />
                    <FormField control={userForm.control} name="role" render={({ field }) => (
                        <>
                            <Input
                                {...field}
                                className={`bg-white w-full px-4 py-2 rounded-lg shadow-md text-gray-500 ${userForm.formState.errors.role ? 'border-red-500' : ''}`}
                                placeholder="Role"
                            />
                            {userForm.formState.errors.role && (
                                <span className="text-sm text-red-500 ">{userForm.formState.errors.role.message}</span>
                            )}
                        </>
                    )} />
                    <Button className="w-full mb-4 px-4 py-2 rounded-lg shadow-md">
                        Save
                    </Button>
                </form>
            </Form>
        </section>
    );
}
