import * as React from 'react';
import * as Radix from '@radix-ui/react-slider';
import { cn } from '@/src/_lib/util';

const Slider = React.forwardRef<
    React.ElementRef<typeof Radix.Root>,
    React.ComponentPropsWithoutRef<typeof Radix.Root>
>(({className, ...props}, ref) => (
    <Radix.Root
        ref={ref}
        className={cn(
            "relative flex w-full select-none items-center touch-none ",
            className
        )}
        {...props}
    >
        <Radix.Track className='relative h-2 w-full overflow-hidden rounded-full bg-neutral-800'>
            <Radix.Range className='absolute h-full bg-green-500 '/>
        </Radix.Track>
        <Radix.Thumb className='block h-5 w-5 z-50 rounded-full bg-white focus:shadow-[0_0_0px_5px] focus:outline-none focus:shadow-black/40 '/>
    </Radix.Root>
))

export {
    Slider
}