import * as React from 'react';
import * as Radix from '@radix-ui/react-progress';
import { cn } from '@/src/lib/util';

const Progress = React.forwardRef<
    React.ElementRef<typeof Radix.Root>,
    React.ComponentPropsWithoutRef<typeof Radix.Root>
>(({className,value, ...props}, ref) => {
    
    return(
        <Radix.Root
        
        ref={ref}
        className={cn(
            "h-2 w-full relative bg-neutral-800 rounded-l-full overflow-hidden translate-z-0",
            className
        )}
        {...props}
    >
        <Radix.Indicator 
            className='bg-white w-full h-full transition-transform ease-[cubic-bezier(0.87, 0, 0.13, 1)] duration-300'
            style={{transform: `translateX(-${100 - (value || 0)}%)`}}
        />
    </Radix.Root>
    )
})



export {
    Progress,

}