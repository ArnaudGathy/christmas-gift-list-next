"use client";

import { mountainsOfChristmas } from "@/lib/constants/fonts";
import Button from "@/components/Button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Error() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  return (
    <div className="flex flex-1 flex-col justify-center p-4">
      <div className="flex flex-col gap-4 rounded-lg bg-white/60 p-6 text-center">
        <h1
          className={`${mountainsOfChristmas.className}
         bg-gradient-to-b from-red-700 to-red-500
         bg-clip-text text-3xl font-semibold text-transparent`}
        >
          Les cadeaux du père Gathy
        </h1>
        {error && (
          <div className="text-red-600">
            {error === "AccessDenied" ? (
              <p>{`Ce compte Google n'est pas autorisé à accéder à l'application.`}</p>
            ) : (
              <div className="flex flex-col gap-2">
                <span>{`Une erreur inconnue est survenue. Transmet le message d'erreur suivant à Arnaud :`}</span>
                <span className="text-black">{`/auth/erorr?error=${error}`}</span>
              </div>
            )}
          </div>
        )}
        <Link href="/auth/login">
          <Button type="submit">Retour</Button>
        </Link>
      </div>
    </div>
  );
}
