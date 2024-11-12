'use client'

import { useUser } from "@/context/user";

import { Header } from "@/containers/header";
import { ListContainer } from "@/containers/list";

export default function Users() {
    const { users, searchUser: search, searchedUsers } = useUser();
    return (
        <>
            <Header icon="user" />
            {
                search !== ""
                    ? <ListContainer title="Users" data={searchedUsers} />
                    : <ListContainer title="Users" data={users} />
            }
        </>
    );
}