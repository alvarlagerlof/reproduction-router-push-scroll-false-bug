"use client";

import { useRouter } from "next/navigation";

export default function Other() {
  const router = useRouter();

  return (
    <>
      <h1>Other page</h1>
      <p>All of these functions result in the page being scrolled to the top</p>
      <ul>
        <li>
          <button onClick={() => router.push("/")}>{`router.push("/")`}</button>
        </li>
        <li>
          <button onClick={() => router.push("/", { scroll: false })}>
            {`router.push("/", { scroll: false })`}
          </button>
        </li>
        <li>
          <button onClick={() => router.push("/", { scroll: true })}>
            {`router.push("/", { scroll: true })`}
          </button>
        </li>
      </ul>
    </>
  );
}
