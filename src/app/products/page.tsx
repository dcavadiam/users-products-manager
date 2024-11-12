'use client'
import { Header } from "@/containers/header";
import { ListContainer } from "@/containers/list";

import { useProduct } from "@/context/product";


export default function Users() {

    const { products } = useProduct();

    return (
        <>
            <Header icon="box" />
            <ListContainer title="Products" data={products} />
        </>
    );
}