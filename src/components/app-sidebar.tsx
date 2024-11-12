'use client'
import { User, Package } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import Link from "next/link"
import { usePathname } from "next/navigation"

// Menu items.
const items = [
    {
        title: "Users",
        url: "/dashboard/users",
        icon: User,
    },
    {
        title: "Products",
        url: "/dashboard/products",
        icon: Package,
    },
]

export function AppSidebar() {

    const pathname = usePathname()
    
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup className="py-8 px-4">
                    <SidebarGroupLabel>
                        <Link href="/" className="mb-5">
                            <span className="font-bold text-2xl text-black">Dashboard</span>
                        </Link>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title} >
                                    <SidebarMenuButton asChild className="w-full text-base font-semibold" isActive={pathname === item.url}>
                                        <a href={item.url} >
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
