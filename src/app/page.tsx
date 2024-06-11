import { routes } from "@/lib/constants/routes";
import Link from "next/link";
import Button from "@/components/Button";
import List from "@/components/list/List";
import { otherPersonnalItems, personnalItems } from "@/lib/constants/mocks";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function Home() {
  // TODO get personnal items, exclude items added by other users, orderBy name

  return (
    <div className="relative h-full">
      <div className="flex flex-1 flex-col gap-4 pb-[5.5rem] pt-4">
        <List
          isPersonnal
          items={personnalItems}
          target="moi"
          currentUser="Arnaud"
          emptyLabel='Ajoute ton premier cadeau avec le bouton "+"'
        />

        <List
          isPersonnal
          items={otherPersonnalItems}
          target="les autres"
          currentUser="Arnaud"
          emptyLabel="Tu peux aussi ajouter des cadeaux pour les autres."
        />
      </div>

      <Link href={routes.add.href} className="fixed bottom-[84px] right-4">
        <Button secondary round>
          <PlusIcon className="size-8" />
        </Button>
      </Link>
    </div>
  );
}
