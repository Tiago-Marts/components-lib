import * as React from 'react';
import * as Radix from '@radix-ui/react-switch';
import { cn } from '@/src/lib/util';

const Switch = React.forwardRef<
    React.ElementRef<typeof Radix.Root>,
    React.ComponentPropsWithoutRef<typeof Radix.Root>
>(({className, ...props}, ref) => {
    return(
        <Radix.Root
            ref={ref}
            className={cn(
                "bg-neutral-800 w-[60px] h-[35px] rounded-full p-1 shadow-inner shadow-black/70 data-[state=checked]:bg-green-500 transition-colors ease-[cubic-bezier(0.25, 1, 0.5, 1)]" 
                    , className
            )}
            {...props}
        />
    )
})

const SwitchThumb = React.forwardRef<
    React.ElementRef<typeof Radix.Thumb>,
    React.ComponentPropsWithoutRef<typeof Radix.Thumb>
>(({className, ...props},ref) => (
    <Radix.Thumb
        ref={ref}
        className={cn(
            "block h-full aspect-square bg-neutral-50 rounded-full data-[state=checked]:translate-x-[25px] shadow-md shadow-black transition-all ease-[cubic-bezier(0.25, 1, 0.5, 1)] ", 
            className
        )}
        {...props}
    />
))

export {
    Switch, 
    SwitchThumb
}