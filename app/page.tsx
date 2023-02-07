import { wait } from "./(appGroup)/wait";

export default async function HomePage() {
  await wait(1);
  return (
    <div className="p-24">
      <p>i am a change page.js</p>
    </div>
  );
}
