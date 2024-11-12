import { User } from "@/types/user"
import { Card } from "./ui/card"
import { DeleteButton } from "./DeleteButton"
import { useUser } from "@/context/user"
import { EditUserDialog } from "@/containers/editUserDialog"
import { useEffect, useState } from "react"

export const UserCard = ({ user }: { user: User }) => {
    const { id, name, email, role } = user;
    const { users, setUsers } = useUser();

    // State to ensure the component is only rendered on the client
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Ensure the component is only rendered on the client
    }, []);


    const handleDeleteUser = (user: User) => {
        const updatedUsers = users.filter(({id}) => id !== user.id);
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    if (!isClient) return null; // Only render the component on the client
    
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
                <span className="text-gray-500 text-sm mb-2">ID: {id}</span>

                <div className="flex items-center gap-2 ">
                    <EditUserDialog id={id} />
                    <DeleteButton onClick={() => handleDeleteUser(user)} />
                </div>
            </div>
        </Card>
    )
}