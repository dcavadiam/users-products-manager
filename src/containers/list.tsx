import { ProductCard } from "@/components/ProductCard";
import { UserCard } from "@/components/UserCard";
import { Product } from "@/types/product";
import { User } from "@/types/user";

type DataProps = User | Product;

interface ListContainerProps {
    title: string;
    data: DataProps[];
}

// Function to check if the data is a user or a product 
function isUser(data: DataProps): data is User {
    return (data as User).email !== undefined && (data as User).id !== undefined;
}

// Function to check if the data is a product
function isProduct(data: DataProps): data is Product {
    return (data as Product).price !== undefined && (data as Product).id !== undefined;
}

export function ListContainer({ title, data }: ListContainerProps) {
    return (
        <section className="w-full flex flex-col gap-4 px-6 py-4">

            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="w-full flex gap-4 flex-wrap max-md:justify-center">
                {
                    // Render the user or product cards based on the data type
                    data.map((item) => (
                        isUser(item) ? (
                            <UserCard key={item.id} user={item as User} />      
                        ) : isProduct(item) ? (
                            <ProductCard key={item.id} product={item as Product} />
                        ) : null
                    ))
                }
            </div>
        </section>
    )
}