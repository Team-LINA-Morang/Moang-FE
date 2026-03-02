import Link from "next/link"

export function Header() {
  return (
    <header className="w-full" style={{ backgroundColor: "#1a1a6e" }}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="flex h-8 w-8 items-center justify-center rounded text-xs font-bold leading-none"
            style={{ backgroundColor: "#d4a843", color: "#1a1a6e" }}
          >
            <span>
              LI
              <br />
              NA
            </span>
          </div>
          <span className="text-lg font-bold text-white">
            {"라이나생명"}
          </span>
          <span
            className="rounded px-1.5 py-0.5 text-xs font-semibold"
            style={{ backgroundColor: "#d4a843", color: "#1a1a6e" }}
          >
            {"다이렉트"}
          </span>
        </div>

        {/* Main Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="#"
            className="text-sm font-semibold text-white hover:opacity-80"
          >
            {"추천보험"}
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold text-white hover:opacity-80"
          >
            {"치아"}
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold text-white hover:opacity-80"
          >
            {"암"}
          </Link>
          <Link
            href="#"
            className="text-sm font-semibold text-white hover:opacity-80"
          >
            {"건강"}
          </Link>
        </nav>

        {/* Right Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#"
            className="text-xs text-white/80 hover:text-white"
          >
            {"이벤트"}
          </Link>
          <Link
            href="#"
            className="text-xs text-white/80 hover:text-white"
          >
            {"진행중설계조회"}
          </Link>
          <Link
            href="#"
            className="text-xs text-white/80 hover:text-white"
          >
            {"고객센터"}
          </Link>
        </nav>
      </div>
    </header>
  )
}
