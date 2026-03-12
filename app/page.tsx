"use client";

import CompressionSettingsCard from "@/components/shared/compression-settings-card";
import ImageCarousel from "@/components/shared/image-carousel";
import StatisticsSection from "@/components/shared/statistics-section";
import UploadBox from "@/components/shared/upload-box";
import { quickPresets } from "@/constants";
import { processAllImages } from "@/core/compressor";
import { Button } from "@/components/ui/button";
import JSZip from "jszip";
import { ArrowDownToLine, FileArchive, Loader2 } from "lucide-react";
import { startTransition, useCallback, useMemo, useRef, useState } from "react";

export default function Home() {
  const [images, setImages] = useState<File[]>([]);
  const [initialSettings, setInitialSettings] = useState<TCompressionSettings>({
    ...quickPresets[0],
  });
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [processTime, setProcessTime] = useState(0);
  const [compressedImages, setCompressedImages] = useState<TProcessedImage[]>(
    [],
  );
  const processIdRef = useRef(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isZipping, setIsZipping] = useState(false);

  const handleDrop = useCallback((acceptedFiles: File[]) => {
    // Keep images only
    const filteredFiles = acceptedFiles.filter((file) =>
      file.type.startsWith("image/"),
    );
    setImages((prev) => [...prev, ...filteredFiles]);
    setCompressedImages([]);
    setProgress(0);
    setProcessTime(0);
  }, []);

  const handleSettingsDone = useCallback(
    async (settings: TCompressionSettings) => {
      if (images.length === 0) return;
      setLoading(true);
      setInitialSettings(settings);
      setCompressedImages([]);
      setProgress(0);
      setProcessTime(0);

      // Track the latest run so older results do not overwrite
      processIdRef.current += 1;
      const currentProcessId = processIdRef.current;

      await processAllImages(
        images,
        settings,
        (value) => {
          if (processIdRef.current !== currentProcessId) return;
          startTransition(() => {
            setProgress(value);
          });
        },
        (processedImages, time) => {
          if (processIdRef.current !== currentProcessId) return;
          setCompressedImages(processedImages);
          setProcessTime(time);
          setLoading(false);
        },
      );
    },
    [images],
  );

  const downloadDisabled = useMemo(
    () => compressedImages.length === 0 || isDownloading || isZipping,
    [compressedImages.length, isDownloading, isZipping],
  );

  const handleDownload = useCallback(async () => {
    if (compressedImages.length === 0) return;

    setIsDownloading(true);

    for (const image of compressedImages) {
      const link = document.createElement("a");
      const url = URL.createObjectURL(image.blob);
      const baseName = image.name.split(".").slice(0, -1).join(".");
      link.href = url;
      link.download = `${baseName}.${initialSettings.format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    setIsDownloading(false);
  }, [compressedImages, initialSettings.format]);

  const handleDownloadZip = useCallback(async () => {
    if (compressedImages.length === 0) return;

    setIsDownloading(true);
    setIsZipping(true);

    try {
      const zip = new JSZip();
      const filenameCount = new Map<string, number>();

      for (const image of compressedImages) {
        const baseName = image.name.split(".").slice(0, -1).join(".");
        let filename = `${baseName}.${initialSettings.format}`;

        if (filenameCount.has(filename)) {
          const count = filenameCount.get(filename) ?? 1;
          filenameCount.set(filename, count + 1);
          const lastDotIndex = filename.lastIndexOf(".");
          filename = `${filename.substring(0, lastDotIndex)}_${count}${filename.substring(lastDotIndex)}`;
        } else {
          filenameCount.set(filename, 1);
        }

        zip.file(filename, image.blob);
      }

      const zipBlob = await zip.generateAsync({ type: "blob" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(zipBlob);
      link.href = url;
      link.download = "compressed-images.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } finally {
      setIsZipping(false);
      setIsDownloading(false);
    }
  }, [compressedImages, initialSettings.format]);

  if (loading) {
    return (
      <div className="w-screen h-screen fixed top-0 left-0 flex-col-center bg-background">
        {progress < images.length ? (
          <>
            <div className="h2">
              {progress}/{images.length}
            </div>
            <p>Images are being compressed</p>
          </>
        ) : (
          <>
            <div className="h2">{(processTime / 1000).toFixed(1)} sec</div>
            <p>Compression completed</p>
          </>
        )}
      </div>
    );
  }

  return (
    <main className="min-h-screen container mx-auto flex flex-col items-center gap-11 px-4 py-11 md:p-14">
      {/* Hero Section */}
      <section className="flex flex-col gap-4">
        <h1>
          IN BROWSER
          <br />
          BULK IMAGE
          <br />
          COMPRESSOR
        </h1>
        <p>
          Your private image compressor, auto resizer, and format converter, all
          in one toolkit to boost website conversions or save cloud and device
          storage.
        </p>
      </section>
      {/* Upload Box */}
      <section>
        <UploadBox onDrop={handleDrop} />
      </section>
      {/* Added Images */}
      <section>
        <ImageCarousel files={images} type="original" />
      </section>
      {/* Settings */}
      <section>
        <CompressionSettingsCard
          initialSettings={initialSettings}
          onDone={handleSettingsDone}
        />
      </section>
      {/* Compressed Results */}
      <section>
        <ImageCarousel files={compressedImages} type="compressed" />
      </section>
      {/* Statistics */}
      <StatisticsSection
        compressedImages={compressedImages}
        processTime={processTime}
      />
      {/* Downloads */}
      <section className="space-x-5 space-y-4 text-center grid sm:grid-cols-2">
        <Button onClick={handleDownload} disabled={downloadDisabled}>
          {isDownloading && !isZipping ? (
            <>
              <Loader2 className="animate-spin" />
              Downloading...
            </>
          ) : (
            <>
              <ArrowDownToLine />
              Download
            </>
          )}
        </Button>
        <Button
          variant="outline"
          onClick={handleDownloadZip}
          disabled={downloadDisabled}
        >
          {isZipping ? (
            <>
              <Loader2 className="animate-spin" />
              Creating Zip...
            </>
          ) : (
            <>
              <FileArchive />
              Download as Zip
            </>
          )}
        </Button>
      </section>
    </main>
  );
}
