import Link from "next/link"
import { Card } from "./ui/card"

export const HomeCard = ({title, description, url}: { title: string, description: string, url: string, icon: string }) => {
    return (
        <Link href={url} className="w-full">
            <Card className="w-full max-w-[400px] p-4 ease-in-out duration-300 hover:scale-105 hover:shadow-lg">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-500">{description}</p>
            </Card>
        </Link>
    )
}