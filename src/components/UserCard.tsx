import { User } from "@/types/user"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Edit, Trash } from "lucide-react"

export const UserCard = ({ user }: { user: User }) => {
    const { name, email, role } = user;
    return (
        <Card className="w-full max-w-[300px] bg-white shadow-md rounded-lg">
            <div className="flex flex-col  justify-between p-4">
                <div className="flex items-center justify-between gap-2 max-sm:flex-col-reverse max-sm:items-start sm:gap-2">
                    <span className="font-semibold text-lg">{name}</span>
                    <span className="bg-slate-100 rounded-full w-10 h-10 flex items-center justify-center font-semibold">
                        {name.substring(0, 1).toUpperCase()}
                    </span>
                </div>
                <span className="text-gray-400 text-xs mb-2 font-semibold uppercase">{role}</span>
                <span className="text-gray-500 text-sm mb-2">{email}</span>

                <div className="flex items-center gap-2 ">
                    <Button className="bg-transparent  rounded-full hover:bg-slate-100 hover:text-blue-500 text-blue-500 w-10 h-10">
                        <Edit className="w-8 " />
                    </Button>
                    <Button className="bg-transparent rounded-full hover:bg-slate-100 hover:text-red-500 text-red-500 w-10 h-10">
                        <Trash className="w-8 " />
                    </Button>
                </div>
            </div>
        </Card>
    )
}