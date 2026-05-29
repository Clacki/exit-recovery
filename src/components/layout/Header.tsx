import Link from "next/link";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/exiting", label: "진행 프로젝트" },
  { href: "/exited", label: "완료 프로젝트" },
  { href: "/exiter/userList", label: "엑시터 목록" },
  { href: "/search", label: "검색" },
  { href: "/myPage", label: "마이페이지" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__logo" href="/" aria-label="EXIT 홈">
          EXIT
        </Link>

        <nav className="site-header__nav" aria-label="주요 메뉴">
          <ul className="site-header__nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="site-header__nav-link" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
