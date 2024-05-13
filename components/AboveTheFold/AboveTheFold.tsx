"use client";

import CircularButton from "../CircularButton/CircularButton";

export default function AboveTheFold() {
  return (
    <section className="flex min-h-[100vh] flex-col items-center justify-center gap-[var(--space-xl)] bg-atf-mobile bg-cover bg-bottom px-[var(--space-s-l)] pb-[var(--space-xl)] pt-[var(--space-3xl)] text-space_primary md:bg-atf-tablet xl:flex-row xl:bg-atf-desktop xl:px-[var(--space-2xl)]">
      <div className="flex flex-col items-center justify-center gap-[var(--space-m)] text-center md:max-w-[70%] xl:max-w-[55%] xl:items-start">
        <h1 className="text-center font-barlowCondensed text-[length:var(--step-0)] uppercase tracking-spaceKerning xl:text-start">
          So, you want to travel to
          <span className="block font-bellefair text-[length:var(--step-7)] tracking-normal text-space_light">
            space
          </span>
        </h1>

        <p className="font-barlow text-[length:var(--step-0)] leading-relaxed xl:text-start">
          Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer
          space and not hover kind of on the edge of it. Well sit back, and relax because we&apos;ll
          give you a truly out of this world experience!
        </p>
      </div>

      <div className="xl:justify-self-end">
        <CircularButton buttonText="Explore" routerPath="/destination" />
      </div>
    </section>
  );
}
