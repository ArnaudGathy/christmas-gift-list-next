import { routes } from "@/lib/constants/routes";
import Link from "next/link";
import Button from "@/components/Button";
import List from "@/components/list/List";
import { PlusIcon } from "@heroicons/react/24/solid";
import { getCurrentUserEmail } from "@/../auth";
import {
  getMyGiftsAddedByMe,
  getOtherPeoplesGiftsAddedByMe,
} from "@/lib/queries/gift";

export default async function Home() {
  // TODO Add suspense + skeleton ?
  const currentUser = await getCurrentUserEmail();

  const [myGifts, otherPeoplesGifts] = await Promise.all([
    getMyGiftsAddedByMe(),
    getOtherPeoplesGiftsAddedByMe(),
  ]);

  return (
    <div className="relative h-full">
      <div className="flex flex-1 flex-col gap-4 pb-[5.5rem] pt-4">
        <List
          isPersonnal
          gifts={myGifts}
          target="moi"
          currentUser={currentUser}
          emptyLabel='Ajoute ton premier cadeau avec le bouton "+"'
        />

        <List
          isPersonnal
          gifts={otherPeoplesGifts}
          target="les autres"
          currentUser={currentUser}
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
