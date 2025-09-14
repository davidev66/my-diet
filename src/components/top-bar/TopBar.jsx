import { useState } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaUser } from 'react-icons/fa';
import { FaCalculator } from 'react-icons/fa6';
import { FcPlanner } from 'react-icons/fc';

const TopBar = () => {
  const [open, setOpen] = useState(false);

  const linkCls = isActive => {
    return clsx(
      'flex items-center gap-2 px-2',
      isActive ? 'text-white font-bold' : 'text-gray-300 hover:text-white',
    );
  };

  return (
    <header className="bg-slate-900 text-white w-full">
      <div className="mx-auto max-w-6xl px-4">
        {/* Top bar: logo | centered menu (desktop) | hamburger (mobile) */}
        <div className="relative grid grid-cols-[auto_1fr_auto] items-center h-14">
          {/* Logo (left) */}
          <div className="flex items-center">
            <NavLink to="/home" className="font-semibold tracking-wide">
              MyDiet
            </NavLink>
          </div>

          {/* Single NAV (mobile = absolute dropdown, desktop = inline & centered) */}
          <nav
            className={`${
              open ? 'block' : 'hidden'
            } absolute left-0 top-14 w-full bg-slate-900 md:static md:block md:w-auto`}
          >
            <ul
              className="flex flex-col items-start gap-2 py-2 
               md:flex-row md:justify-end md:items-center md:space-x-1 md:gap-0 md:py-0"
            >
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) => linkCls(isActive)}
                  onClick={() => setOpen(false)}
                >
                  <FaHome />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/calculator"
                  className={({ isActive }) => linkCls(isActive)}
                  onClick={() => setOpen(false)}
                >
                  <FaCalculator />
                  <span>Calculator</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/planner"
                  className={({ isActive }) => linkCls(isActive)}
                  onClick={() => setOpen(false)}
                >
                  <FcPlanner />
                  <span>Planner</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => linkCls(isActive)}
                  onClick={() => setOpen(false)}
                >
                  <FaInfoCircle />
                  <span>About</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => linkCls(isActive)}
                  onClick={() => setOpen(false)}
                >
                  <FaUser />
                  <span>Login</span>
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Hamburger (right, mobile only) */}
          <div className="flex justify-end md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded hover:bg-slate-800 focus:outline-none focus:ring"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen(v => !v)}
            >
              {open ? (
                // X icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 1 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 1 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z" />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm.75 4.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
