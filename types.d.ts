type TCompressionSettings = {
  name: string;
  quality: number;
  format: string;
  maxWidth: number | string;
  maxHeight: number | string;
};

type TProcessedImage = {
  name: string;
  originalFile: File;
  blob: Blob;
  type: string;
  size: number;
  reductionPercentage: number;
};
