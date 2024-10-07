import Button from "@/components/Button";
import { mountainsOfChristmas } from "@/lib/constants/fonts";
import { authenticate } from "@/lib/actions/auth";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col justify-center p-4">
      <div className="flex flex-col gap-4 rounded-lg bg-white/60 p-6 text-center">
        <h1
          className={`${mountainsOfChristmas.className}
         text-3xl font-semibold text-red-600`}
        >
          Les cadeaux du père Gathy
        </h1>
        <form action={authenticate}>
          <Button type="submit">Se connecter</Button>
        </form>
      </div>
    </div>
  );
}
