import { cn, formatFileSize } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  className?: string;
}

function StatCard({ label, value, className = "" }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-4xl border p-4 flex-col-center bg-card",
        className,
      )}
    >
      <span className="text-muted-foreground">{label}</span>
      <span className="text-2xl font-semibold">{value}</span>
    </div>
  );
}

interface StatisticsSectionProps {
  compressedImages: TProcessedImage[];
  processTime: number;
  className?: string;
}

export default function StatisticsSection({
  compressedImages,
  processTime,
  className = "",
}: StatisticsSectionProps) {
  // Sum original sizes
  const totalOriginalSize = compressedImages.reduce(
    (sum, img) => sum + (img.originalFile?.size || 0),
    0,
  );

  // Sum compressed sizes
  const totalCompressedSize = compressedImages.reduce(
    (sum, img) => sum + (img.size || 0),
    0,
  );

  // Calculate total saved size
  const totalSavedSize = totalOriginalSize - totalCompressedSize;

  // Calculate compression ratio
  const compressionRatio =
    totalOriginalSize > 0
      ? 100 - (totalCompressedSize / totalOriginalSize) * 100
      : 0;

  return (
    <section className={cn("block text-center space-y-5", className)}>
      <h2 className="h2">Compression Statistics</h2>
      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        <StatCard
          label="Total Saved"
          value={formatFileSize(totalSavedSize)}
          className="col-span-2 sm:col-span-3"
        />
        <StatCard label="Total Images" value={compressedImages.length} />
        <StatCard
          label="Total Time"
          value={`${(processTime / 1000).toFixed(1)} sec`}
        />
        <StatCard
          label="Avg. per Image"
          value={`${compressedImages.length ? (processTime / compressedImages.length / 1000).toFixed(2) : "0.0"} sec`}
        />
        <>
          <StatCard
            label="Original Size"
            value={formatFileSize(totalOriginalSize)}
          />
          <StatCard
            label="Compressed Size"
            value={formatFileSize(totalCompressedSize)}
          />
          <StatCard
            label="Compression Ratio"
            value={`${compressionRatio.toFixed(1)}%`}
          />
        </>
      </div>
    </section>
  );
}
