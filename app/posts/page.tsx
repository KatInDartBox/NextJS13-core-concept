// @ts-nocheck
import Posts from "./(postGroup)/posts";

export default async function HomePage() {
  return (
    <div className="p-24">
      <p>Post Index Page</p>
      <Posts />
    </div>
  );
}
