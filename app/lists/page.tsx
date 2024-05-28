import Highlight from "@/components/Highlight";
import {
  ArrowTopRightOnSquareIcon,
  CheckIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";
import bullet from "@/public/bullet.svg";
import { clsx } from "clsx";
import ClaimItem from "@/components/add/ClaimItem";

const items = {
  Arnaud: [
    { name: "Ours en peluche chaleureux" },
    {
      name: "Matériel de camping de plein air",
      link: "https://www.google.be",
      addedBy: "Michael",
      selectedBy: "Arnaud",
    },
  ],
  Magaly: [
    {
      name: "Écharpe cashmère confortable",
      addedBy: "Jean",
      link: "https://www.google.be",
    },
    { name: "Des foulards pour renouveler mon stock" },
    {
      name: "conformateur d'archéologie en plastique ou bambou (surtout pas métal) et qui fasse pas 2cm de haut (mes objets font en moyenne 1 à 2mm d'épaisseur)",
      addedBy: "Ingrid",
      link: "https://www.google.be",
    },
    { name: "Kit de cuisine gourmande" },
    {
      name: "conformateur d'archéologi en plastique ou bambou (surtout pas métal) et qui fasse pas 2cm de haut (mes objets font en moyenne 1 à 2mm d'épaisseur)",
      addedBy: "Ingrid",
      selectedBy: "Ingrid",
    },
    {
      name: "Ours en peluche chaleureux",
      addedBy: "Isabella",
      selectedBy: "Manon",
    },
    {
      name: "Écharpe cashmèree confortable",
      selectedBy: "Anaëlle",
      link: "https://www.google.be",
    },
    {
      name: "housse pour Kindle Paperwhite écran 6,8 pouces",
      selectedBy: "Magaly",
    },
  ],
  Papa: [
    {
      name: "Ours en peluche chaleureux",
      addedBy: "Isabella",
      link: "https://www.google.be",
    },
    {
      name: "Matériel de camping de plein air",
      addedBy: "Michael",
      selectedBy: "Test",
    },
  ],
  Maman: [
    {
      name: "Écharpe cashmire confortable",
      addedBy: "Jean",
      selectedBy: "Test",
      link: "https://www.google.be",
    },
    { name: "Kit de soins de spa de luxe", addedBy: "Emily" },
    { name: "Kit de cuisine gourmande", addedBy: "Sarah" },
  ],
};

export default function Home() {
  // TODO get lists
  // group by user
  // order by user
  // order by selected or not (order by claimed at), order by added at

  // TODO get user
  const me = "Arnaud";

  // TODO list filters
  // Only available to claim
  // One person's list only

  return (
    <div className="flex flex-col flex-1 gap-6 w-full">
      {Object.entries(items).map(([target, items]) => (
        <div key={target} className="bg-red-600/90 rounded-lg shadow-lg">
          <div className="px-4 py-2 border-b border-b-white/30">
            <h2 className="text-lg font-semibold">
              Pour <Highlight secondary>{target}</Highlight>
            </h2>
          </div>
          <div className="px-2 py-2 space-y-2">
            {items.map(({ name, addedBy, selectedBy, link }) => (
              <div key={name} className="flex justify-between gap-2">
                <div>
                  <span
                    className={clsx("font-medium flex gap-1", {
                      "line-through text-green-500": !!selectedBy,
                    })}
                  >
                    <div className="min-w-5 flex justify-center">
                      {!!selectedBy ? (
                        <CheckIcon className="size-5 text-green-400" />
                      ) : (
                        <Image
                          className="h-3 mt-1"
                          alt="bullet"
                          width="12"
                          height="12"
                          src={bullet}
                        />
                      )}
                    </div>
                    {link ? (
                      <a href={link} target="_blank" rel="noreferrer">
                        <ArrowTopRightOnSquareIcon className="size-5 inline mr-1 mb-1" />
                        <span>{name}</span>
                      </a>
                    ) : (
                      name
                    )}
                  </span>
                  <p className="text-xs text-white/60 min-h-5 pl-6">
                    {selectedBy && <>Choisi par : {selectedBy}</>}
                    {!selectedBy && addedBy && <>Ajouté par : {addedBy}</>}
                  </p>
                </div>
                <div className="min-w-6">
                  {selectedBy === me ? (
                    <ClaimItem id={1} cancel />
                  ) : !selectedBy ? (
                    <ClaimItem id={1} />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
