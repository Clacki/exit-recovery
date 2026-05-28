import Link from "next/link";

const navItems = ["홈", "소개", "서비스", "문의"];

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
              <li key={item}>
                <a className="site-header__nav-link" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
