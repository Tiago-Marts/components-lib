import * as React from 'react';
import * as PanelPrimitive from 'react-resizable-panels'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '@/src/lib/util'
import { GripVertical } from 'lucide-react';

//Panel Variants
const panelVariants = cva(
    "relative flex h-full w-full data-[panel-group-direction=vertical]:flex-row ",
    {
        variants: {
            variant: {
                solid: "gap-1  *:bg-neutral-900 *:rounded-md",
                outline: "border rounded-md border-neutral-700", 
            }
        },
        defaultVariants: {
            variant: "solid",
        }
    }
)

interface PanelGroupStyleProps extends PanelPrimitive.PanelGroupProps, VariantProps<typeof panelVariants>{}


//PanelGroup
const PanelGroup = React.forwardRef<
    React.ElementRef<typeof PanelPrimitive.PanelGroup>,
    PanelGroupStyleProps 
>(({className,variant, ...props}, ref) => (
    <PanelPrimitive.PanelGroup
        ref={ref}
        className={cn(panelVariants({variant}))}
        {...props}
    />
));


//Panel
const Panel = PanelPrimitive.Panel;

const PanelHandler = React.forwardRef<
    React.ElementRef<typeof PanelPrimitive.PanelResizeHandle>,
    React.ComponentPropsWithoutRef<typeof PanelPrimitive.PanelResizeHandle> & {withHandle?: boolean}
>(({className, withHandle = false , ...props}, ref) => (
    <PanelPrimitive.PanelResizeHandle
        className={cn(
            "handler relative flex items-center justify-center w-px bg-neutral-700 data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:h-px  " 
        , className)}
        {...props}

    >
        {withHandle && (
            <span className=' absolute z-50 flex  items-center justify-center h-6 w-[12px]  rounded-sm bg-neutral-800 hover:bg-neutral-700 transition-colors'>
                <GripVertical className=''/>
            </span>
        )}
    </PanelPrimitive.PanelResizeHandle>
))



//Todos exports
export {
    PanelGroup,
    Panel,
    PanelHandler,

}