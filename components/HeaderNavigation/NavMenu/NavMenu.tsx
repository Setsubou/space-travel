import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { MenuList } from "../interface";
import { usePathname } from "next/navigation";

const MenuLink = ({ href, name, index }: { href: string; name: string; index: number }) => {
  const pathName = usePathname();
  const isActive = href === pathName;

  return (
    <NavigationMenu.Link
      active={isActive}
      className="font-barlowCondensed text-[length:var(--step--1)] uppercase tracking-spaceKerning">
      <Link className="xl:flex xl:flex-row xl:gap-[var(--space-2xs)]" href={href}>
        <p className="hidden xl:block xl:font-bold">0{index}</p>
        <p>{name}</p>
      </Link>
      <div className={`absolute -bottom-[var(--space-m)] h-[3px] bg-white ${isActive ? "w-full" : "w-0"}`}></div>
    </NavigationMenu.Link>
  );
};

export default function NavMenu({ menuList }: { menuList: MenuList[] }) {
  const menuListItems = menuList.map((menu, index) => {
    return (
      <NavigationMenu.Item className="relative" key={menu.name}>
        <MenuLink href={menu.href} name={menu.name} index={index} />
      </NavigationMenu.Item>
    );
  });

  return (
    <div className="relative">
      <NavigationMenu.Root className="flex flex-row bg-white/5 p-[var(--space-m)] text-white backdrop-blur-spaceBlur xl:px-[var(--space-xl)] xl:pr-[var(--space-2xl)]">
        <NavigationMenu.List className="flex flex-row gap-[var(--space-m)] xl:gap-[var(--space-xl)]">
          {menuListItems}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
}
