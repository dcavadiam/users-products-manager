import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

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
          <main className="flex flex-col gap-4 bg-slate-100 w-full min-h-screen">
            {/* <SidebarTrigger className=""></SidebarTrigger> */}
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
