"use client";

import DashedBoxSvg from "@/assets/dashed-box-svg";
import { cn } from "@/lib/utils";
import { ImageUp } from "lucide-react";
import Dropzone from "react-dropzone";
import { Button } from "../ui/button";

export default function UploadBox({
  onDrop,
}: {
  onDrop?: (files: File[]) => void;
}) {
  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div
          className={
            "w-full relative flex-col-center gap-5 p-11 sm:py-14 cursor-pointer"
          }
          {...getRootProps()}
        >
          <input {...getInputProps()} accept="image/*" />
          <h2>Drag & Drop Images Here</h2>
          <span className="text-2xl tracking-[-0.6px] text-foreground/75 sm:text-3xl">
            or
          </span>
          <Button className="w-fit">Choose Files</Button>
          <p className="text-muted-foreground">
            <p className="text-muted-foreground">
              Supports JPEG, PNG, WebP, etc.
            </p>
          </p>
          <div
            className={cn(
              "absolute inset-0 z-20 size-full",
              isDragActive ? "flex-center" : "hidden",
            )}
          >
            <ImageUp className="w-1/2 h-1/2 text-muted-foreground" />
          </div>
          <DashedBoxSvg className={isDragActive ? "z-10" : "-z-10"} />
        </div>
      )}
    </Dropzone>
  );
}
