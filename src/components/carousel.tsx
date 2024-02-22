import * as React from 'react';
import { cn } from '@/src/lib/util';

import {EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel, {type UseEmblaCarouselType as EmblaType } from 'embla-carousel-react';


type CarouselProps = {
    opt?: EmblaOptionsType;
}

const emblaRef = useEmblaCarousel()

