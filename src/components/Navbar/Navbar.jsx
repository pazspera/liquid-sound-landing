import { NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/thank-you">Thank you</NavLink>
    </>
  )
}