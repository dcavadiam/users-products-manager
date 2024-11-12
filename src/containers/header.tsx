'use client'

import { useRef } from "react";
import { useProduct } from "@/context/product";
import { useUser } from "@/context/user";

import PRODUCTS from "@/mocks/products.json";
import USERS from "@/mocks/users.json";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input"
import { CreateUserDialog } from "./createUserDialog";
import { CreateProductDialog } from "./createProductDialog";

export function Header({ icon }: { icon: string }) {

    const { products, setProducts } = useProduct();
    const { users, setUsers } = useUser();

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
        const term = inputRef.current?.value;
        console.log(term);
        if (term) {
            if (icon === "user") {
                setUsers(users.filter((user) => user.name.toLowerCase().includes(term.toLowerCase())));
            }
            else {
                setProducts(products.filter((product) => product.name.toLowerCase().includes(term.toLowerCase())));
            }
        }
        else {
            if (icon === "user") {
                setUsers(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users") as string) : USERS);
            }
            else {
                setProducts(localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products") as string) : PRODUCTS);
            }
        }
    }

    return (
        <header className="w-full flex items-center justify-between gap-4 bg-white py-4 px-6">
            <div className="flex items-center gap-3">
                <Search className="w-5 text-gray-400" />
                <Input placeholder="Search..." className="w-full max-w-[400px]" ref={inputRef} type="text" onChange={handleSearch} />
            </div>
            <div>
                {
                    icon === "user"
                        ? <CreateUserDialog />
                        : <CreateProductDialog />
                }
            </div>
        </header>
    )
}