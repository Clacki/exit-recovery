import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/exiter/userList", label: "exiter" },
  { href: "/exiting", label: "exiting" },
  { href: "/exited", label: "exited" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 w-full max-w-[1280px] flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:min-h-24 lg:flex-nowrap lg:px-10">
        <Link href="/" className="group flex items-center gap-3" aria-label="EXIT 홈">
          <Image
            src="/images/common/logo.svg"
            alt="EXIT"
            width={90}
            height={34}
            priority
            className="h-9 w-auto transition group-hover:opacity-80"
          />
        </Link>

        <nav className="order-3 w-full overflow-x-auto lg:order-none lg:w-auto" aria-label="주요 메뉴">
          <ul className="flex min-w-max items-center gap-8 text-lg font-bold text-gray-900 sm:gap-10 lg:gap-16">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-emerald-600 focus-visible:text-emerald-600">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/search"
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-gray-200 text-gray-700 transition hover:border-emerald-500 hover:text-emerald-600"
            aria-label="검색"
          >
            <Image src="/images/common/icon-search.png" alt="" width={20} height={20} aria-hidden="true" />
          </Link>
          <Link
            href="/myPage"
            className="hidden rounded border border-gray-200 px-4 py-2 text-sm font-bold text-gray-700 transition hover:border-emerald-500 hover:text-emerald-600 sm:inline-flex"
          >
            My Page
          </Link>
          <button
            type="button"
            className="rounded bg-emerald-500 px-4 py-2 text-sm font-black text-white transition hover:bg-emerald-600"
          >
            Log in
          </button>
        </div>
      </div>
    </header>
  );
}
