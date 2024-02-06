import { NavItem } from "./NavItem";

const Navbar = () => {

  const activeStyle = 'underline underline-offset-4'

  const navHome = [
    { name: 'Shopi', to: '/', className: 'font-semibold text-xl no-underline' },
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
    { name: 'Car', to: '/car' }
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
      </ul>
    </nav>
  );
}
export { Navbar };