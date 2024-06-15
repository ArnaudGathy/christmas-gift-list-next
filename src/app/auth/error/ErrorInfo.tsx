"use client";
import { useSearchParams } from "next/navigation";

export default function ErrorInfo() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  if (!error) {
    return null;
  }

  return (
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
  );
}
