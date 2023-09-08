import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/thullyoufrn.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <div className="flex flex-col">
        <span className="text-sm font-semibold text-zinc-700">
          Thullyo Damasceno
        </span>

        <p className="break-all text-xs text-zinc-500">
          thullyodamasceno@gmail.com
        </p>
      </div>

      <button
        type="button"
        className="ml-auto rounded-md p-2 hover:bg-zinc-100"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
