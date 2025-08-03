import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <>
<nav className="flex justify-between text-white px-6 py-5 bg-black">
  <Link className="navbar-brand" to="/">
    <h2 className="text-2xl bg-gradient-logo bg-clip-text text-transparent">Mhamad</h2>
  </Link>
  <ul className="md:flex hidden items-center gap-10">
    <li className="font-semibold hover:bg-gradient-logo hover:bg-clip-text hover:text-transparent">
      <Link to="/" className="ul active">Home</Link>
    </li>
    <li className="font-semibold hover:bg-gradient-logo hover:bg-clip-text hover:text-transparent">
      <Link to="/about" className="ul">About</Link>
    </li>
    <li className="font-semibold hover:bg-gradient-logo hover:bg-clip-text hover:text-transparent">
      <Link to="/project" className="ul">Project</Link>
    </li>
    <li className="font-semibold hover:bg-gradient-logo hover:bg-clip-text hover:text-transparent">
      <Link to="/skills" className="ul">Skills</Link>
    </li>
    <li className="font-semibold hover:bg-gradient-logo hover:bg-clip-text hover:text-transparent">
      <Link to="/contact" className="ul">Contact</Link>
    </li>
  </ul>

  {/* Mobile Nav */}
  <ul
    className={`fixed top-0 z-50 bg-black text-white w-2/3 h-screen shadow-2xl
      md:hidden flex flex-col gap-10 text-medium p-7 pt-20 duration-500
      ${open ? "right-0" : "right-[-100%]"}`}
  >
    <li className="font-semibold hover:bg-gradient-logo hover:bg-clip-text hover:text-transparent">
      <Link to="/" className="ul active">Home</Link>
    </li>
    <li className="font-semibold hover:bg-gradient-logo hover:bg-clip-text hover:text-transparent">
      <Link to="/about" className="ul">About</Link>
    </li>
    <li className="font-semibold hover:bg-gradient-logo hover:bg-clip-text hover:text-transparent">
      <Link to="/project" className="ul">Project</Link>
    </li>
    <li className="font-semibold hover:bg-gradient-logo hover:bg-clip-text hover:text-transparent">
      <Link to="/skills" className="ul">Skills</Link>
    </li>
    <li className="font-semibold hover:bg-gradient-logo hover:bg-clip-text hover:text-transparent">
      <Link to="/contact" className="ul">Contact</Link>
    </li>
  </ul>

  <div className="text-2xl md:hidden z-50" onClick={() => setOpen(!open)}>
      {open ? <IoClose /> : <IoMenu />}
    </div>
</nav>
    </>
  )
}
