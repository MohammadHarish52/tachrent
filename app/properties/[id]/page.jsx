"use client";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

const PropertPage = () => {
  const router = useRouter();
  const search = useSearchParams();
  const name = search.get("name");
  const { id } = useParams();
  const pathname = usePathname();
  return (
    <div>
      <button onClick={() => router.push("/")} className="bg-blue-500 p-3 ">
        Go Back {id} {name} {pathname}
      </button>
    </div>
  );
};
export default PropertPage;
