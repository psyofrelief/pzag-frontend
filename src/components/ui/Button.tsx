import { cn } from "@/lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline" | "destructive";
  className?: string;
}

export default function Button({
  children,
  isLoading = false,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}: Props) {
  return (
    <button
      type={type}
      className={cn(
        "font-semibold flex-1 flex gap-x-xs items-center rounded-full whitespace-nowrap transition-colors justify-center px-sm py-xs size-fit",
        variant === "primary"
          ? "bg-accent text-foreground-accent hover:bg-foreground"
          : variant === "destructive"
            ? "bg-destructive text-foreground"
            : "border bg-background border-outline text-foreground hover:bg-popover",
        isLoading && "opacity-50 cursor-not-allowed",
        className,
      )}
      disabled={isLoading} // Prevent multiple clicks
      {...props}
    >
      {isLoading ? <span className="loader" /> : children}
    </button>
  );
}
