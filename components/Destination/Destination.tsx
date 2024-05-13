"use client";

import CircularButton from "@/components/CircularButton/CircularButton";
import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import * as Separator from "@radix-ui/react-separator";
import { useState } from "react";
import { Destination } from "./interface";
import PageTitle from "../PageTitle/PageTitle";

export default function DestinationSection() {
  let destination_list = {
    destinations: [
      {
        name: "Moon",
        images: {
          png: "/assets/destination/image-moon.png",
          webp: "/assets/destination/image-moon.webp",
        },
        description:
          "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days",
      },
      {
        name: "Mars",
        images: {
          png: "/assets/destination/image-mars.png",
          webp: "/assets/destination/image-mars.webp",
        },
        description:
          "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 mil. km",
        travel: "9 months",
      },
      {
        name: "Europa",
        images: {
          png: "/assets/destination/image-europa.png",
          webp: "/assets/destination/image-europa.webp",
        },
        description:
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 mil. km",
        travel: "3 years",
      },
      {
        name: "Titan",
        images: {
          png: "/assets/destination/image-titan.png",
          webp: "/assets/destination/image-titan.webp",
        },
        description:
          "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years",
      },
    ],
  };

  const [filteredData, setFilteredData] = useState<Destination>(() => filterPlanetData("Moon"));

  function filterPlanetData(userChoice: string) {
    const planet = destination_list.destinations.filter(
      (destination) => destination.name === userChoice,
    ) as Destination[];
    return planet[0];
  }

  const listTabTriggers = destination_list.destinations.map((planet, index) => {
    return (
      <Tabs.Trigger
        className="data-[state=active]:border-rounded-full data-[state=inactive]:hover:border-rounded-full data-[state=inactive]:hover:border-space_light/50 data-[state=inactive]:hover:border-b-2 uppercase text-space_primary hover:text-space_light data-[state=active]:border-b-2 data-[state=active]:border-space_light data-[state=active]:text-space_light"
        value={planet.name}
        key={index}>
        {planet.name}
      </Tabs.Trigger>
    );
  });

  return (
    <section className="flex min-h-[100vh] flex-col items-center justify-center gap-[var(--space-l)] bg-destination-mobile bg-cover bg-fixed bg-bottom px-[var(--space-s-l)] pb-[var(--space-xl)] pt-[var(--space-3xl)] text-space_primary md:bg-destination-tablet xl:gap-[var(--space-2xl)] xl:bg-destination-desktop xl:px-[var(--space-3xl)] xl:pt-[var(--space-5xl)]">
      <h1 className="md:place-self-start">
        <PageTitle index="01" title="Pick your destination" />
      </h1>

      <div className="flex flex-col items-center gap-[var(--space-l)] xl:grid xl:grid-cols-[1fr_1fr] xl:gap-[var(--space-xl)]">
        <Image
          className="max-w-[70%] md:max-w-[40%] xl:max-w-[100%] xl:place-self-start"
          src={filteredData.images.png}
          alt={filteredData.name}
          width={400}
          height={400}
        />

        <div className="flex flex-col gap-[var(--space-l)]">
          <div className="md:mx-auto md:max-w-[70%] xl:max-w-[100%]">
            <Tabs.Root
              defaultValue="Moon"
              onValueChange={(value) => setFilteredData(filterPlanetData(value))}>
              <Tabs.List className="flex items-center justify-center gap-[var(--space-s)] font-barlowCondensed text-[length:var(--step--1)] tracking-widest md:gap-[var(--space-l)] xl:items-start xl:justify-start">
                {listTabTriggers}
              </Tabs.List>
            </Tabs.Root>
            <h2 className="text-center font-bellefair text-[length:var(--step-5)] uppercase text-space_light xl:text-start">
              {filteredData.name}
            </h2>
            <p className="text-center font-barlow text-[length:var(--step--0)] leading-relaxed xl:text-start xl:leading-[1.77]">
              {filteredData.description}
            </p>
          </div>

          <Separator.Root className="h-[1px] min-w-[100%] bg-[#383B4B] md:min-w-[80%]" />

          <div className="flex flex-col gap-[var(--space-s)] md:min-w-[100%] md:flex-row md:justify-around xl:justify-start xl:gap-[var(--space-xl)]">
            <div className="uppercase">
              <p className="text-center font-barlowCondensed text-[length:var(--step--1)] tracking-widest xl:text-start">
                Avg. Distance
              </p>
              <p className="text-center font-bellefair text-[length:var(--step-3)] text-space_light md:text-[length:var(--step-2)] xl:text-[length:var(--step-1)]">
                {filteredData.distance}
              </p>
            </div>
            <div className="uppercase">
              <p className="text-center font-barlowCondensed text-[length:var(--step--1)] tracking-widest xl:text-start">
                Est. Travel time
              </p>
              <p className="text-center font-bellefair text-[length:var(--step-3)] text-space_light md:text-[length:var(--step-2)] xl:text-[length:var(--step-1)]">
                {filteredData.travel}
              </p>
            </div>
          </div>

          <CircularButton
            className="mx-auto xl:ml-0 xl:hidden"
            buttonText="Meet your crew"
            routerPath="/meet-your-crew"
          />
        </div>
      </div>
    </section>
  );
}
