import * as React from 'react';
import * as Radix from '@radix-ui/react-select';
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '@/src/lib/util'
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

//Trigger variants
//Trigger props
const triggerVariants = cva(
    "flex flex-row items-center justify-between w-full max-w-[200px] transition-all font-medium duration-300 ease-[cubic-bezier(0.33, 1, 0.68, 1)] rounded-lg" +  
    " focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background select-none",
    {
    variants: {
        variant: {
            default: " bg-neutral-900  hover:bg-neutral-800 ",
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

interface TriggerProps extends Radix.SelectTriggerProps, VariantProps<typeof triggerVariants> {
    className?: string;
    children: React.ReactNode;
}

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

interface ItemProps extends Radix.SelectItemProps, VariantProps<typeof checkVariants>{

}

const Select = Radix.Root;
const SelectGroup = Radix.Group;
const SelectValue = Radix.Value;
const SelectViewPort = Radix.Viewport;


//Trigger
const SelectTrigger = React.forwardRef<
    React.ElementRef<typeof Radix.Trigger>,
    TriggerProps>(({className,variant, size, children, ...props}, ref) => (
    <Radix.Trigger
        ref={ref}
        className={cn(triggerVariants({variant, size, className}))}
        {...props}
    >
        {children}
        <Radix.Icon>
            <ChevronDown className='h-4 aspect-square text-neutral-500'/>
        </Radix.Icon>
    </Radix.Trigger>
))

//ScrollButtons
const SelectScrollDownButton = React.forwardRef<
    React.ElementRef<typeof Radix.ScrollDownButton>,
    React.ComponentPropsWithoutRef<typeof Radix.ScrollDownButton>
>(({className, ...props}, ref) => (
    <Radix.ScrollDownButton
        ref={ref}
        className={cn(
            "flex cursor-default items-center justify-center py-1"
        )}
        {...props}
    >
        <ChevronDown className='h-4 aspect-square'/>
    </Radix.ScrollDownButton>
))

const SelectScrollUpButton = React.forwardRef<
    React.ElementRef<typeof Radix.ScrollUpButton>,
    React.ComponentPropsWithoutRef<typeof Radix.ScrollUpButton>
>(({className, ...props}, ref) => (
    <Radix.ScrollUpButton
        ref={ref}
        className={cn(
            "flex cursor-default items-center justify-center py-1"
        )}
        {...props}
    >
        <ChevronUp className='h-4 aspect-square'/>
    </Radix.ScrollUpButton>
))

//Content
const SelectContent = React.forwardRef<
    React.ElementRef<typeof Radix.Content>,
    React.ComponentPropsWithoutRef<typeof Radix.Content>
>(({sideOffset=4,children, className,position="popper", ...props},ref) =>(
    <Radix.Portal>
        <Radix.Content            
            ref={ref}
            sideOffset={sideOffset}
            className={cn("relative  min-w-[8rem] max-h-64 rounded-md text-sm  overflow-hidden bg-neutral-900 p-1 shadow-lg shadow-neutral-950" +
            " " +
            " data-[state=open]:animate-in data-[state-open]:fade-in-0 data-[state=open]:zoom-in-95" + 
            " data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-90" +
            " data-[side=left]:slide-in-from-right-3" +
            " data-[side=right]:slide-in-from-left-3" +
            " data-[side=bottom]:slide-in-from-top-3" +
            " data-[side=top]:slide-in-from-bottom-3",
            position === "popper" && "data-[side=bottom]:translate-y-2 data-[side=left]:-translate-x-2 data-[side=right]:translate-x-2 data-[side=top]:-translate-y-2",
             className)}
             position={position}
            {...props}    
        >
            <SelectScrollUpButton/>
            <Radix.Viewport
                className={cn(
                    "p-1 ",
                    position==="popper" &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                )}
            >
                {children}
            </Radix.Viewport>
            <SelectScrollDownButton/>
        </Radix.Content>
    </Radix.Portal>
))

//Item
const SelectItem = React.forwardRef<
    React.ElementRef<typeof Radix.Item>,
    ItemProps & {inset?: boolean}>(({className,children,position, inset, ...props},ref) => (
        <Radix.Item
            ref={ref}
            className={cn("  flex items-center cursor-default select-none outline-none transition:all px-2 py-1.5 rounded-sm " + 
            " hover:bg-neutral-800 hover:cursor-pointer  ease-in duration-100" +
            " focus:bg-neutral-800 focus:cursor-pointer  ease-in duration-100" +
            " data-[state=checked]:text-green-500" +
            " data-[disabled]:pointer-events-none data-[disabled]:opacity-50" ,
            inset && 'pl-8',
            className)}
            {...props}
        >
            <Radix.ItemText> {children}</Radix.ItemText>
            <span className={cn(checkVariants({position}))}>
                <Radix.ItemIndicator >
                    <Check className="h-4 aspect-square"/>
                </Radix.ItemIndicator>
            </span>
        </Radix.Item>
))

//Label
const SelectLabel = React.forwardRef<
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
const SelectSeparator = React.forwardRef<
    React.ElementRef<typeof Radix.Separator>,
    React.ComponentPropsWithoutRef<typeof Radix.Separator>>(({className, ...props}, ref) => (
        <Radix.Separator
            ref={ref}
            className={cn("-mx-1 my-1 h-px bg-neutral-700", className)}
            {...props}
        />
))


//Todos exports
export{
    Select,
    SelectGroup,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
    SelectViewPort,
    SelectLabel,
    SelectSeparator,
}