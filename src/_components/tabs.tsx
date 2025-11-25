import * as React from 'react';
import * as Radix from '@radix-ui/react-tabs';
import { cn } from '@/src/_lib/util';

//Tabs
const Tabs = React.forwardRef<
    React.ElementRef<typeof Radix.Root>,
    React.ComponentPropsWithRef<typeof Radix.Root>
>(({className, orientation="vertical", ...props}, ref) => (
    <Radix.Root
        ref={ref}
        orientation={orientation}
        className={cn(
            " flex  w-full max-w-[300px]" + 
            " data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-y-3" + 
            " data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:gap-x-3",
            className
        )}
        {...props}
    />
))

//List
const TabsList = React.forwardRef<
    React.ElementRef<typeof Radix.List>,
    React.ComponentPropsWithoutRef<typeof Radix.List> 
>(({className,children, ...props}, ref) => (
    <Radix.List
        ref={ref}
        
        className={cn(
            " flex items-center justify-around bg-neutral-800 px-2 py-1.5 rounded-xl" + 
            " data-[orientation=vertical]:gap-x-3" + 
            " data-[orientation=horizontal]:flex-col aria-[orientation=horizontal]:gap-y-3",
            className
        )}
        {...props}
    >
        {children}
    </Radix.List>
))

//Trigger
const TabsTrigger = React.forwardRef<
    React.ElementRef<typeof Radix.Trigger>,
    React.ComponentPropsWithoutRef<typeof Radix.Trigger>
>(({className, ...props}, ref) => (
    <Radix.Trigger
        ref={ref}
        className={cn(
            "data-[state=active]:bg-neutral-900 px-2 py-1 w-full rounded-lg  transition-all ",
            className
        )}
        {...props}

    />
))

//Content
const TabsContent = Radix.Content;

//Todos exports
export {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
}