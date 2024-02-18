import * as React from "react";
import * as Radix from "@radix-ui/react-dropdown-menu"
import {cva, type VariantProps} from "class-variance-authority"
import { cn } from "@/src/lib/util"


//Trigger props
const triggerVariants = cva(
    "flex flex-row items-center justify-center transition-all font-medium duration-300 ease-[cubic-bezier(0.33, 1, 0.68, 1)] rounded-lg focus:ring-offset-2",
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

interface ItemProps {
    className?: string;
    children: React.ReactNode;
}

//Content Props
interface ContentProps extends Radix.DropdownMenuContentProps{

}

const DropdownMenu = Radix.Root;

//Trigger
const DropdownMenuTrigger = React.forwardRef<Radix.DropdownMenuTriggerProps, TriggerProps>(({className,variant, size, children, ...props}) => (
    <Radix.Trigger
        className={cn(triggerVariants({variant, size, className}))}
        
        {...props}
    >
        {children}
    </Radix.Trigger>
));

const DropdownMenuPortal = Radix.Portal;

const DropDownMenuContent = 
React.forwardRef<Radix.DropdownMenuContentProps, ContentProps>(({sideOffset=4, className, ...props}, ref) => (
    <Radix.Portal>
        <Radix.Content 
            sideOffset={sideOffset}
            className={cn("min-w-[8rem] rounded-md overflow-hidden bg-inherit", className)}
            {...props}        
        />
    </Radix.Portal>
))

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuPortal,
    DropDownMenuContent,
}