import Button from "@/components/Button";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { routes } from "@/lib/constants/routes";
import Input from "@/components/Input";
import { addGift } from "@/lib/actions/gifts";
import Highlight from "@/components/Highlight";
import { getAllUsers } from "@/lib/queries/user";
import { getCurrentUserEmail } from "@/../auth";

export default async function Add() {
  const user = await getCurrentUserEmail();
  const users = await getAllUsers();

  const me = users.find(({ email }) => email === user);
  const allUsersButMe = users.filter(({ email }) => email !== user);

  if (!me) {
    throw new Error("Couldn't find current user");
  }

  const add = addGift.bind(null, me.id);

  return (
    <form action={add} className="flex h-full flex-1 flex-col md:items-center">
      <Link
        href={routes.mylist.href}
        className="absolute top-0 flex items-center gap-2 text-sm font-light text-red-600 md:left-4"
      >
        <ArrowLeftIcon className="size-5" />
        <span>Retour à ma liste</span>
      </Link>

      <div className="flex flex-1 flex-col justify-center gap-8 md:mt-7 md:flex-none md:justify-normal">
        <div className="flex flex-col gap-2">
          <label htmlFor="ownedById" className="text-center text-xl">
            Ajouter pour <Highlight>QUI</Highlight> ?
          </label>
          <select
            id="ownedById"
            name="ownedById"
            className={`h-10 rounded-lg bg-white text-center text-black focus:border-2 focus:border-red-600 focus:outline-none`}
            required
            defaultValue={me.id}
          >
            <option value={me.id}>Moi</option>
            <option disabled>--------</option>
            {allUsersButMe.map(({ name, id }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <Input
            name="name"
            id="name"
            placeholder="Un super gratte-dos"
            required
            pattern="^(?!http(s*):\/\/|www).*$"
            title="Le nom ne doit pas contenir un lien."
          >
            <Highlight>NOM</Highlight> du cadeau
          </Input>
        </div>

        <div className="flex flex-col gap-2">
          <Input
            name="link"
            id="link"
            type="url"
            placeholder="https://www.amazon.fr/hTdPlasOuCPt"
          >
            Ajouter un <Highlight>LIEN</Highlight>
          </Input>
        </div>
      </div>

      <Button type="submit" className="my-4 md:mt-16 md:w-96">
        Ajouter
      </Button>
    </form>
  );
}
