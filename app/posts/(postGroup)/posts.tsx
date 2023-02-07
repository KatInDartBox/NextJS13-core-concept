export default async function Posts() {
  const posts = ["post1", "post2", "post3", "post4"];
  return (
    <div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
