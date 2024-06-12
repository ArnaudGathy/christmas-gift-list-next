"use client";

import { ShieldExclamationIcon } from "@heroicons/react/24/solid";
import Button from "@/components/Button";
import Highlight from "@/components/Highlight";
import { toast } from "react-toastify";

export default function Error({
  reset,
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const errorText = JSON.stringify(
    {
      name: error.name,
      message: error.message,
      stack: error.stack,
      digest: error.digest,
    },
    null,
    2,
  );

  const handleCopy = async () => {
    await navigator.clipboard.writeText(errorText);
    toast.info("Texte copié");
  };

  return (
    <div className="h-full p-4">
      <div className="flex h-full flex-col gap-4">
        <div className="flex h-full flex-col rounded-lg bg-red-600/90 p-4 shadow-lg">
          <div className="mb-1 flex  items-center gap-2">
            <ShieldExclamationIcon className="size-8" />
            <Highlight secondary>Oups !</Highlight>
            Une erreur est survenue.
          </div>

          <p className="text-sm">
            Peux tu transmettre le message suivant à Arnaud stp ?
          </p>

          <pre className="my-2 flex-1 overflow-auto text-wrap rounded bg-white/10 p-1 text-xs text-white">
            {errorText}
          </pre>
          <div className="mt-2 flex gap-2">
            <Button secondary onClick={() => handleCopy()}>
              Copier le message
            </Button>
            <Button secondary onClick={() => reset()}>
              Recharger la page
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
