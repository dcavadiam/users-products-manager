// export default function Home() {
//   return (
//     <main>
//       <h1>Users Products Manager</h1>

import { redirect } from "next/navigation";


//     </main>
//   );
// }

export default function Home() {
  redirect("/users");
}