import { useState } from "react";
import { Link } from "react-router";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <label className="swap swap-rotate">
        <input type="checkbox" onChange={() => setIsOpen(v => !v)} />
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512">
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512">
          <polygon
            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
      <nav>
        <div
          className={`
            fixed top-16 left-0 w-screen bg-base-100 border-b border-base-300 py-2
            transform transition-all duration-300 ease-out
            ${isOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-4 opacity-0 pointer-events-none"
            }
          `}
        >
          <ul className="flex flex-col gap-2 mx-4">
            <li className="w-full text-center border-b border-base-200 pb-2">
              <Link to="/map" className="font-semibold">マップ</Link>
            </li>
            <li className="w-full text-center">
              <Link to="/docs" className="font-semibold">APIドキュメント</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}