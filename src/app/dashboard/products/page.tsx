'use client'
import { Header } from "@/containers/header";
import { ListContainer } from "@/containers/list";

import { useProduct } from "@/context/product";


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