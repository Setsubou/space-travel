"use client";

import CircularButton from "@/components/CircularButton/CircularButton";
import { useState } from "react";
import * as Separator from "@radix-ui/react-separator";
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import PageTitle from "@/components/PageTitle/PageTitle";

interface Crew {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

export default function MeetYourCrew() {
  let crew_list = {
    crew: [
      {
        name: "Douglas Hurley",
        images: {
          png: "/assets/crew/image-douglas-hurley.png",
          webp: "/assets/crew/image-douglas-hurley.webp",
        },
        role: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      },
      {
        name: "Mark Shuttleworth",
        images: {
          png: "/assets/crew/image-mark-shuttleworth.png",
          webp: "/assets/crew/image-mark-shuttleworth.webp",
        },
        role: "Mission Specialist",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      },
      {
        name: "Victor Glover",
        images: {
          png: "/assets/crew/image-victor-glover.png",
          webp: "/assets/crew/image-victor-glover.webp",
        },
        role: "Pilot",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      },
      {
        name: "Anousheh Ansari",
        images: {
          png: "/assets/crew/image-anousheh-ansari.png",
          webp: "/assets/crew/image-anousheh-ansari.webp",
        },
        role: "Flight Engineer",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      },
    ],
  };

  const [filteredData, setFilteredData] = useState<Crew>(() => filterCrewData("Douglas Hurley"));

  function filterCrewData(userChoice: string) {
    const crew = crew_list.crew.filter((crew) => crew.name === userChoice) as Crew[];
    return crew[0];
  }

  const listTabTriggers = crew_list.crew.map((crew, index) => {
    return (
      <Tabs.Trigger
        className="size-4 data-[state=inactive]:hover:opacity-50 cursor-pointer rounded-full bg-space_light data-[state=inactive]:opacity-25 xl:h-[18px] xl:w-[18px]"
        value={crew.name}
        key={index}></Tabs.Trigger>
    );
  });

  return (
    <main>
      <section className="flex min-h-[100vh] flex-col items-center justify-center gap-[var(--space-l)] bg-crew-mobile bg-cover bg-fixed bg-center px-[var(--space-s-l)] pb-[var(--space-xl)] pt-[var(--space-3xl)] text-space_primary md:bg-crew-tablet xl:relative xl:justify-end xl:bg-crew-desktop xl:px-[var(--space-xl)] xl:pb-0 xl:pt-[var(--space-5xl)]">
        <div className="flex flex-col items-center gap-[var(--space-l)] md:flex-col-reverse xl:grid xl:grid-cols-[1.75fr_1fr] xl:gap-[var(--space-l)]">
          <h1 className="md:place-self-start xl:col-start-1 xl:row-start-1">
            <PageTitle index="02" title="Meet your crew" />
          </h1>

          <div className="min-w-[100%] xl:col-span-1 xl:col-start-2 xl:row-span-4 xl:row-start-1 xl:place-self-end">
            <Image
              className="mx-auto h-[250px] w-auto md:h-[480px] xl:h-auto xl:w-full"
              src={filteredData.images.png}
              alt={filteredData.name}
              width={400}
              height={400}
            />
            <Separator.Root className="h-[2px] w-[100%] bg-white/20 xl:hidden" />
          </div>

          <div>
            <Tabs.Root
              defaultValue="Douglas Hurley"
              onValueChange={(value) => setFilteredData(filterCrewData(value))}>
              <Tabs.List className="flex items-center justify-center gap-[var(--space-l)] font-barlowCondensed text-[length:var(--step--1)] tracking-widest xl:items-start xl:justify-start">
                {listTabTriggers}
              </Tabs.List>
            </Tabs.Root>
          </div>

          <div className="flex flex-col gap-[var(--space-l)] xl:col-start-1 xl:row-start-2 xl:place-self-start">
            <div className="flex flex-col items-center justify-center gap-[var(--space-s)] text-center xl:items-start xl:justify-start xl:text-start">
              <div>
                <p className="font-bellefair text-[length:var(--step-0)] uppercase text-space_light opacity-50 xl:text-[length:var(--step-1)]">
                  {filteredData.role}
                </p>
                <h2 className="font-bellefair text-[length:var(--step-2)] uppercase text-space_light xl:text-[length:var(--step-3)]">
                  {filteredData.name}
                </h2>
              </div>
              <p className="font-barlow text-[length:var(--step-0)] leading-[1.77] md:max-w-[70%] xl:max-w-[100%]">
                {filteredData.bio}
              </p>
            </div>
          </div>
        </div>

        <CircularButton className="xl:hidden" buttonText="Technology" routerPath="/technology" />
      </section>
    </main>
  );
}
