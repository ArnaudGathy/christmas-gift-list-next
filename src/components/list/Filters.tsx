export default function Filters() {
  return (
    <div className="flex flex-1 h-6 ml-2">
      <div className="text-red-600">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div
            className="relative w-11 h-6 bg-red-600 peer-focus:outline-none
         rounded-full peer peer-checked:after:translate-x-full
         rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-['']
         after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border
         after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
          ></div>
          <span className="ms-3">Voir les cadeaux disponibles</span>
        </label>
      </div>
    </div>
  );
}
