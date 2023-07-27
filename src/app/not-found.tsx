"use client";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="grid place-items-center text-white">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        Go back to <Link href="/">home</Link>
      </p>
    </div>
  );
};

export default NotFound;
