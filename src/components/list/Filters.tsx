"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Filters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams);

  const handleChange = (isChecked: boolean) => {
    if (isChecked) {
      params.set("showUnclaimed", "true");
    } else {
      params.delete("showUnclaimed");
    }
    router.replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="ml-2 flex h-6 flex-1">
      <div className="text-red-600">
        <label className="inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            defaultChecked={params.get("showUnclaimed")?.toString() === "true"}
            onChange={(event) => handleChange(event.target.checked)}
          />
          <div
            className="peer relative h-6 w-11 rounded-full
         bg-red-600 after:absolute after:start-[2px]
         after:top-[2px] after:h-5 after:w-5
         after:rounded-full after:border after:bg-white after:transition-all after:content-['']
         peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none rtl:peer-checked:after:-translate-x-full"
          ></div>
          <span className="ms-3">Voir les cadeaux disponibles</span>
        </label>
      </div>
    </div>
  );
}
