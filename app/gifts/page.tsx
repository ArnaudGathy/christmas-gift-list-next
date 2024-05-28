import List from "@/components/list/List";
import { items } from "@/lib/constants/mocks";

export default function Home() {
  // TODO get list of item selectedBy current user, orderBy name

  return (
    <div className="flex-1 my-4">
      <List items={items} currentUser="Arnaud" target="offrir" />
    </div>
  );
}
