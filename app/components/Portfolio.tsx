import { founders } from "@/app/data/founders";
import FounderCard from "./FounderCard";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const visibleFounders = founders.filter((f) => !f.hidden);

const Portfolio = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<string | undefined>();
  const [isMobile, setIsMobile] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Detect mobile screen size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Set up carousel API and slide change detection
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Update testimonial based on current slide (for mobile)
  useEffect(() => {
    if (isMobile && visibleFounders[current]?.testimonial) {
      setActiveTestimonial(visibleFounders[current].testimonial);
    } else if (!isMobile) {
      setActiveTestimonial(undefined);
    }
  }, [current, isMobile]);

  return (
    <section className={`w-full pt-16 ${isMobile ? 'pb-32' : 'pb-8'}`}>
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="font-freight font-bold tracking-tighter text-3xl md:text-3xl lg:text-4xl 2xl:text-5xl text-center mb-8">
          Featured Cohort Founders.
        </h2>
        {/* Mobile: Fixed-height founder cards + quote section */}
        {isMobile ? (
          <div className="relative w-full max-w-5xl mx-auto px-12 h-96">
            <div className="w-full h-2/3">
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                  containScroll: false,
                  slidesToScroll: 1,
                  skipSnaps: false,
                  startIndex: 0,
                }}
                className="w-full"
              >
                <CarouselContent className="items-stretch ml-0">
                  {visibleFounders.map((founder, index) => (
                    <CarouselItem 
                      key={founder.id} 
                      className="min-w-0 pl-0"
                      style={{ 
                        flexBasis: '100%',
                        marginRight: '0',
                        marginLeft: index === 0 ? '0' : '0'
                      }}
                    >
                      <div className="h-full w-full px-4">
                        <div className="aspect-square h-full">
                          <FounderCard
                            founder={founder}
                            onHover={setActiveTestimonial}
                            defaultHovered={isMobile}
                          />
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
                  <CarouselPrevious className="-left-8" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <CarouselNext className="-right-8" />
                </motion.div>
              </Carousel>
            </div>
            {/* Quote section */}
            {visibleFounders[current]?.testimonial && (
              <div className="absolute left-0 right-0 top-2/3 w-full max-w-md mx-auto text-center text-gray-300 italic px-4 text-sm mt-8">
                &quot;{visibleFounders[current].testimonial}&quot;
              </div>
            )}
          </div>
        ) : (
          <div className={`w-full max-w-5xl mx-auto px-8 md:px-20`}>
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
                containScroll: false,
                slidesToScroll: 1,
                skipSnaps: false,
                startIndex: 0,
              }}
              className="w-full"
            >
              <CarouselContent className="items-stretch ml-0">
{visibleFounders.map((founder, index) => (
                    <CarouselItem 
                      key={founder.id} 
                      className="min-w-0 pl-0"
                      style={{ 
                        flexBasis: 'calc(33.333% - 0.5rem)',
                        marginRight: '0.75rem',
                        marginLeft: index === 0 ? '0' : '0'
                      }}
                    >
                      <div className="h-full w-full">
                        <div className="aspect-square h-full">
                          <FounderCard
                            founder={founder}
                          onHover={setActiveTestimonial}
                          defaultHovered={isMobile}
                        />
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
                <CarouselPrevious className="md:-left-16 -left-6" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <CarouselNext className="md:-right-16 -right-6" />
              </motion.div>
            </Carousel>
          </div>
        )}

        {/* Desktop: Quote section */}
        {!isMobile && (
          <div className={`flex my-4 relative justify-center w-full px-4 md:px-16 lg:px-8`}>
            <AnimatePresence mode="wait">
              {activeTestimonial && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-md md:max-w-lg lg:max-w-4xl text-center text-gray-300 italic px-4 text-sm relative md:absolute mb-0"
                >
                  &quot;{activeTestimonial}&quot;
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;