import * as React from 'react';
import * as Radix from '@radix-ui/react-accordion';
import { cn } from '@/src/lib/util';
import { ChevronDown } from 'lucide-react';

//Header
const AccordionHeader = Radix.Header;

//Accordion
const Accordion = React.forwardRef<
    React.ElementRef<typeof Radix.Root>,
    React.ComponentPropsWithoutRef<typeof Radix.Root>
>(({className, ...props}, ref) => (
    <Radix.Root
        ref={ref}
        className={cn(
            "flex flex-col   bg-inherit border-2 border-neutral-800 divide-y-2 divide-neutral-800  rounded-xl overflow-hidden  ",
            className
        )}
        {...props}
    />
))

//Item
const AccordionItem = React.forwardRef<
    React.ElementRef<typeof Radix.Item>,
    React.ComponentPropsWithoutRef<typeof Radix.Item>
>(({className, ...props}, ref) => (
    <Radix.Item
        ref={ref}
        className={cn(
            "flex flex-col items-start justify-center w-[15rem]   min-h-[2rem] ",
            className
        )}
        {...props}
    />
))

//Trigger
const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof Radix.Trigger>,
    React.ComponentPropsWithoutRef<typeof Radix.Trigger>
>(({className, children, ...props}, ref) => (
    <Radix.Trigger
        ref={ref}
        className={cn(
            "group font-semibold px-3 py-2 flex flex-row items-center justify-between text-center  w-full transition-colors " + 
            " data-[state=open]:bg-neutral-800 ",
            className
        )}
        {...props}
    >
        {children}
        <span className='text-center h-4 w-4 flex items-center justify-center group-data-[state=open]:rotate-180 transition-all duration-600 ease-out'>
            <ChevronDown className='h-4 w-4'/>
        </span>
    </Radix.Trigger>
))

//Content
const AccordionContent = React.forwardRef<
    React.ElementRef<typeof Radix.Content>,
    React.ComponentPropsWithoutRef<typeof Radix.Content>
>(({className,children, ...props}, ref) => (
    <Radix.Content
        ref={ref}
        className={cn(
            " text-sm overflow-hidden transition-all" + 
            " data-[state=open]:animate-slide-down " + 
            " data-[state=closed]:animate-slide-up",
            className
        )}
        {...props}
    >
        <div className='pb-2 pt-2 px-3'>{children}</div>
    </Radix.Content>
))


//Todos exports
export {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionTrigger, 
    AccordionContent
}