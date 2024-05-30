import { routes } from "@/lib/constants/routes";
import Link from "next/link";
import Button from "@/components/Button";
import List from "@/components/list/List";
import { otherPersonnalItems, personnalItems } from "@/lib/constants/mocks";

export default function Home() {
  // TODO get personnal items, exclude items added by other users, orderBy name

  return (
    <div className="h-full flex flex-col flex-1 pt-4">
      <div className="flex flex-col flex-1 gap-4">
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

        {/*// TODO remove extra lists*/}
        <List
          isPersonnal
          items={personnalItems}
          target="moi"
          currentUser="Arnaud"
        />
        <List
          isPersonnal
          items={personnalItems}
          target="moi"
          currentUser="Arnaud"
        />
        <List
          isPersonnal
          items={personnalItems}
          target="moi"
          currentUser="Arnaud"
        />
      </div>

      <Link href={routes.add.href}>
        <Button className="my-4">Ajouter</Button>
      </Link>
    </div>
  );
}
