import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const images = [
  "/cohort/cohort17.jpeg",
  "/cohort/cohort18.jpeg",
  "/cohort/cohort19.jpeg",
  "/cohort/cohort20.jpeg",
  "/cohort/cohort21.jpeg",
  "/cohort/cohort0.png",
  "/cohort/cohort1.jpeg",
  "/cohort/cohort2.jpeg",
  "/cohort/cohort3.jpeg",
  "/cohort/cohort4.jpeg",
  "/cohort/cohort5.jpeg",
  "/cohort/cohort6.jpeg",
  "/cohort/cohort7.jpeg",
  "/cohort/cohort8.jpeg",
  "/cohort/cohort9.jpeg",
  "/cohort/cohort10.jpeg",
  "/cohort/cohort11.jpeg",
  "/cohort/cohort12.jpeg",
  "/cohort/cohort13.jpeg",
  "/cohort/cohort14.jpeg",
  "/cohort/cohort15.jpeg",
  "/cohort/cohort16.jpeg",
]

export function CohortCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const showGradients = current !== 1 && current !== count

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      {/* Mobile Layout (matches founder carousel) */}
      <div className={`w-full max-w-5xl mx-auto ${isMobile ? 'px-6 sm:px-12' : 'px-8 md:px-20'} lg:hidden`}>
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent className="items-stretch ml-0">
            {images.map((image, index) => (
              <CarouselItem 
                key={index} 
                className="min-w-0 pl-0"
                style={{ flexBasis: isMobile ? '100%' : '50%' }}
              >
                <div className={`h-full w-full ${isMobile ? 'px-4' : ''}`}>
                  <div className="aspect-square h-full">
                    <Card className="bg-neutral-900 border-neutral-800">
                      <CardContent className="flex aspect-square items-center justify-center p-2 relative">
                        <Image
                          src={image}
                          alt={`Carousel image ${index + 1}`}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CarouselPrevious className="-left-8 bg-black text-white hover:!bg-white hover:!text-black focus:bg-black focus:text-white" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CarouselNext className="-right-8 bg-black text-white hover:!bg-white hover:!text-black focus:bg-black focus:text-white" />
          </motion.div>
        </Carousel>
      </div>

      {/* Desktop Layout */}
      <div className="w-full max-w-5xl mx-auto px-8 md:px-20 hidden lg:block">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent className="items-stretch ml-0">
            {images.map((image, index) => (
              <CarouselItem 
                key={index}
                className="min-w-0 pl-0"
                style={{ flexBasis: '40%', marginRight: '0.5rem', marginLeft: index === 0 ? '0' : '0' }}
              >
                <div className="h-full w-full">
                  <div className="aspect-square h-[420px] w-full">
                    <Card className="bg-neutral-900 border-neutral-800">
                      <CardContent className="flex aspect-square items-center justify-center p-2 relative">
                        <Image
                          src={image}
                          alt={`Carousel image ${index + 1}`}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CarouselPrevious
              className="md:-left-16 -left-6 absolute top-[40%] -translate-y-1/2 z-20 bg-black text-white text-inherit !shadow-none hover:!bg-white hover:!text-black focus:bg-black focus:text-white"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CarouselNext
              className="md:-right-16 -right-6 absolute top-[40%] -translate-y-1/2 z-20 bg-black text-white text-inherit !shadow-none hover:!bg-white hover:!text-black focus:bg-black focus:text-white"
            />
          </motion.div>
        </Carousel>
      </div>
    </div>
  )
}
