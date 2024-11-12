import { redirect } from "next/navigation";

// export default function Home() {
//   return (
//     <main>
//       <h1>Users Products Manager</h1>
//     </main>
//   );
// }

export default function Home() {
  redirect("/users");
}