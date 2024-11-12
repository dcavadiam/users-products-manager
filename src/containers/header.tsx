import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus, PackagePlus } from "lucide-react";
import Link from "next/link";

export function Header({ icon }: { icon: string }) {
    return (
        <header className="w-full flex items-center justify-between gap-4 bg-white py-4 px-6">
            <div className="flex items-center gap-3">
                <Search className="w-5 text-gray-400  " />
                <Input placeholder="Search..." className="w-full max-w-[300px]" type="text" />
            </div>
            <div>
                {
                    icon === "user" 
                    ? <Link href="/create-user">
                        <Button className="bg-blue-500 text-white">
                            <UserPlus className="w-5 text-white" />
                        </Button>
                    </Link> 
                    : <Link href="/create-product">
                        <Button className="bg-blue-500 text-white">
                            <PackagePlus className="w-5 text-white" />
                        </Button>
                    </Link>
                }
            </div>
        </header>
    )
}