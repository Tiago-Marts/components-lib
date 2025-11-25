import * as React from 'react';
import * as Radix from '@radix-ui/react-dialog';
import { cn } from '@/src/_lib/util';
import { X } from 'lucide-react';

const Dialog = Radix.Root;
const DialogTrigger = Radix.Trigger;

//Content
const DialogContent = React.forwardRef<
    React.ElementRef<typeof Radix.Content>,
    React.ComponentPropsWithoutRef<typeof Radix.Content>
>(({className, ...props}, ref) => (
    <Radix.Portal>
        <Radix.Overlay className='bg-black/35 fixed inset-0 h-screen w-full backdrop-blur-[3px] z-100'/>
        <section className='h-screen w-full flex items-center justify-center fixed inset-0'>
        <Radix.Content
            ref={ref}
            className={cn(
                "bg-neutral-900 relative flex flex-col items-center justify-center gap-5 w-[300px] h-[200px] rounded-2xl " +
                " data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95" + 
                " data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[sate=closed]:zoom-out-95", 
                className
            )}
            {...props}
        />
        </section>
    </Radix.Portal>
))

//Title
const DialogTitle = React.forwardRef<
    React.ElementRef<typeof Radix.Title>,
    React.ComponentPropsWithoutRef<typeof Radix.Title>
>(({content, className, ...props}, ref) => (
    <Radix.Title
        ref={ref}
        className={cn(
            "text-lg text-center font-bold", 
            className
        )}
        {...props}
    />
))

//Description
const DialogDescription = React.forwardRef<
    React.ElementRef<typeof Radix.Description>,
    React.ComponentPropsWithoutRef<typeof Radix.Description>
>(({className, ...props}, ref) => (
    <Radix.Description
        ref={ref}
        className={cn(
            "inline text-center text-sm text-neutral-400", 
            className
        )}
        {...props}
    />
))

//Close 
const DialogClose = React.forwardRef<
    React.ElementRef<typeof Radix.Close>,
    React.ComponentPropsWithoutRef<typeof Radix.Close>
>(({className, ...props}, ref) => (
    <Radix.Close 
        ref={ref}
        className={cn(
            "absolute right-1 top-2 rounded-full p-1 text-neutral-500" + 
            " hover:bg-neutral-700 hover:text-neutral-400 transition-colors ",
            className
        )}
        {...props}
    >
        
        <X className='h-4 w-4 '/>
    </Radix.Close>
))

//Todos exports
export {
    Dialog, 
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogClose,
}