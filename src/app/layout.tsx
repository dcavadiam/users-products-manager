import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { UserProvider } from "@/context/user";
import { ProductProvider } from "@/context/product";
import { CustomTrigger } from "@/components/CustomTrigger";

export const metadata: Metadata = {
  title: "Users Products Manager",
  description: "Manage users and products with Next.js",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-lt-installed="true">
      <body
        className={` antialiased`}
      >
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
      </body>
    </html>
  );
}
