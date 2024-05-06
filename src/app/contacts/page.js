import Link from "next/link";

const list = [1, 2, 3, 4, 5];

export default function page() {
  return (
    <div>
      {list.map((item) => (
        <div key={item}>
          <Link href={`/contacts/${item}`}>Contact #{item}</Link>
        </div>
      ))}
    </div>
  );
}
