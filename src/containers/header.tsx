import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus, PackagePlus } from "lucide-react";

export function Header({ icon }: { icon: string }) {
    return (
        <header className="w-full flex items-center justify-between gap-4 bg-white py-4 px-6">
            <div className="flex items-center gap-3">
                <Search className="w-5 text-gray-400  " />
                <Input placeholder="Search..." className="w-full max-w-[300px]" type="text" />
            </div>
            <div>
                <Button className="bg-blue-500 text-white">
                    {
                        icon === "user" ? <UserPlus className="w-5 text-white" /> : <PackagePlus className="w-5 text-white" />
                    }
                </Button>
            </div>
        </header>
    )
}