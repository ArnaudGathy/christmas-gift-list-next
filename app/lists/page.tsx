import Highlight from "@/components/Highlight";
import {
  ChevronRightIcon,
  ArrowTopRightOnSquareIcon,
  CheckIcon,
} from "@heroicons/react/16/solid";
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
    {
      name: "conformateur d'archéologie en plastique ou bambou (surtout pas métal) et qui fasse pas 2cm de haut (mes objets font en moyenne 1 à 2mm d'épaisseur)",
      addedBy: "Ingrid",
      link: "https://www.google.be",
    },
    {
      name: "conformateur d'archéologie en plastique ou bambou (surtout pas métal) et qui fasse pas 2cm de haut (mes objets font en moyenne 1 à 2mm d'épaisseur)",
      addedBy: "Ingrid",
      selectedBy: "Ingrid",
    },
    { name: "Kit de cuisine gourmande" },
    {
      name: "Ours en peluche chaleureux",
      addedBy: "Isabella",
      selectedBy: "Manon",
    },
    {
      name: "Écharpe cashmère confortable",
      selectedBy: "Anaëlle",
      link: "https://www.google.be",
    },
    {
      name: "housse pour Kindle Paperwhite écran 6,8 pouces",
      selectedBy: "Magaly",
    },
    { name: "Des foulards pour renouveler mon stock" },
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
      name: "Écharpe cashmère confortable",
      addedBy: "Jean",
      selectedBy: "Test",
      link: "https://www.google.be",
    },
    { name: "Kit de soins de spa de luxe", addedBy: "Emily" },
    { name: "Kit de cuisine gourmande", addedBy: "Sarah" },
  ],
};

export default function Home() {
  // TODO get user
  const me = "Arnaud";

  // TODO list filters

  return (
    <div className="flex flex-col flex-1 gap-6 w-full">
      {Object.entries(items).map(([target, items]) => (
        <div key={target} className="bg-red-500/80 rounded-lg shadow-lg">
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
                    className={clsx("font-medium flex gap-2", {
                      "line-through text-green-500": !!selectedBy,
                      "text-ice": !!link,
                    })}
                  >
                    <div className="min-w-5">
                      {!!selectedBy ? (
                        <CheckIcon className="size-5 text-green-400" />
                      ) : !!link ? (
                        <ArrowTopRightOnSquareIcon className="size-5 text-ice" />
                      ) : (
                        <ChevronRightIcon className="size-5" />
                      )}
                    </div>
                    {link ? (
                      <a href={link} target="_blank" rel="noreferrer">
                        {name}
                      </a>
                    ) : (
                      name
                    )}
                  </span>
                  <p className="text-xs text-white/60 min-h-5 pl-7">
                    {selectedBy && <>Choisi par : {selectedBy}</>}
                    {!selectedBy && addedBy && <>Ajouté par : {addedBy}</>}
                  </p>
                </div>
                <div className="min-w-8">
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
