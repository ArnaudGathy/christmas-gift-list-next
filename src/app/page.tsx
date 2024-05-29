import { routes } from "@/lib/constants/routes";
import Link from "next/link";
import Button from "@/components/Button";
import List from "@/components/list/List";
import { otherPersonnalItems, personnalItems } from "@/lib/constants/mocks";

export default function Home() {
  // TODO get personnal items, exclude items added by other users, orderBy name

  return (
    <div className="flex flex-col gap-6 flex-1 my-4">
      <List
        isPersonnal
        items={personnalItems}
        target="moi"
        currentUser="Arnaud"
      />

      <List
        isPersonnal
        items={otherPersonnalItems}
        target="les autres"
        currentUser="Arnaud"
      />

      <Link href={routes.add.href} className="">
        <Button secondary>Ajouter</Button>
      </Link>
    </div>
  );
}
