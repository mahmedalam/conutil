self.onmessage = async (
  event: MessageEvent<{ file: File; settings: TCompressionSettings }>,
) => {
  const { file, settings } = event.data;

  try {
    // Create an image bitmap from the file for fast processing
    const bitmap = await createImageBitmap(file);

    // Get the scaled size of the image
    const { width, height } = getScaledSize(
      bitmap.width,
      bitmap.height,
      Number(settings.maxWidth),
      Number(settings.maxHeight),
    );

    // Create a canvas for the scaled image
    const canvas = new OffscreenCanvas(width, height);
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Failed to get canvas context");
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Draw the scaled image on the canvas
    ctx.drawImage(bitmap, 0, 0, width, height);

    // Get the mime type of the image
    const type = getMimeType(settings.format);

    // Convert the canvas to a blob
    const blob = await canvas.convertToBlob({
      type,
      quality: settings.quality / 100,
    });

    // Send the processed image back to the main thread
    self.postMessage({
      success: true,
      originalFile: file,
      blob,
      type,
    });
  } catch (error: unknown) {
    // Send the error back to the main thread
    self.postMessage({
      success: false,
      originalFile: file,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

// Function to get the scaled size of the image
function getScaledSize(
  originalWidth: number,
  originalHeight: number,
  maxWidth: number,
  maxHeight: number,
): { width: number; height: number } {
  let width = originalWidth;
  let height = originalHeight;

  // Case 1: both maxWidth and maxHeight are 0 -> keep original
  if (maxWidth === 0 && maxHeight === 0) {
    return { width, height };
  }

  // Case 2: only maxWidth is given
  if (maxWidth > 0 && maxHeight === 0) {
    if (width > maxWidth) {
      const scale = maxWidth / width;
      width = maxWidth;
      height = Math.round(height * scale);
    }
    return { width, height };
  }

  // Case 3: only maxHeight is given
  if (maxHeight > 0 && maxWidth === 0) {
    if (height > maxHeight) {
      const scale = maxHeight / height;
      height = maxHeight;
      width = Math.round(width * scale);
    }
    return { width, height };
  }

  // Case 4: both maxWidth and maxHeight are given scale to fit inside bounds
  const widthRatio = maxWidth / width;
  const heightRatio = maxHeight / height;
  const scale = Math.min(widthRatio, heightRatio, 1); // do not upscale

  width = Math.round(width * scale);
  height = Math.round(height * scale);

  return { width, height };
}

function getMimeType(format: string): string {
  switch (format.toLowerCase()) {
    case "jpeg":
    case "jpg":
      return "image/jpeg";
    case "webp":
      return "image/webp";
    default:
      return "image/jpeg";
  }
}
