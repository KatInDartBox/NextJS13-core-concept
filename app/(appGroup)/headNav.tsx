import Link from "next/link";

export default function HeadNav() {
  return (
    <div className="headerNav">
      <Link href="/">Brand Name</Link>

      <ul className="headNavUrl">
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/users/john">John</Link>
        </li>
        <li>
          <Link href="/users/johnEx">JohnEx</Link>
        </li>
        <li>
          <Link href="/users/exError">ExError</Link>
        </li>
      </ul>
    </div>
  );
}
