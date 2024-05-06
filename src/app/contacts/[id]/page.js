import Link from "next/link";
import React from "react";

const page = ({ params }) => {
  console.log(params);
  const { id } = params;
  return (
    <div>
      contact #{id}
      <button>
        <Link href="/contacts">Back</Link>
      </button>
    </div>
  );
};

export default page;
