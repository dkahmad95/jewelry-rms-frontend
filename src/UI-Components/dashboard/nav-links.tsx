"use client";
import {
  UserGroupIcon,

  CurrencyDollarIcon,
  TruckIcon
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import {Link, useLocation} from 'react-router-dom';



const links = [
  // { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Suppliers",
    href: "/suppliersList",
    icon: TruckIcon,
  },
  { name: "Customers", href: "/customersList", icon: UserGroupIcon },
  { name: "Expenses", href: "/expenses", icon: CurrencyDollarIcon },
];

export default function NavLinks() {
  const pathname = useLocation().pathname;
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            to={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
