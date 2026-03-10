"use client";

import ImageCarousel from "@/components/shared/image-carousel";
import UploadBox from "@/components/shared/upload-box";
import { useState } from "react";

export default function Home() {
  const [images, setImages] = useState<File[]>([]);

  function handleDrop(acceptedFiles: File[]) {
    const filterImages = (files: File[]) => {
      return files.filter((file) => file.type.startsWith("image/"));
    };

    const filteredFiles = filterImages(acceptedFiles);

    setImages(filteredFiles);
  }

  return (
    <main className="min-h-screen container mx-auto flex flex-col items-center gap-11 px-4 py-11 md:p-14">
      {/* Hero Section */}
      <section className="flex flex-col gap-4 text-center max-w-4xl">
        <h1>Bulk Image Compressor That Runs in Your Browser</h1>
        <p>Compress thousands of images locally. No uploads. No tracking.</p>
      </section>
      {/* Upload Box */}
      <section>
        <UploadBox onDrop={handleDrop} />
      </section>
      <section>
        <ImageCarousel files={images} />
      </section>
    </main>
  );
}
