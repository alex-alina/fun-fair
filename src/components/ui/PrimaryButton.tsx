import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export interface PrimaryButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  className?: string;
}

export const PrimaryButton = ({
  children,
  className,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "flex h-10 items-center justify-center rounded-md bg-blue-800 px-3 py-2 text-white hover:bg-blue-500",
        className,
      )}
    >
      {children}
    </button>
  );
};
