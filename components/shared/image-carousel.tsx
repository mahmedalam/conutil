"use client";

import { formatFileSize } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
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
  const instanceId = useId();
  const urlCacheRef = useRef(new Map<string, string>());
  const [items, setItems] = useState<
    Array<{ file: File | TProcessedImage; url: string }>
  >([]);
  const totalPages = Math.ceil(files.length / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const visibleFiles = useMemo(
    () => files.slice(start, start + PAGE_SIZE),
    [files, start],
  );

  const getFileKey = useCallback(
    (file: File | TProcessedImage) => {
      const prefix = `${instanceId}:${type}`;
      if (file instanceof File) {
        return `${prefix}:file:${file.name}:${file.size}:${file.lastModified}`;
      }

      return `${prefix}:processed:${file.name}:${file.size}:${file.type}`;
    },
    [instanceId, type],
  );

  useEffect(() => {
    const cache = urlCacheRef.current;
    const nextItems = visibleFiles.map((file) => {
      const key = getFileKey(file);
      const cached = cache.get(key);
      if (cached) return { file, url: cached };
      const url =
        file instanceof File
          ? URL.createObjectURL(file)
          : URL.createObjectURL(file.blob);
      cache.set(key, url);
      return { file, url };
    });
    setItems(nextItems);
  }, [getFileKey, visibleFiles]);

  useEffect(() => {
    const cache = urlCacheRef.current;
    return () => {
      for (const url of cache.values()) {
        URL.revokeObjectURL(url);
      }
      cache.clear();
    };
  }, []);

  return (
    <div className="card">
      <h2>{type === "original" ? "Added Images" : "Results"}</h2>

      <ul className="w-fit mx-auto grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3">
        {items.map(({ file, url }) => {
          return (
            <li key={getFileKey(file)} className="relative">
              {!(file instanceof File) && (
                <div className="absolute top-2 w-[calc(100%-16px)] flex items-center justify-between px-2 py-0.5 ml-2 bg-card/90 rounded-lg">
                  <span className="text-destructive text-base">
                    -{file.reductionPercentage}%
                  </span>
                  <span className="text-primary text-base">
                    {formatFileSize(file.size, 0)}
                  </span>
                </div>
              )}
              <img
                src={url}
                alt={file.name}
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
