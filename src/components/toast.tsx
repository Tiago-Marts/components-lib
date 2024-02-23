import * as React from 'react';
import * as Sonner from 'sonner';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/src/lib/util';
import { ChevronDown } from 'lucide-react';

type ToasterProps = React.ComponentProps<typeof Sonner.Toaster>

const Toaster = ({...props}: ToasterProps) => {
    return (
        <Sonner.Toaster
            position='bottom-right'
            className = "toaster group"

            toastOptions={{
                unstyled: true,
                
                className: "group toast relative flex flex-row items-center justify-between backdrop-blur-lg",
                classNames: {
                    toast: ' bg-gradient-to-r from-neutral-800/40 to-neutral-700/60 w-[300px] -lg px-5 py-2.5 rounded-[20px] *:text-sm',
                    title: 'font-bold ml-2',
                    description: 'ml-2',
                    
                    actionButton: 'group-[.toast]:px-2 group-[.toast]:py-1 group-[.toast]:bg-neutral-50 group-[.toast]:text-neutral-900',
                    success: ' bg-gradient-to-r from-green-800/40 to-green-700/20',
                    warning: " bg-gradient-to-r from-orange-800/40 to-orange-500/20",
                    error: " bg-gradient-to-r from-red-800/40 to-red-500/30",
                    info: " bg-gradient-to-r from-cyan-800/40 to-cyan-500/20",
                    
                },
                
            }}
            {...props}
        />
    )
}

const toast = Sonner.toast;

export {
    Toaster,
    toast,
}