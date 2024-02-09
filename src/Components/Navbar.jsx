import { useContext } from "react";
import { NavItem } from "./NavItem";
import { ShoppinCartContext } from "../Context";

const Navbar = () => {
  const { countCar } = useContext(ShoppinCartContext);
  const activeStyle = 'underline underline-offset-4'

  const navHome = [
    { name: 'Shopi', to: '/', className: 'font-semibold text-xl no-underline hover:text-black-200' },
  ];
  const navItems = [
    { name: 'All', to: '/' },
    { name: 'Clothes', to: '/clothes' },
    { name: 'Electronics', to: '/electronics' },
    { name: 'Furnitures', to: '/furnitures' },
    { name: 'Toys', to: '/toys' },
    { name: 'Others', to: '/others' }
  ];
  const navItemsUser = [
    { name: 'User', to: '/user', className: 'text-black/60' },
    { name: 'My Orders', to: '/my-orders' },
    { name: 'My Account', to: '/my-account' },
    { name: 'Signin', to: '/signin' },
    { name: `Car ${countCar}`, to: '/car' }
  ];



  return(
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3 text-lg">
        {
          navHome.map(({ to, className, name }) => (
            <NavItem
              key={ name.toLocaleLowerCase() }
              to={to}
              className={className}
              navbarName={name}
            />
          ))
        }
        {
          navItems.map(({ to, className, name }) => (
            <NavItem
              key={ name.toLocaleLowerCase() }
              to={to}
              className={className}
              navbarName={name}
              activeStyle={activeStyle}
            />
          ))
        }
      </ul>
      <ul className="flex items-center gap-3">
        {
          navItemsUser.map(({ to, className, name }) => (
            <NavItem
              key={ name.toLocaleLowerCase() }
              to={to}
              className={className}
              navbarName={name}
              activeStyle={activeStyle}
            />
          ))
        }
        <li>
          <div className="flex justify-between items-center">
            <svg className="w-6 h-6 text-red-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            { countCar }
          </div>
        </li>
      </ul>
    </nav>
  );
}
export { Navbar };