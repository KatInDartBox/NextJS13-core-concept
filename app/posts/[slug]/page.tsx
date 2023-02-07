// @ts-nocheck

type tProps = {
  params: {
    slug: string;
  };
};
export default async function PostDynamic({
  params: { slug }, //
}: tProps) {
  return <div className="p-24">{slug}</div>;
}
