import { HomeCard } from "@/components/HomeCard";


export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center gap-6 px-6 py-24 text-center min-h-screen bg-gradient-to-r from-slate-100 to-slate-300">
        <section>
          <h1 className="text-4xl font-bold">Users Products Manager</h1>
          <p className="text-gray-500">Manage users and products with Next.js</p>
        </section>
        <section className="flex gap-4 w-full max-w-[700px] justify-center">

          <HomeCard title="Users demo" description="Manage users" url="/dashboard/users" icon="user" />
          <HomeCard title="Products demo" description="Manage products" url="/dashboard/products" icon="box" />

        </section>
      </main>
      <footer className="absolute bottom-0 w-full bg-transparent flex items-center justify-center gap-4 py-4 px-6">
        <p>Made with ❤️ by <a href="https://github.com/dcavadiam" className="text-blue-500">Diego Cavadia</a></p>

      </footer>
    </>

  );
}