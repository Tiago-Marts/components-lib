import * as React from 'react';
import * as Radix from '@radix-ui/react-checkbox';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from "@/src/_lib/util";
import { Check } from 'lucide-react';





const Checkbox = React.forwardRef<
    React.ElementRef<typeof Radix.Root>,
    React.ComponentPropsWithoutRef<typeof Radix.Root>
>(({className, ...props}, ref) => (
    <Radix.Root
        ref={ref}
        className={cn(
            "flex flex-row items-center justify-center w-6 text-lg p-1 aspect-square  rounded-md cursor-pointer  border-2 border-neutral-700 border-dashed transition-color duration-150 ease-in" + 
            " data-[state=checked]:bg-green-400 data-[state=checked]:border-transparent", 
            className)}
        {...props}
    >
        <span >
            <Radix.Indicator className={cn(
                "data-[state=checked]:animate-in data-[state=checked]:zoom-in-95 data-[state=checked]:fade-in-0 delay-75 ease-in-out" + 
                " data-[state=unchecked]:animate-out data-[state=unchecked]:zoom-out-95 data-[state=unchecked]:fade-out-0"
                , className)}>
                <Check className="h-3 aspect-square "/>
            </Radix.Indicator>
        </span>
    </Radix.Root>
))

export {
    Checkbox,
}

