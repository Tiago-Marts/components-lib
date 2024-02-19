import * as React from "react";
import * as Radix from "@radix-ui/react-dropdown-menu"
import {cva, type VariantProps} from "class-variance-authority"
import { cn } from "@/src/lib/util"


//Trigger props
const triggerVariants = cva(
    "flex flex-row items-center justify-center  transition-all font-medium duration-300 ease-[cubic-bezier(0.33, 1, 0.68, 1)] rounded-lg  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background select-none",
    {
    variants: {
        variant: {
            default: " bg-neutral-900  hover:bg-neutral-800 ",
            outline: " bg-transparent border-2 border-neutral-700 hover:bg-neutral-800",
            ghost: " bg-transparent hover:bg-neutral-900 ",
        },
        size: {
            default: " text-lg px-2 py-1",
            sm: " text-sm px-1 py-1/2",
            xs: " text-sx p-1",
            icon: " p-1 h-8  aspect-square",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})

interface TriggerProps extends Radix.DropdownMenuTriggerProps, VariantProps<typeof triggerVariants> {
    className?: string;
    children: React.ReactNode;
}




//Item Props
interface ItemProps extends Radix.DropdownMenuItemProps {
    className?: string;
    inset: number;
}


const DropdownMenu = Radix.Root;
const DropdownMenuGroup = Radix.Group;
const DropdownMenuPortal = Radix.Portal;

//Trigger
const DropdownMenuTrigger = React.forwardRef<
    React.ElementRef<typeof Radix.Trigger>, 
    TriggerProps
>(({className,variant, size, children, ...props}, ref) => (
    <Radix.Trigger
        className={cn(triggerVariants({variant, size, className}))}
        ref={ref}
        {...props}
    >
        {children}
    </Radix.Trigger>
));



//Content
const DropDownMenuContent = React.forwardRef<
React.ElementRef<typeof Radix.Content>,
React.ComponentPropsWithoutRef<typeof Radix.Content>
>(({sideOffset=4, className, ...props}, ref) => (
    <Radix.Portal>
        <Radix.Content 
            ref={ref}
            sideOffset={sideOffset}
            className={cn("min-w-[8rem] rounded-md overflow-hidden bg-neutral-900 p-2" +
            " data-[state=open]:animate-in data-[state-open]:fade-in-0 data-[state=open]:zoom-in-95" + 
            " data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95" +
            " data-[side=left]:slide-in-from-right-3" +
            " data-[side=right]:slide-in-from-left-3" +
            " data-[side=bottom]:slide-in-from-top-3" +
            " data-[side=top]:slide-in-from-bottom-3"
            , className)}
            {...props}        
        />
    </Radix.Portal>
))

//Item
const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof Radix.Item>,
  React.ComponentPropsWithoutRef<typeof Radix.Item> & {
    inset?: boolean
  }
>(({className, inset, ...props}, ref) => (
    <Radix.Item
        className={cn("hover:bg-neutral-800 outline-none p-1 rounded-md hover:cursor-pointer transition:all ease-in duration-100" + 
        " data-[disabled]:pointer-events-none data-[disabled]:opacity-50" ,
        className)}
        ref={ref}
        {...props}
    />

))

//Todos exports
export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuPortal,
    DropDownMenuContent,
    DropdownMenuItem,
    DropdownMenuGroup,
}