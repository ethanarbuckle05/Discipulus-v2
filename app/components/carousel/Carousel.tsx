"use client";

import React from 'react'
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'

const Carousel = () => {
  const OPTIONS: EmblaOptionsType = {}
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())  
  
  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}

export default Carousel