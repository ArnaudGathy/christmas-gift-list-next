import { mountainsOfChristmas } from "@/lib/constants/fonts";
import Button from "@/components/Button";
import Link from "next/link";
import ErrorInfo from "@/app/auth/error/ErrorInfo";
import { Suspense } from "react";

export default function Error() {
  return (
    <div className="flex flex-1 flex-col justify-center p-4">
      <div className="flex flex-col gap-4 rounded-lg bg-white/60 p-6 text-center">
        <h1
          className={`${mountainsOfChristmas.className}
         text-3xl font-semibold text-red-600`}
        >
          Les cadeaux du père Gathy
        </h1>
        <Suspense>
          <ErrorInfo />
        </Suspense>
        <Link href="/auth/login">
          <Button type="submit">Retour</Button>
        </Link>
      </div>
    </div>
  );
}
