import { wait } from "../(appGroup)/wait";

type tUser = {
  id: number;
  name: string;
};

async function getAllUsers() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users", //
    { cache: "no-store" }
  );
  const users = res.json() as Promise<tUser[]>;

  return (await users).map((u) => u.name);
}

export default async function UsersPage() {
  await wait(1);
  const users = await getAllUsers();
  return (
    <div className="p-24">
      {users.map((user, i) => (
        <div key={i}>{user}</div>
      ))}
    </div>
  );
}
