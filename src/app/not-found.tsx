import Button from "@/components/Button";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { routes } from "@/lib/constants/routes";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="h-full flex flex-col flex-1 py-4 justify-between">
      <div className="flex flex-col justify-center flex-1">
        <div className="flex gap-4 items-center p-4 bg-red-600/90 rounded-lg shadow-lg">
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
