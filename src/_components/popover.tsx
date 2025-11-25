import * as React from 'react';
import * as Radix from '@radix-ui/react-popover';
import { cn } from '@/src/_lib/util';

const Popover = Radix.Root;

//Trigger
const PopoverTrigger = React.forwardRef<
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
const PopoverContent = React.forwardRef<
    React.ElementRef<typeof Radix.Content>,
    React.ComponentPropsWithoutRef<typeof Radix.Content> & {hasArrow?: boolean}
>(({className, sideOffset = 4,children,hasArrow=true, ...props}, ref) => (
    <Radix.Portal >
        <Radix.Content
            ref={ref}
            side='bottom'
            className={cn(
                "relative  bg-neutral-800 px-1.5 py-1 text-sm text-center leading-4 rounded-lg select-none   shadow-lg shadow-black/30 transition-all" +
                " duration-300 animate-in fade-in-0 zoom-in-95 ease-[cubic-bezier(0.25, 1, 0.5, 1)]" + 
                " mb-4 ml-4 data-[side=top]:slide-in-from-bottom-2  " + 
                " data-[side=bottom]:slide-in-from-top-2 " +
                " data-[side=left]:slide-in-from-right-1 -translate-x-2  translate-y-2 " +
                " data-[side=right]:slide-in-from-left-1",
                className
            )}
            {...props}
        >
            {children}
            <Radix.Arrow className={cn(' fill-transparent  z-50   ', hasArrow && " fill-neutral-800 h-4 w-4")}/>
        </Radix.Content>
    </Radix.Portal>
));

//Todos exports
export {
    Popover,
    PopoverTrigger,
    PopoverContent
}

