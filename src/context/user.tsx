'use client'

import { User } from "@/types/user";
import { createContext, useContext, useState } from "react";
import USERS from "../mocks/users.json";

interface UserContextProps {
    users: User[];
    setUsers: (user: User[]) => void;
    searchedUsers: User[];
    setSearchedUsers: (user: User[]) => void;
    searchUser: string;
    setSearchUser: (search: string) => void;
}

// Create a user context
export const UserContext = createContext<UserContextProps>({
    users: [],
    setUsers: () => { },
    searchedUsers: [],
    setSearchedUsers: () => { },
    searchUser: "",
    setSearchUser: () => { }
});

// User provider component
export function UserProvider({ children }: { children: React.ReactNode }) {
    const ISSERVER = typeof window === "undefined"; // Check if the code is running on the server
    const [users, setUsers] = useState<User[]>(ISSERVER ? USERS : localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users") as string) : USERS);
    const [searchedUsers, setSearchedUsers] = useState<User[]>([]);
    const [searchUser, setSearchUser] = useState<string>("");

    return (
        <UserContext.Provider value={{ users, setUsers, searchedUsers, setSearchedUsers, searchUser, setSearchUser }}>
            {children}
        </UserContext.Provider>
    );
}

// Hook to access the user context
export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider.");
    }
    return context;
}