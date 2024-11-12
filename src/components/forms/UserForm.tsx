'use client'
import { userFormSchema } from "@/schemas/userFormSchema"
import { Button } from "../ui/button"
import { Form, FormField } from "../ui/form"
import { Input } from "../ui/input"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { User } from "@/types/user"

interface Props {
    type: "create" | "edit"
    handleSubmit: (data: z.infer<typeof userFormSchema>) => void
    userToEdit?: User 
}

export const UserForm = ({ type, handleSubmit, userToEdit }: Props) => {
    
    const userForm = useForm<z.infer<typeof userFormSchema>>({
        resolver: zodResolver(userFormSchema),
        defaultValues: {
            name: "",
            email: "",
            role: "",
        },
    });

    useEffect(() => {
        if (userToEdit) {
            userForm.setValue("name", userToEdit.name);
            userForm.setValue("email", userToEdit.email);
            userForm.setValue("role", userToEdit.role);
        }
    }, [userToEdit, userForm]);

    if (type === "create") {
        return (
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
                        Create
                    </Button>
                </form>
            </Form>
        )
    }else{
        return (
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
        )
    }
   
}