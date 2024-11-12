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

import { useState } from "react"

// Menu items.
const items = [
    {
        title: "Users",
        url: "/users",
        icon: User,
    },
    {
        title: "Products",
        url: "/products",
        icon: Package,
    },
]

export function AppSidebar() {
    const [selected, setSelected] = useState(items[0].title)
    console.log(selected)
    
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup className="py-8 px-4">
                    <SidebarGroupLabel>
                        <span className="font-bold text-2xl mb-5 text-black">Dashboard</span>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title} onClick={() => setSelected(item.url)}>
                                    <SidebarMenuButton asChild className="w-full text-base font-semibold" >
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
