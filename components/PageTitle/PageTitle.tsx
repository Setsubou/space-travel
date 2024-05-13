import { PageTitleProps } from "./interface";

export default function PageTitle(props: PageTitleProps) {
  return (
    <div className="font-barlowCondensed text-[length:var(--step-0)] uppercase tracking-spaceKerning text-space_light">
      <span className="mr-[var(--space-xs)] font-bold opacity-25">{props.index}</span>
      {props.title}
    </div>
  );
}
