import * as React from 'react';
import * as Sonner from 'sonner';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/src/lib/util';

type ToasterProps = React.ComponentProps<typeof Sonner.Toaster>

const Toaster = ({...props}: ToasterProps) => {
    return (
        <Sonner.Toaster
            position='bottom-right'
            className = "toaster group"
            toastOptions={{
                unstyled: true,
                
                classNames: {
                    toast: 'group toast relative flex flex-row items-center justify-between bg-gradient-to-r from-neutral-800/[0.8] to-neutral-700/[0.4] w-[300px] backdrop-blur-lg px-5 py-2.5 rounded-[20px] *:text-sm',
                    title: 'font-bold',
                    description: '',
                    actionButton: 'group-[.toast]:px-2 group-[.toast]:py-1 group-[.toast]:bg-neutral-700',
                    
                }
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