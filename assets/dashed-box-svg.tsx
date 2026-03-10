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
        x="0.5%"
        y="0.5%"
        width="99%"
        height="99%"
        strokeWidth="2"
        strokeDasharray="32,32" //<!-- dash length, gap -->
        rx="32"
        ry="32" //<!-- rounded corners -->
      />
    </svg>
  );
}
