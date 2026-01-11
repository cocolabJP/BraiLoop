import { useIsMobile } from "@/hooks/useIsMobile";
import { Link } from "react-router";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-30 bg-base-100/90 h-16 w-full backdrop-blur">
      <div className="flex items-center justify-between max-w-[1500px] mx-auto px-6 lg:px-10 py-4">
        <Link to='/'>
          {/* TODO: ロゴ作成 */}
          <h1 className="text-2xl font-semibold text-base-content">BraiLoop</h1>
        </Link>
        {isMobile ? (
          <HamburgerMenu />
        ) : (
          <nav className="flex items-center gap-6">
            <NavLink to='/map'>マップ</NavLink>
            <NavLink to='/docs'>APIドキュメント</NavLink>
          </nav>
        )}
      </div>
    </header>
  )
}

function NavLink({
  to,
  children
}: {
  to: string
  children: React.ReactNode
}) {
  return (
    <Link
      to={to}
      className={`
        text-sm font-semibold border-b-2 border-transparent pb-0.5 px-1 transition-all duration-200
        hover:text-tp-200 hover:border-tp-200
      `}
    >
      {children}
    </Link>
  )
}