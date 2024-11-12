import { Header } from "@/containers/header";
import { ListContainer } from "@/containers/list";

import USERS from "../../mocks/users.json";


export default function Users() {
    return (
        <>
            <Header icon="user" />
            <ListContainer data={USERS} />
        </>
    );
}