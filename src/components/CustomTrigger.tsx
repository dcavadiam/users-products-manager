'use client'
import { useSidebar } from "@/components/ui/sidebar"
import { Menu} from "lucide-react"

// Custom trigger component for the sidebar
export function CustomTrigger() {
    const { toggleSidebar } = useSidebar()
    return <button onClick={toggleSidebar} className="md:hidden">
        <Menu/>
    </button>
}
