import { Metadata } from 'next';
import { UserProvider } from "@/context/user";
import { ProductProvider } from "@/context/product";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { CustomTrigger } from "@/components/CustomTrigger";

export const metadata: Metadata = {
    title: {
        template: "%s | Dashboard",
        default: "Dashboard",
    },
    description: "Dashboard for users and products management",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
      <SidebarProvider>
          <AppSidebar />
          <main className="flex flex-col bg-slate-100 w-full min-h-screen">
              <div className="md:hidden bg-white px-5 pt-3">
                  <CustomTrigger />
              </div>
              <UserProvider>
                  <ProductProvider>
                      {children}
                  </ProductProvider>
              </UserProvider>
          </main>
      </SidebarProvider>
  );
}