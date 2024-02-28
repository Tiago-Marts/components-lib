import * as React from 'react'
import { Drawer as Vaul } from 'vaul'
import { cn } from '@/src/lib/util'

const Drawer = Vaul.Root;

//Trigger
const DrawerTrigger = React.forwardRef<
    React.ElementRef<typeof Vaul.Trigger>,
    React.ComponentPropsWithoutRef<typeof Vaul.Trigger>
>(({children, asChild = true, ...props}, ref) => (
    <Vaul.Trigger
        ref={ref}
        asChild={asChild}
        {...props}
    >
        {children}
    </Vaul.Trigger>
))

//Content
const DrawerContent = React.forwardRef<
    React.ElementRef<typeof Vaul.Content>,
    React.ComponentPropsWithoutRef<typeof Vaul.Content> & {horizontal?: boolean}
>(({className,children, horizontal=false,  ...props }, ref) => (
    <Vaul.Portal >
        <Vaul.Overlay className='fixed inset-0 bg-black/40'/>
        
        <Vaul.Content
            ref={ref}
            className={cn(
                "bg-neutral-900 flex flex-col p-2 fixed bottom-0 right-0 left-0 mt-24 min-h-[30%] rounded-t-2xl",
                horizontal && " w-[25%]  h-[100%]  mt-0 rounded-l-none rounded-r-2xl bottom-10 top-0 left-0 flex-row-reverse ",
                className
            )}
            {...props}
        >
            <div className={cn(
                'mx-auto w-20 h-1.5 flex-shrink-0 rounded-full bg-neutral-800 mb-8 cursor-grab',
                horizontal && 'mr-0 ml-auto my-auto w-1.5 h-20'
            )}/>
            {children}
        </Vaul.Content>
        
    </Vaul.Portal>
))

//Todos exports
export { 
    Drawer,
    DrawerTrigger, 
    DrawerContent
}