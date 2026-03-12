"use client";

import CompressionSettingsCard from "@/components/shared/compression-settings-card";
import ImageCarousel from "@/components/shared/image-carousel";
import UploadBox from "@/components/shared/upload-box";
import { quickPresets } from "@/constants";
import { useState } from "react";

export default function Home() {
  const [images, setImages] = useState<File[]>([]);
  const [initialSettings, setInitialSettings] = useState<TCompressionSettings>({
    ...quickPresets[0],
  });
  const [loading, setLoading] = useState(false);

  function handleDrop(acceptedFiles: File[]) {
    const filteredFiles = acceptedFiles.filter((file) =>
      file.type.startsWith("image/"),
    );
    setImages((prev) => [...prev, ...filteredFiles]);
  }

  async function handleSettingsDone(settings: TCompressionSettings) {
    // If no images are selected, return
    if (images.length === 0) return;
    setLoading(true);
    setInitialSettings(settings);

    // TODO: Compress images

    setLoading(false);
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
      {/* Image Carousel */}
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
      {/* Results Carousel */}
      <section>
        <ImageCarousel files={images} type="compressed" />
      </section>
    </main>
  );
}
