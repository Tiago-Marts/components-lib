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
                    toast: ' bg-gradient-to-r from-neutral-800/[0.45] to-neutral-700/[0.6] w-[300px] -lg px-5 py-2.5 rounded-[20px] *:text-sm',
                    title: 'font-bold ml-2',
                    description: 'ml-2',
                    
                    actionButton: 'group-[.toast]:px-2 group-[.toast]:py-1 group-[.toast]:bg-neutral-50 group-[.toast]:text-neutral-900',
                    success: ' bg-gradient-to-r from-green-800/[0.4] to-green-700/[0.2]',
                    warning: " bg-gradient-to-r from-orange-800/[0.4] to-orange-500/[0.2]",
                    error: " bg-gradient-to-r from-red-800/[0.43] to-red-500/[0.3]",
                    info: " bg-gradient-to-r from-cyan-800/[0.4] to-cyan-500/[0.2]",
                    
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