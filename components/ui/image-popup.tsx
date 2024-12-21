"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

interface ImagePopupProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function ImagePopup({ src, alt, width, height }: ImagePopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <div className="cursor-pointer transition-transform hover:scale-105">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-lg object-cover"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <div className="relative aspect-square w-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="rounded-lg object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
