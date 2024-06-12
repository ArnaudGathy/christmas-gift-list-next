import Button from "@/components/Button";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { routes } from "@/lib/constants/routes";
import Input from "@/components/Input";
import { addGift } from "@/lib/actions/gifts";
import Highlight from "@/components/Highlight";

export default function Add() {
  return (
    <form action={addGift} className="flex h-full flex-1 flex-col">
      <Link
        href={routes.mylist.href}
        className="absolute top-0 flex items-center gap-2 text-sm font-light text-red-600"
      >
        <ArrowLeftIcon className="size-5" />
        <span>Retour à ma liste</span>
      </Link>

      <div className="flex flex-1 flex-col justify-center gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="target" className="text-center text-xl">
            Ajouter pour <Highlight>QUI</Highlight> ?
          </label>
          <select
            id="target"
            name="target"
            className={`h-10 rounded-lg bg-white text-center text-black focus:border-2 focus:border-red-600 focus:outline-none`}
            required
          >
            <option value="1">Moi</option>
            <option value="2">Personne 1</option>
            <option value="3">Personne 2</option>
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

      <Button className="my-4">Ajouter</Button>
    </form>
  );
}
