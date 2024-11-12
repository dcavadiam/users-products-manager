'use client'

import { User } from "@/types/user";
import { createContext, useContext, useState } from "react";
import USERS from "../mocks/users.json";

interface UserContextProps {
    users: User[];
    setUsers: (user: User[]) => void;
}

export const UserContext = createContext<UserContextProps>({
    users: [],
    setUsers: () => { },
});

export function UserProvider({ children }: { children: React.ReactNode }) {
    const ISSERVER = typeof window === "undefined"; // Check if the code is running on the server
    const [users, setUsers] = useState<User[]>(ISSERVER ? USERS : localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users") as string) : USERS);
    

    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider.");
    }
    return context;
}