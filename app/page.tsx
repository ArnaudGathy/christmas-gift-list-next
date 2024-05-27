import { routes } from "@/lib/constants/routes";
import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex-1">
      <Link href={routes.add.href} className="">
        <Button>Ajouter</Button>
      </Link>
    </div>
  );
}
