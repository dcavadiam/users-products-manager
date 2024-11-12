'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useProduct } from "@/context/product";
import { useUser } from "@/context/user";
import { Search, UserPlus, PackagePlus } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import USERS from "@/mocks/users.json";
import PRODUCTS from "@/mocks/products.json";


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
                <Input placeholder="Search..." className="w-full max-w-[300px]" ref={inputRef} type="text" onChange={handleSearch} />
            </div>
            <div>
                {
                    icon === "user"
                        ? <Link href="/create/user">
                            <Button className="bg-blue-500 text-white">
                                <UserPlus className="w-5 text-white" />
                            </Button>
                        </Link>
                        : <Link href="/create/product">
                            <Button className="bg-blue-500 text-white">
                                <PackagePlus className="w-5 text-white" />
                            </Button>
                        </Link>
                }


            </div>
        </header>
    )
}