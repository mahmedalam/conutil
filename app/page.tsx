import UploadBox from "@/components/shared/upload-box";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto flex flex-col items-center gap-11 px-4 py-11 md:p-14">
      {/* Hero Section */}
      <section className="flex flex-col gap-4 text-center max-w-4xl">
        <h1>Bulk Image Compressor That Runs in Your Browser</h1>
        <p>Compress thousands of images locally. No uploads. No tracking.</p>
      </section>
      {/* Upload Box */}
      <section>
        <UploadBox />
      </section>
    </main>
  );
}
