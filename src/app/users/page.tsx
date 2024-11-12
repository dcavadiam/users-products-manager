'use client'
import { Header } from "@/containers/header";
import { ListContainer } from "@/containers/list";
import { useUser } from "@/context/user";

export default function Users() {

    const { users } = useUser();

    return (
        <>
            <Header icon="user" />
            <ListContainer title="Users" data={users} />
            
        </>
    );
}