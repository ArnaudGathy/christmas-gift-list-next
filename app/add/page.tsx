import Button from "@/components/Button";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { routes } from "@/lib/constants/routes";
import Input from "@/components/Input";
import { addGift } from "@/lib/actions/gifts";
import Highlight from "@/components/Highlight";

export default function Add() {
  return (
    <form
      action={addGift}
      className="flex flex-col flex-1 justify-center gap-8"
    >
      <Link
        href={routes.home.href}
        className="absolute top-0 flex gap-2 items-center text-sm text-red-500 font-light"
      >
        <ArrowLeftIcon className="size-5" />
        <span>Retour à ma liste</span>
      </Link>

      <div className="flex flex-col gap-2">
        <label htmlFor="target" className="text-center text-xl">
          Ajouter pour <Highlight>QUI</Highlight> ?
        </label>
        <select
          id="target"
          name="target"
          className={`text-center text-black h-10 bg-white rounded-lg focus:border-2 focus:border-red-500 focus:outline-none`}
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

      <Button className="mt-10">Ajouter</Button>
    </form>
  );
}
