import clsx from "clsx";
import { useEffect, useState } from "react";
import Star from "./ThemeToggler/Star";
import Cloud from "./ThemeToggler/Cloud";

function ThemeToggler() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
    console.log(isLightTheme ? "light" : "dark");
  }, [isLightTheme]);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsLightTheme((prev) => !prev)}
        className={clsx(
          "w-48 aspect-[5/2] rounded-full shadow-border p-2 relative transition-all overflow-hidden",
          "bg-blue",
          "dark:bg-black"
        )}
      >
        <div
          className={clsx(
            "aspect-square h-full rounded-full transition-all relative shadow-inset z-20",
            "bg-yellow sun",
            "dark:bg-gray dark:translate-x-28 dark:shadow-none"
          )}
        >
          <div className="absolute h-[200%] w-[200%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-5"></div>
          <div className="absolute h-[300%] w-[300%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-5"></div>
          <div className="absolute h-[400%] w-[400%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-5"></div>
          <div className="absolute left-1/2 top-1/4 w-3 h-3 dark:bg-darkGray rounded-full -translate-x-1/2 -translate-y-1/2 dark:shadow-inner"></div>
          <div className="absolute left-1/3 top-1/2 w-5 h-5 dark:bg-darkGray rounded-full -translate-x-1/2 -translate-y-1 dark:shadow-inner"></div>
          <div className="absolute left-3/4 top-3/4 w-3 h-3 dark:bg-darkGray rounded-full -translate-x-2/3 -translate-y-1/2 dark:shadow-inner"></div>
        </div>
        <Star size={4} className="top-4 left-10" />
        <Star size={2} className="top-10 left-10" />
        <Star size={1} className="top-13 left-12" />
        <Star size={1} className="top-8 left-6" />
        <Star size={2} className="top-14 left-8" />
        <Star size={1} className="top-8 left-16" />
        <Star size={4} className="top-10 left-24" />
        <Star size={2} className="top-5 left-20" />
        <Star size={2} className="top-16 left-28" />
        <Star size={2} className="top-2 left-28" />
        <Star size={3} className="top-14 left-[4.5rem]" />
        <Cloud className="-right-5 top-3 z-10 bg-white" />
        <Cloud className="right-0 top-8 z-10 bg-white" />
        <Cloud className="right-8 top-12 z-10 bg-white" />
        <Cloud className="right-12 top-14 z-10 bg-white" />
        <Cloud className="right-14 top-12 z-10 bg-white" />
        <Cloud className="right-14 top-12 z-10 bg-white" />
        <Cloud className="right-24 top-14 z-10 bg-white" />
        <Cloud className="right-28 top-16 z-10 bg-white" />
        <Cloud className="right-32 top-12 z-10 bg-white" />
        <Cloud className="-right-5 -top-3 bg-slate-200" />
        <Cloud className="right-2 top-4 bg-slate-200" />
        <Cloud className="right-12 top-8 bg-slate-200" />
        <Cloud className="right-20 top-10 bg-slate-200" />
        <Cloud className="-left-2 top-10 bg-slate-200" />
      </button>
    </div>
  );
}

export default ThemeToggler;
