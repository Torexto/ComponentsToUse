import clsx from "clsx";

function Cloud({ className }: { className: string }) {
  return (
    <div
      className={clsx(
        "absolute rounded-full dark:bg-transparent w-16 h-16",
        className
      )}
    />
  );
}

export default Cloud;
