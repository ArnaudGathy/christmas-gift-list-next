import {
  GiftIcon,
  ListBulletIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

type Route = {
  heading: string;
  tabName?: string;
  href: string;
  icon?: React.ElementType;
};

export const routes: Record<string, Route> = {
  mylist: {
    heading: "Ma liste de souhaits",
    tabName: "Ma liste",
    href: "/mylist",
    icon: GiftIcon,
  },
  add: {
    heading: "Ajouter un cadeau",
    href: "/mylist/add",
  },
  others: {
    heading: "Listes des autres",
    tabName: "Demandes",
    href: "/others",
    icon: ListBulletIcon,
  },
  gifts: {
    heading: "Mes cadeaux à offrir",
    tabName: "Cadeaux",
    href: "/gifts",
    icon: ShoppingCartIcon,
  },
};

export const menuItems = [routes.mylist, routes.others, routes.gifts];
