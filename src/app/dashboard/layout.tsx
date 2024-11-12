import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { UserProvider } from "@/context/user";
import { ProductProvider } from "@/context/product";
import { CustomTrigger } from "@/components/CustomTrigger";

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