import clsx from "clsx";

function Star({ className, size }: { className: string; size: number }) {
  return (
    <div
      className={clsx("absolute -translate-x-1/2 -translate-y-1/2", className)}
    >
      <div
        style={{ fontSize: size }}
        className="four-pointed-star dark:after:bg-gray dark:before:bg-gray"
      />
    </div>
  );
}

export default Star;
