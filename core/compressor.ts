export async function processAllImages(
  images: File[],
  settings: TCompressionSettings,
  onProgressChange: (progress: number) => void,
  onProcessDone: (
    processedImages: TProcessedImage[],
    processTime: number,
  ) => void,
) {
  const MAX_WORKERS = Math.min(
    navigator.hardwareConcurrency || 4,
    images.length,
  );

  const startTime = performance.now();

  // List of pending images and finished results
  const queue = [...images];
  const completed: TProcessedImage[] = [];
  const workers: Worker[] = [];
  let isProcessing = true;
  let finishedCount = 0;

  // Let the browser breathe between updates
  const yieldToMain = () => {
    return new Promise((resolve) => {
      if (typeof requestIdleCallback !== "undefined") {
        requestIdleCallback(resolve, { timeout: 1000 });
      } else {
        setTimeout(resolve, 0);
      }
    });
  };

  // Give a worker the next file
  const startWorker = (worker: Worker) => {
    const next = queue.shift();
    if (!next) return;

    worker.postMessage({ file: next, settings });
  };

  for (let i = 0; i < MAX_WORKERS; i++) {
    const worker = createImageWorker();

    worker.onmessage = async (
      event: MessageEvent<{
        success: boolean;
        originalFile: File;
        blob?: Blob;
        type?: string;
        error?: string;
      }>,
    ) => {
      const { success, originalFile: file, blob, type, error } = event.data;

      // Keep a simple error log without stopping the run
      if (error) {
        console.error(error);
      }

      // Store a successful result
      if (success && blob && type && file) {
        completed.push({
          name: file.name,
          originalFile: file,
          blob,
          type,
          size: blob.size,
          reductionPercentage: Math.round(
            ((file.size - blob.size) / file.size) * 100,
          ),
        });
      }

      finishedCount += 1;

      // Yield to keep the UI smooth
      await yieldToMain();

      // Update progress by completed count, not just successes
      onProgressChange(finishedCount);

      // If queue still has images, keep this worker busy
      if (queue.length > 0) {
        startWorker(worker);
      } else if (finishedCount === images.length && isProcessing) {
        // All images have been handled
        isProcessing = false;
        onProcessDone(completed, performance.now() - startTime);
        // Stop workers to free resources
        workers.forEach((w) => w.terminate());
      }
    };

    workers.push(worker);
  }

  // Kickstart all workers
  for (const worker of workers) {
    startWorker(worker);
  }
}

export function createImageWorker() {
  return new Worker(new URL("./web-worker.ts", import.meta.url), {
    type: "module",
  });
}
