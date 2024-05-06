"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/app/components/Button";

const page = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  console.log(params);

  const [count, setCount] = React.useState(0);

  return (
    <div>
      contact #{id}
      <Link href="/contacts">Back</Link>
      <button onClick={() => router.replace("/contacts")}>Back</button>
      <div>{count}</div>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
};

export default page;
