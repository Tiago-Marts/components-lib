import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/src/lib/util';

const buttonVariants = cva(
    "flex flex-row items-center justify-center  transition-all font-medium duration-300 ease-[cubic-bezier(0.33, 1, 0.68, 1)]   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background select-none",
    {
        variants: {
            variant: {
                primary: " bg-neutral-50 text-neutral-900  hover:bg-neutral-200 disabled:bg-neutral-50",
                secondary:" bg-neutral-800/[0.55] text-neutral-50 hover:bg-neutral-800/[0.7] disabled:bg-neutral-800/[0.95]",
                destructive: " bg-red-900/[0.4] text-red-500 hover:bg-red-900/[0.6] disabled:bg-red-900/[0.95]",
                outline: " bg-transparent border-2 border-neutral-700 hover:bg-neutral-800 ",
                ghost: " bg-transparent hover:bg-neutral-900  ",
            },
            size: {
                primary: " text-xl px-4 py-2 rounded-xl",
                secondary: " text-lg px-3 py-1 rounded-xl",
                sm: " text-sm px-2 py-1 rounded-full",
                xs: " text-xs px-1.5 py-1 rounded-full px-1 py-[0.3rem]",
                icon: " p-2 rounded-full aspect-square",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "primary"
        }
    }
    
)

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, VariantProps<typeof buttonVariants>{

}


const Button = ({className,variant, size, ...props} : ButtonProps) => {
    return(
        <button
            className={cn(buttonVariants({variant, size}), 
            "disabled:opacity-50 disabled:cursor-not-allowed ",
            className)}
            {...props}
        />
    )
}


export {
    Button,
}