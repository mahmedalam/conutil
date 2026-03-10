import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const PAGE_SIZE = 6;

export default function ImageCarousel({ files }: { files: File[] }) {
  const [page, setPage] = useState(0);
  const [urls, setUrls] = useState<string[]>([]);

  const totalPages = Math.ceil(files.length / PAGE_SIZE);

  useEffect(() => {
    const start = page * PAGE_SIZE;
    const slice = files.slice(start, start + PAGE_SIZE);

    const newUrls = slice.map((file) => URL.createObjectURL(file));
    setUrls(newUrls);

    return () => {
      newUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [page, files]);

  return (
    <div className="card">
      <h2>Added Images</h2>

      <div className="w-fit mx-auto grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3">
        {urls.map((url, i) => (
          <img
            key={i}
            src={url}
            className="w-full md:size-40 aspect-square object-cover rounded-lg"
          />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="secondary"
          size="icon"
          disabled={page === 0}
          onClick={() => setPage((p) => p - 1)}
        >
          <ChevronLeft />
        </Button>

        <span className="text-base text-muted-foreground">
          Total {files.length} Images
        </span>

        <Button
          variant="secondary"
          size="icon"
          disabled={page === totalPages - 1}
          onClick={() => setPage((p) => p + 1)}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
