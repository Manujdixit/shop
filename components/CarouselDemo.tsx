"use client";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const slides = [
  {
    id: 1,
    img: "/slide1.webp",
    text: "Product1",
  },
  {
    id: 2,
    img: "/slide2.webp",
    text: "Product2",
  },
  {
    id: 3,
    img: "/slide3.webp",
    text: "Product3",
  },
];

export function CarouselDemo() {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));
  return (
    <div className="w-full flex justify-center">
      <Carousel plugins={[plugin.current]} className="w-full max-w-6xl">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="p-2">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <Image
                      src={slide.img}
                      alt={slide.text}
                      width={2000}
                      height={800}
                      className="rounded-lg"
                    />
                    <p className="mt-3 text-center text-sm md:text-base">
                      {slide.text}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
