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
  home: {
    heading: "Ma liste de souhaits",
    tabName: "Ma liste",
    href: "/",
    icon: ShoppingCartIcon,
  },
  lists: {
    heading: "Listes des autres",
    tabName: "Demandes",
    href: "/lists",
    icon: ListBulletIcon,
  },
  add: {
    heading: "Ajouter un cadeau",
    href: "/add",
  },
  gifts: {
    heading: "Mes cadeaux à offrir",
    tabName: "Cadeaux",
    href: "/gifts",
    icon: GiftIcon,
  },
};

export const menuItems = [routes.home, routes.lists, routes.gifts];
