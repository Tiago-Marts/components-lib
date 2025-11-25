import * as React from 'react';
import * as Radix from '@radix-ui/react-alert-dialog'
import { cn } from '@/src/_lib/util';

const AlertDialog = Radix.Root;

//Trigger
const AlertTrigger = React.forwardRef<
    React.ElementRef<typeof Radix.Trigger>,
    React.ComponentPropsWithoutRef<typeof Radix.Trigger>
>(({children, asChild = false, ...props}, ref) => {
    return(
        <Radix.Trigger ref={ref} asChild {...props}>
            {children}
        </Radix.Trigger>
    )
})

//Content
const AlertContent = React.forwardRef<
    React.ElementRef<typeof Radix.Content>,
    React.ComponentPropsWithoutRef<typeof Radix.Content>
>(({className, ...props}, ref) => {
    return(
        <Radix.Portal >
            <Radix.Overlay className='bg-black/35 fixed inset-0 h-screen w-full backdrop-blur-[3px] z-100'/>
            <section className='h-screen w-full flex items-center justify-center fixed inset-0'>

            
            <Radix.Content
                ref={ref}
                className={cn(
                    "bg-neutral-900 flex flex-col items-center justify-center gap-5 w-[300px] h-[200px] rounded-2xl " +
                    " data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95" + 
                    " data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[sate=closed]:zoom-out-95", 
                    className
                )}
                {...props}
            />
            </section>
        </Radix.Portal>
    )
})
AlertContent.displayName = "AlertContent"


//Title
const AlertTitle = React.forwardRef<
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

const AlertDescription = React.forwardRef<
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

//Cancel button
const AlertCancel = React.forwardRef<
    React.ElementRef<typeof Radix.Cancel>,
    React.ComponentPropsWithoutRef<typeof Radix.Cancel>
>(({className, ...props}, ref) => (
    <Radix.Cancel
        ref={ref}
        className={cn(
            " text-red-500 font-bold", 
            className
        )}
        {...props}
    />
))

//Action button
const AlertAction = React.forwardRef<
    React.ElementRef<typeof Radix.Action>,
    React.ComponentPropsWithoutRef<typeof Radix.Action>
>(({className, ...props}, ref) => (
    <Radix.Action
        ref={ref}
        className={cn(
            "font-bold", 
            className
        )}
        {...props}
    />
))


//Todos exports
export {
    AlertDialog,
    AlertTrigger,
    AlertContent,
    AlertTitle,
    AlertDescription,
    AlertAction,
    AlertCancel
}