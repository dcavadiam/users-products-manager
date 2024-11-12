'use client'

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserPlus } from "lucide-react";

const userFormSchema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters long" }).max(50, { message: "Name cannot be longer than 50 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    role: z.string().min(1, { message: "Role is required" }).max(50, { message: "Role cannot be longer than 50 characters" }),
})

export default function CreateUser() {

    const userForm = useForm<z.infer<typeof userFormSchema>>({
        resolver: zodResolver(userFormSchema),
        defaultValues: {
            name: "",
            email: "",
            role: "",
        },
    })

    function handleSubmit(data: z.infer<typeof userFormSchema>) {
        console.log(data)
    }

    return (
        <section className="w-full flex flex-col gap-8 px-6 py-4">
            <h1 className="text-2xl font-bold flex items-center">
                <UserPlus className="w-10 text-black" /> Create new user
            </h1>
            <Form {...userForm}>
                <form onSubmit={userForm.handleSubmit(handleSubmit)} className="w-full max-w-[500px] flex flex-col gap-4">
                    {/* Nombre */}
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

                    {/* Email */}
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

                    {/* Role */}
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
                        Create
                    </Button>
                </form>
            </Form>
        </section>
    )
}
