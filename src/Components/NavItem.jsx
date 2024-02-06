import { NavLink } from "react-router-dom";

const  NavItem = ({ className, to, activeStyle, navbarName }) => {
  return (
    <li className={(className)}>
      <NavLink to={to} className={ ({ isActive }) => (isActive ? activeStyle : undefined) } >
        {navbarName}
      </NavLink>
    </li>
  )
}
export { NavItem }