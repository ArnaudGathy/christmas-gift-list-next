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
         bg-gradient-to-b from-red-700 to-red-500
         bg-clip-text text-3xl font-semibold text-transparent`}
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
