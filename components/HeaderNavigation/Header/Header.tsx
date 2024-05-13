"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import NavMenu from "../NavMenu/NavMenu";

export default function Header() {
  const router = useRouter();

  const menuList = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Destination",
      href: "/destination",
    },
    {
      name: "Meet Your Crew",
      href: "/meet-your-crew",
    },
    {
      name: "Technology",
      href: "/technology",
    },
  ];

  return (
    <nav className="absolute z-10 flex min-w-[100%] max-w-[100%] flex-row items-center justify-between gap-[var(--space-s)] bg-transparent p-[var(--space-s-l)] md:pr-0 md:pt-0 xl:pt-[var(--space-s-l)]">
      <div>
        <Image
          onClick={() => router.push("/")}
          className="max-w-[40px] grow cursor-pointer"
          src="/assets/shared/logo.svg"
          alt="logo"
          width={40}
          height={40}
        />
      </div>

      <div className="relative left-[var(--space-l)] z-50 hidden h-[1px] grow divide-solid bg-white/40 xl:block"></div>

      <div className="hidden md:block">
        <NavMenu menuList={menuList} />
      </div>

      <div className="md:hidden">
        <SidebarMenu menuList={menuList} />
      </div>
    </nav>
  );
}
