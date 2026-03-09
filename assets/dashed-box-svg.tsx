import { cn } from "@/lib/utils";

export default function DashedBoxSvg({ className }: { className?: string }) {
  return (
    <svg
      className={cn(
        "absolute inset-0 w-full h-full fill-card stroke-foreground/50",
        className,
      )}
    >
      <rect
        x="2"
        y="2"
        width="calc(100% - 4px)"
        height="calc(100% - 4px)"
        strokeWidth="2"
        strokeDasharray="32,32" //<!-- dash length, gap -->
        rx="32"
        ry="32" //<!-- rounded corners -->
      />
    </svg>
  );
}
