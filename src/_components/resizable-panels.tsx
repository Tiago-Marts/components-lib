import * as React from 'react';
import * as PanelPrimitive from 'react-resizable-panels'
import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from '@/src/_lib/util'
import { GripVertical } from 'lucide-react';




//PanelGroup
const PanelGroup = React.forwardRef<
    React.ElementRef<typeof PanelPrimitive.PanelGroup>,
    React.ComponentPropsWithoutRef<typeof PanelPrimitive.PanelGroup> 
>(({className, ...props}, ref) => (
    <PanelPrimitive.PanelGroup
        ref={ref}
        className={cn("relative flex h-full w-full gap-px data-[panel-group-direction=vertical]:flex-row", className)}
        {...props}
    />
));


//Panel
const Panel = React.forwardRef<
    React.ElementRef<typeof PanelPrimitive.Panel>,
    React.ComponentPropsWithoutRef<typeof PanelPrimitive.Panel>
>(({className, ...props}, ref) => (
    <PanelPrimitive.Panel
        ref={ref}
        className={cn(
            "bg-neutral-900 rounded-md ", 
            className)}
        {...props}
    />
));

const PanelHandler = React.forwardRef<
    React.ElementRef<typeof PanelPrimitive.PanelResizeHandle>,
    React.ComponentPropsWithoutRef<typeof PanelPrimitive.PanelResizeHandle> & {withHandle?: boolean}
>(({className, withHandle = false , ...props}, ref) => (
    <PanelPrimitive.PanelResizeHandle
        className={cn(
            "handler relative flex items-center justify-center w-px  data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:h-px  " 
        , className)}
        {...props}

    >
        {withHandle && (
            <span className=' absolute  flex  items-center justify-center h-6 w-[12px]  rounded-sm bg-neutral-800 hover:bg-neutral-700 transition-colors'>
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