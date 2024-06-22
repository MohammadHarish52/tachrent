"use client";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";

const PropertiesPage = () => {
  const router = useRouter();
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-3xl">Property Page</h1>
      <Link href="/">Go Back</Link>
    </div>
  );
};

export default PropertiesPage;
