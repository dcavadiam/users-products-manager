import { Header } from "@/containers/header";
import { ListContainer } from "@/containers/list";

import  PRODUCTS from "../../mocks/products.json";


export default function Users() {
    return (
        <>
            <Header icon="box" />
            <ListContainer data={PRODUCTS} />
        </>
    );
}