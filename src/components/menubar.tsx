import * as React from 'react';
import * as Radix from '@radix-ui/react-menubar';
import { cn } from '@/src/lib/util';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check, Circle } from 'lucide-react';

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

//Root
const Menubar = React.forwardRef<
    React.ElementRef<typeof Radix.Root>,
    React.ComponentPropsWithoutRef<typeof Radix.Root>
>(({className, ...props}, ref) => (
    <Radix.Root
        ref={ref}
        className={cn(
            "w-full max-w-[300px] px-3 py-1.5 flex flex-row justify-around items-center gap-6 bg-neutral-800 rounded-xl shadow-lg shadow-black/25",
            className
        )}
        {...props}
    />
))

//Menubar, Submenu wrapper
const MenubarMenu = Radix.Menu; 
const MenubarSubMenu = Radix.Sub;

//Groups wrappers
const MenubarRadioGroup = Radix.RadioGroup;
const MenubarGroup = Radix.Group;

//Trigger
const MenubarTrigger = React.forwardRef<
    React.ElementRef<typeof Radix.Trigger>,
    React.ComponentPropsWithoutRef<typeof Radix.Trigger>
>(({className, children, ...props}, ref) => (
    <Radix.Trigger
        ref={ref}
        className={cn(
            " flex items-center justify-center px-2 py-[2px] rounded-md " + 
            " hover:bg-neutral-900/70" + 
            " data-[state=open]:bg-neutral-900",
            className
        )}
        {...props}
    >
        {children}
    </Radix.Trigger>
))

//Content
const MenubarContent = React.forwardRef<
    React.ElementRef<typeof Radix.Content>,
    React.ComponentPropsWithoutRef<typeof Radix.Content>
>(({className, sideOffset=4, ...props}, ref) => (
    <Radix.Portal>
        <Radix.Content
            ref={ref}
            sideOffset={sideOffset}
            align='start'
            className={cn(
                "flex flex-col items-start justify-center p-1 gap-1 min-w-[14rem] bg-neutral-800 mt-2 mb-2 *:text-sm rounded-xl shadow-lg shadow-black/25" + 
                " data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
                className
            )}
            {...props}
        />
    </Radix.Portal>
))


// Item
const MenubarItem = React.forwardRef<
    React.ElementRef<typeof Radix.Item>,
    React.ComponentPropsWithoutRef<typeof Radix.Item>
>(({className, ...props}, ref) => (
    <Radix.Item
        ref={ref}
        className={cn(
            "flex items-center justify-between px-2 py-1.5 w-full rounded-md cursor-pointer " + 
            " hover:bg-neutral-900",
            className
        )}
        {...props}
    
    />
))

// Label
const MenubarLabel = React.forwardRef<
    React.ElementRef<typeof Radix.Label>,
    React.ComponentPropsWithoutRef<typeof Radix.Label>
>(({className, ...props}, ref) => (
    <Radix.Label
        ref={ref}
        className={cn(
            "",
            className
        )}
        {...props}
    />
))


//Checkbox Item
const MenubarCheckboxItem = React.forwardRef<
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


//Radio Item
const MenubarRadioItem = React.forwardRef<
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

//Separator
const MenubarSeparator = React.forwardRef<
    React.ElementRef<typeof Radix.Separator>,
    React.ComponentPropsWithoutRef<typeof Radix.Separator>>(({className, ...props}, ref) => (
        <Radix.Separator
            ref={ref}
            className={cn("-mx-1 my-1 h-1 bg-neutral-800", className)}
            {...props}
        />
))

//Subtrigger
const MenubarSubTrigger = React.forwardRef<
    React.ElementRef<typeof Radix.SubTrigger>,
    React.ComponentPropsWithoutRef<typeof Radix.SubTrigger>
>(({className, children, ...props}, ref) => (
    <Radix.SubTrigger
        ref={ref}
        className={cn(
            "flex items-center justify-between px-1.5 py-[3px] w-full rounded-md cursor-pointer " + 
            " hover:bg-neutral-900",
            className
        )}
        {...props}
    >
        {children}
    </Radix.SubTrigger>
))

//Subcontent 
const MenubarSubContent = React.forwardRef<
    React.ElementRef<typeof Radix.SubContent>,
    React.ComponentPropsWithoutRef<typeof Radix.SubContent>
>(({className, sideOffset=9, ...props}, ref) => (
    
    <Radix.SubContent
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
            "flex flex-col items-start justify-center p-3 gap-3 bg-neutral-800  *:text-sm rounded-xl shadow-lg shadow-black/25" + 
            " data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            className
        )}
        {...props}
    />
))


//Todos exports 
export {
    Menubar,
    MenubarMenu,
    MenubarSubMenu,
    MenubarGroup,
    MenubarRadioGroup,
    MenubarLabel,
    MenubarSeparator,
    MenubarTrigger,
    MenubarContent,
    MenubarItem,
    MenubarSubTrigger,
    MenubarSubContent,
    MenubarCheckboxItem,
    MenubarRadioItem
}