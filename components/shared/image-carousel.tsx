"use client";

import { formatFileSize } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";

const PAGE_SIZE = 6;

export default function ImageCarousel({
  files,
  type,
}: {
  files: File[] | TProcessedImage[];
  type: "original" | "compressed";
}) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(files.length / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const visibleFiles = useMemo(
    () => files.slice(start, start + PAGE_SIZE),
    [files, start],
  );

  const urls = useMemo(
    () =>
      visibleFiles.map((file) =>
        file instanceof File
          ? URL.createObjectURL(file)
          : URL.createObjectURL(file.blob),
      ),
    [visibleFiles],
  );

  useEffect(() => {
    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [urls]);

  return (
    <div className="card">
      <h2>{type === "original" ? "Added Images" : "Results"}</h2>

      <ul className="w-fit mx-auto grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3">
        {urls.map((url, i) => {
          const currentFile = visibleFiles[i];
          return (
            <li key={i} className="relative">
              {/* Info Badge */}
              {!(currentFile instanceof File) && (
                <div className="absolute top-2 w-[calc(100%-16px)] flex items-center justify-between px-2 py-0.5 ml-2 bg-card/90 rounded-lg">
                  <span className="text-destructive text-base">
                    -{currentFile.reductionPercentage}%
                  </span>
                  <span className="text-primary text-base">
                    {formatFileSize(currentFile.size, 0)}
                  </span>
                </div>
              )}
              {/* Image */}
              <img
                src={url}
                alt={currentFile.name}
                className="w-full md:size-40 aspect-square object-cover rounded-lg"
              />
            </li>
          );
        })}
      </ul>

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
          disabled={page >= totalPages - 1 || files.length === 0}
          onClick={() => setPage((p) => p + 1)}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
