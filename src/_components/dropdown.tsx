import * as React from "react";
import * as Radix from "@radix-ui/react-dropdown-menu"
import {cva, type VariantProps} from "class-variance-authority"
import { cn } from "@/src/_lib/util"
import { Check, Circle } from "lucide-react";


//Trigger props
const triggerVariants = cva(
    "flex flex-row items-center justify-center  transition-all font-medium duration-300 ease-[cubic-bezier(0.33, 1, 0.68, 1)]   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background select-none",
    {
    variants: {
        variant: {
            default: " bg-neutral-900  hover:bg-neutral-800 border-t-2 border-t-neutral-800",
            outline: " bg-transparent border-2 border-neutral-700 hover:bg-neutral-800 focus:bg-neutral-800",
            ghost: " bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 ",
        },
        size: {
            default: " text-lg px-2 py-1 rounded-lg",
            sm: " text-sm px-2 py-1 rounded-full",
            xs: " text-xs px-1.5 py-1 rounded-full px-1 py-[0.3rem]",
            icon: " p-2 rounded-full aspect-square",
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

//CheckItem props
const checkVariants = cva(
    "absolute flex h-3.5 aspect-square items-center justify-center", 
    {
        variants: {
            position: {
                right: "right-2",
                left: "left-2",

            }
        }, 
        defaultVariants: {
            position: "right",
        }
    }
)

interface CheckItemProps extends Radix.MenuCheckboxItemProps, VariantProps<typeof checkVariants>{

}

//RadioItem props
const radioVariants = cva(
    "absolute flex h-3.5 aspect-square items-center justify-center", 
    {
        variants: {
            position: {
                right: "right-2",
                left: "left-2",

            }
        }, 
        defaultVariants: {
            position: "right",
        }
    }
)

interface RadioItemProps extends Radix.MenuRadioItemProps, VariantProps<typeof radioVariants>{

}


//Item Props
interface ItemProps extends Radix.DropdownMenuItemProps {
    className?: string;
    inset: number;
}

//Primitivos
const DropdownMenu = Radix.Root;
const DropdownMenuGroup = Radix.Group;
const DropdownMenuRadioGroup = Radix.RadioGroup;
const DropdownMenuPortal = Radix.Portal;
const DropdownMenuSub = Radix.Sub;

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
            className={cn("min-w-[8rem] rounded-xl text-sm  overflow-hidden bg-neutral-900 p-1 shadow-lg shadow-neutral-950" +
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
        className={cn("  flex cursor-default select-none outline-none transition:all px-2 py-1.5 rounded-md" + 
        " hover:bg-neutral-800 hover:cursor-pointer  ease-in duration-100" +
        " focus:bg-neutral-800 focus:cursor-pointer  ease-in duration-100" +
        " data-[disabled]:pointer-events-none data-[disabled]:opacity-50" ,
        inset && 'pl-8',
        className)}
        ref={ref}
        {...props}
    />

))

//Checkbox
const DropdownMenuCheckbox = React.forwardRef<
    React.ElementRef<typeof Radix.CheckboxItem>,
    CheckItemProps>(({className, position, children,checked, ...props}, ref) => (
        <Radix.CheckboxItem
            ref={ref}
            className={cn(" group flex relative items-center cursor-default select-none outline-none p-1 transition:all rounded-md" 
            +" hover:bg-neutral-800  hover:cursor-pointer  ease-in duration-100" + 
            " data-[disabled]:pointer-events-none data-[disabled]:opacity-50" +
            " focus:bg-neutral-800 focus:cursor-pointer  ease-in duration-100 " +
            " data-[state=checked]:text-green-500 ", className)}
            checked={checked}
            {...props}
        >
            <span className={cn(checkVariants({position}), 
            "flex items-center h-4 w-4 border-dashed border-2 border-neutral-700 rounded-md" + 
            " group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-none")}>
                <Radix.ItemIndicator className="">
                    <Check className="h-3 w-3 text-neutral-50"/>
                </Radix.ItemIndicator>
            </span>
            {children}
        </Radix.CheckboxItem>
))

//Radio 
const DropdownMenuRadioItem = React.forwardRef<
    React.ElementRef<typeof Radix.RadioItem>,
    RadioItemProps>(({className, position, children, ...props }, ref) => (
        <Radix.RadioItem
            ref={ref}
            className={cn("group flex relative  items-center cursor-default select-none outline-none transition:al p-1 rounded-md" 
            +" hover:bg-neutral-800  hover:cursor-pointer l ease-in duration-100" + 
            " data-[disabled]:pointer-events-none data-[disabled]:opacity-50" +
            " focus:bg-neutral-800 focus:cursor-pointer  ease-in duration-100" +
            " data-[state=checked]:text-green-500", className)}
            {...props}
        >
            <span className={cn(radioVariants({position}), 
            "flex items-center jusitify-center p-1 border-2 border-neutral-700 h-4 w-4 rounded-full" +
            " group-data-[state=checked]:border-green-500")}>
                <Radix.ItemIndicator>
                    <Circle className="h-2 aspect-square fill-current"/>
                </Radix.ItemIndicator>
            </span>
            {children}
        </Radix.RadioItem>
))

//Label
const DropdownMenuLabel = React.forwardRef<
    React.ElementRef<typeof Radix.Label>,
    React.ComponentPropsWithoutRef<typeof Radix.Label> & {inset?: boolean}>(({className, inset, ...props}, ref) => (
    <Radix.Label
        ref={ref}
        className={cn("px-2 py-1.5 text-sm font-semibold text-neutral-500", 
        inset && 'pl-8', 
        className)}
        {...props}
    />
))

//Separator
const DropdownMenuSeparator = React.forwardRef<
    React.ElementRef<typeof Radix.Separator>,
    React.ComponentPropsWithoutRef<typeof Radix.Separator>>(({className, ...props}, ref) => (
        <Radix.Separator
            ref={ref}
            className={cn("-mx-1 my-1 h-1 bg-neutral-800", className)}
            {...props}
        />
))

//Subcontent 
const DropdownMenuSubContent = React.forwardRef<
React.ElementRef<typeof Radix.SubContent>,
React.ComponentPropsWithoutRef<typeof Radix.SubContent>
>(({sideOffset=4, className, ...props}, ref) => (
    
    <Radix.SubContent 
        ref={ref}
        sideOffset={sideOffset}
        className={cn("min-w-[8rem] rounded-md overflow-hidden bg-neutral-900 p-1 shadow-md shadow-neutral-950" +
            " data-[state=open]:animate-in data-[state-open]:fade-in-0 data-[state=open]:zoom-in-95" + 
            " data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95" +
            " data-[side=left]:slide-in-from-right-3" +
            " data-[side=right]:slide-in-from-left-3" +
            " data-[side=bottom]:slide-in-from-top-3" +
            " data-[side=top]:slide-in-from-bottom-3"
        , className)}
        {...props}        
    />
    
))

//Subtrigger
const DropdowMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof Radix.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof Radix.SubTrigger> & {
    inset?: boolean
  }
>(({className, inset, ...props}, ref) => (
    <Radix.SubTrigger
        className={cn(" flex cursor-default select-none rounded-md" + 
        " hover:bg-neutral-800 outline-none p-1  hover:cursor-pointer transition:all ease-in duration-100" + 
        " focus:bg-neutral-800 focus:cursor-pointer  ease-in duration-100" +
        " data-[disabled]:pointer-events-none data-[disabled]:opacity-50" ,
        inset && 'pl-8',
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
    DropdownMenuCheckbox,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdowMenuSubTrigger
}