"use client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import React from "react";

export default function ResponsiveIframe({ src, title }: any) {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        className="absolute top-0 left-0 w-full h-full border rounded-lg"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </AspectRatio>
  );
}
