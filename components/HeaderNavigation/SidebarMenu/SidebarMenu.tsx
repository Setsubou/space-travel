import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import Image from "next/image";
import { MenuList } from "../interface";

export default function SidebarMenu({ menuList }: { menuList: MenuList[] }) {
  const sidebarStyles = {
    bmBurgerButton: {
      width: "21px",
      height: "20px",
      position: "relative",
    },
    bmCrossButton: {
      top: "var(--space-l)",
      right: "var(--space-s)",
    },
    bmMenuWrap: {
      minHeight: "100vh",
      top: "0px",
      width: "66%",
    },
    bmMenu: {
      backdropFilter: "blur(32px)",
      "-webkit-backdrop-filter": "blur(32px)",
      paddingLeft: "var(--space-m)",
      paddingTop: "var(--space-3xl)",
    },

    bmItemList: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-m)",
      color: "#ffffff",
    },
  };

  const menuLink = menuList.map((menu, index) => {
    return (
      <Link
        key={index}
        href={menu.href}
        className="font-barlowCondensed text-[length:var(--step-0)] uppercase tracking-[0.16rem] text-space_light">
        <span className="mr-[var(--space-xs)] font-bold">0{index}</span>
        {menu.name}
      </Link>
    );
  });

  return (
    <Menu
      right
      styles={sidebarStyles}
      customBurgerIcon={
        <Image
          className="max-h-[21px] max-w-[20px] grow-0 "
          src="/assets/shared/icon-hamburger.svg"
          alt=""
          width={40}
          height={40}
        />
      }
      customCrossIcon={
        <Image
          className="max-h-[21px] max-w-[20px] grow-0 "
          src="/assets/shared/icon-close.svg"
          alt=""
          width={40}
          height={40}
        />
      }>
      {menuLink}
    </Menu>
  );
}
