"use client";

import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import PageTitle from "@/components/PageTitle/PageTitle";

interface Technology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

export default function Technology() {
  let technology_list = {
    technology: [
      {
        name: "Launch vehicle",
        images: {
          portrait: "/assets/technology/image-launch-vehicle-portrait.jpg",
          landscape: "/assets/technology/image-launch-vehicle-landscape.jpg",
        },
        description:
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      },
      {
        name: "Spaceport",
        images: {
          portrait: "/assets/technology/image-spaceport-portrait.jpg",
          landscape: "/assets/technology/image-spaceport-landscape.jpg",
        },
        description:
          "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      },
      {
        name: "Space capsule",
        images: {
          portrait: "/assets/technology/image-space-capsule-portrait.jpg",
          landscape: "/assets/technology/image-space-capsule-landscape.jpg",
        },
        description:
          "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      },
    ],
  };

  const [filteredData, setFilteredData] = useState<Technology>(() =>
    filterTechnologyData("Launch vehicle"),
  );

  function filterTechnologyData(userChoice: string) {
    const technology = technology_list.technology.filter(
      (technology) => technology.name === userChoice,
    ) as Technology[];
    return technology[0];
  }

  const listTabTriggers = technology_list.technology.map((technology, index) => {
    return (
      <Tabs.Trigger
        className="data-[state=inactive]:hover:border-space_light data-[state=inavtive]:hover:transition-all size-[42px] xl:size-[96px] cursor-pointer rounded-full font-bellefair text-[length:var(--step-0)] data-[state=active]:border-0 data-[state=inactive]:border-[1px] data-[state=inactive]:border-space_light/25 data-[state=active]:bg-space_light data-[state=inactive]:bg-transparent data-[state=active]:text-space_dark data-[state=inactive]:text-space_light md:h-[60px] md:w-[60px]"
        value={technology.name}
        key={index}>
        {index + 1}
      </Tabs.Trigger>
    );
  });

  return (
    <main className="relative">
      <section className="xl:grid xl:grid-cols-[minmax(0,0.75fr),minmax(0,1.5fr),minmax(0,1fr)] xl:pr-0 flex min-h-[100vh] flex-col items-center justify-center gap-[var(--space-l)] overflow-hidden bg-technology-mobile bg-cover bg-bottom px-[var(--space-s-l)] pb-[var(--space-xl)] pt-[var(--space-3xl)] text-space_primary md:bg-technology-tablet xl:bg-technology-desktop xl:px-[var(--space-xl)] xl:pt-[var(--space-5xl)]">
        <h1 className="font-barlowCondensed text-[length:var(--step-0)] uppercase tracking-spaceKerning text-space_light md:place-self-start">
          <PageTitle index="03" title="Space launch 101" />
        </h1>

        <Image
          className="xl:hidden h-auto min-w-[100vw]"
          src={filteredData.images.landscape}
          alt={filteredData.name}
          width={0}
          height={0}
          sizes="100vw"
        />

        <Image
          className="hidden xl:block w-full row-start-2 col-start-3"
          src={filteredData.images.portrait}
          alt={filteredData.name}
          width={0}
          height={0}
          sizes="100vw"
        />

        <Tabs.Root
          className="xl:row-start-2 xl:col-start-1"
          defaultValue="Launch vehicle"
          onValueChange={(value) => setFilteredData(filterTechnologyData(value))}>
          <Tabs.List className="xl:flex-col xl:justify-start flex items-center justify-center gap-[var(--space-l)] font-barlowCondensed text-[length:var(--step--1)] tracking-widest">
            {listTabTriggers}
          </Tabs.List>
        </Tabs.Root>

        <div className="xl:row-start-2 xl:col-start-2 xl:items-start flex flex-col xl:text-start items-center xl:max-w-full justify-center gap-[var(--space-s)] text-center md:max-w-[70%]">
          <div>
            <p className="font-barlowCondensed text-[length:var(--step-0)] uppercase tracking-spaceKerning text-space_primary">
              The terminology...
            </p>
            <h2 className="font-bellefair text-[length:var(--step-2)] xl:text-[length:var(--step-3)] uppercase text-space_light">
              {filteredData.name}
            </h2>
          </div>
          
          <p className="font-barlow text-[length:var(--step-0)] leading-relaxed">
            {filteredData.description}
          </p>
        </div>
      </section>
    </main>
  );
}
