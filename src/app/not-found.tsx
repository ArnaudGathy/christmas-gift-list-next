import Button from "@/components/Button";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { routes } from "@/lib/constants/routes";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex h-full flex-1 flex-col justify-between py-4">
      <div className="flex flex-1 flex-col justify-center">
        <div className="flex items-center gap-4 rounded-lg bg-red-600/90 p-4 shadow-lg">
          <QuestionMarkCircleIcon className="size-12" />
          <span className="text-xl">{`Cette page n'existe pas.`}</span>
        </div>
      </div>
      <Link href={routes.home.href}>
        <Button>Retour à ma liste</Button>
      </Link>
    </div>
  );
}
