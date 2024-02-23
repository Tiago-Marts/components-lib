import * as React from 'react';
import * as Radix from '@radix-ui/react-tooltip';
import { cn } from '@/src/lib/util';

const TooltipProvider = Radix.TooltipProvider;
const Tooltip = Radix.Root;

//Trigger
const TooltipTrigger = React.forwardRef<
    React.ElementRef<typeof Radix.Trigger>,
    React.ComponentPropsWithoutRef<typeof Radix.Trigger>
>(({children, asChild = false, ...props}, ref) => {
    return (
        <Radix.Trigger ref={ref} asChild {...props}>
            {children}
        </Radix.Trigger>
    )
});

//Content
const TooltipContent = React.forwardRef<
    React.ElementRef<typeof Radix.Content>,
    React.ComponentPropsWithoutRef<typeof Radix.Content>
>(({className, sideOffset = 4,children, ...props}, ref) => (
    <Radix.Portal >
        <Radix.Content
            ref={ref}
            className={cn(
                "relative  bg-neutral-800 px-1.5 py-1 text-sm text-center leading-4 rounded-lg select-none   shadow-lg shadow-black/30 " +
                " duration-300 animate-in fade-in-0 zoom-in-95" + 
                " mb-4 ml-4 data-[side=top]:slide-in-from-bottom-2  " + 
                " data-[side=bottom]:slide-in-from-top-1 " +
                " data-[side=left]:slide-in-from-right-1 -translate-x-2  translate-y-2 " +
                " data-[side=right]:slide-in-from-left-1",
                className
            )}
            {...props}
        >
            {children}
            <Radix.Arrow className=' fill-neutral-800  z-50  border-none '/>
        </Radix.Content>
    </Radix.Portal>
));


//Todos exports
export {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent
}

