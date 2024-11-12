'use client'

import { useRef } from "react";
import { useProduct } from "@/context/product";
import { useUser } from "@/context/user";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input"
import { CreateUserDialog } from "./createUserDialog";
import { CreateProductDialog } from "./createProductDialog";

export function Header({ icon }: { icon: string }) {

    const { products, setProducts, setSearchProducts, setSearchedProducts } = useProduct();
    const { users, setUsers, setSearchUser, setSearchedUsers } = useUser();

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
        const term = inputRef.current?.value.trim().toLowerCase();
        if (icon === "user") {
            if (term) {
                setSearchUser(term);
                setSearchedUsers(users.filter((user) => user.name.toLowerCase().includes(term.toLowerCase())));
            }
            else {
                setSearchUser("");
                setSearchedUsers([]);
                setUsers(users);
            }
        } else {
            if (term) {
                setSearchProducts(term);
                setSearchedProducts(products.filter((product) => product.name.toLowerCase().includes(term.toLowerCase())));
            }
            else {
                setSearchProducts("");
                setSearchedProducts([]);
                setProducts(products);
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