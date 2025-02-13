"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>will u be my valentine</p>
      <Link href={`/create?template=${"1"}`}>
        <Button>Edit</Button>
      </Link>
    </div>
  );
}
