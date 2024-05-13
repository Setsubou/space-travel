import { useRouter } from "next/navigation";

interface CircularButtonProps {
  buttonText: string;
  routerPath: string;
  className?: string;
}

export default function CircularButton(props: CircularButtonProps) {
  const router = useRouter();

  const propsWithDefault = {
    buttonText: props.buttonText || "Set the text ass",
    routerPath: props.routerPath || "/",
    className: props.className || "",
  };

  return (
    <button
      type="button"
      onClick={() => router.push(propsWithDefault.routerPath)}
      className={`${propsWithDefault.className} hover:shadow-spaceBoxShadow hover:transition-shadow h-[175px] w-[175px] cursor-pointer rounded-full bg-space_light font-bellefair text-[length:var(--step-1)] uppercase tracking-wider text-space_dark md:h-[220px] md:w-[220px] xl:h-[270px] xl:w-[270px]`}>
      {propsWithDefault.buttonText}
    </button>
  );
}
