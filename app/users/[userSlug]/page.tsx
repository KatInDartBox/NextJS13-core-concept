import { notFound } from "next/navigation";

type tProps = {
  params: {
    userSlug: string;
  };
};

async function getUser(userSlug: string) {
  const user = decodeURIComponent(userSlug);
  if (user === "johnEx") {
    return notFound();
  }
  if (user === "exError") {
    throw "ex was gone";
  }
  return user;
}
export default async function UserDynamic({
  //
  params,
}: tProps) {
  const user = await getUser(params.userSlug);

  return <div className="p-24">{user}</div>;
}
