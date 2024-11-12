'use client'

import { useProduct } from "@/context/product";

import { Header } from "@/containers/header";
import { ListContainer } from "@/containers/list";

export default function Users() {

    const { products, searchProducts, searchedProducts } = useProduct();

    return (
        <>
            <Header icon="box" />
            {
                searchProducts !== ""
                    ? <ListContainer title="Products" data={searchedProducts} />
                    : <ListContainer title="Products" data={products} />
            }
        </>
    );
}