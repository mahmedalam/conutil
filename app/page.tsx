"use client";

import ImageCarousel from "@/components/shared/image-carousel";
import UploadBox from "@/components/shared/upload-box";
import { useState } from "react";

export default function Home() {
  const [images, setImages] = useState<File[]>([]);

  function handleDrop(acceptedFiles: File[]) {
    const filteredFiles = acceptedFiles.filter((file) =>
      file.type.startsWith("image/"),
    );
    setImages((prev) => [...prev, ...filteredFiles]);
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
      <section>
        <ImageCarousel files={images} />
      </section>
    </main>
  );
}
