import * as React from 'react';
import * as DayPicker from 'react-day-picker';
import { cn } from '@/src/lib/util';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type CalendarProps = React.ComponentProps<typeof DayPicker.DayPicker>


const Calendar = ({className, classNames, showOutsideDays=false, ...props} : CalendarProps) => {
    return(
        <DayPicker.DayPicker
            showOutsideDays={showOutsideDays}
            className={cn(" max-w-[300px] ", className)}

            classNames={{
                months: "flex flex-col space-y-2 backdrop-blur-lg sm:flex-row sm:space-x-4 sm:space-y-0 bg-neutral-950/40 p-3 rounded-xl ",
                month: "space-y-4  ",
                caption: "flex flex-row items-center text-md justify-between  ",
                caption_label: "font-semibold ml-2",
                nav: " flex items-center gap-x-3",
                nav_button: "",
                nav_button_next: "",
                nav_button_previous: "",
                table: " w-full border-collapse space-y-1 ",
                head_row: "flex ",
                head_cell: "w-full uppercase text-xs text-neutral-700 ",
                row: "flex w-full  ",
                cell: " text-center h-9 w-9 ",
                day: "h-9 w-9 flex items-center justify-center font-normal rounded-full" + 
                " hover:bg-green-500/20 p-0 aria-selected:bg-green-500/30 aria-selected:text-green-500  transition-all ease-in",
                day_range_end: "day-range-end",
                day_selected: "",
                day_today: "text-green-500 rounded-full w-9 h-9 flex items-center justify-center",
                day_outside: "opacity-30",
                day_disabled: "text-neutral-700",
                day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                day_hidden: "invisible",
                ...classNames,
            }}
            components={{
                IconLeft: ({...props}) => <ChevronLeft className='h-6 w-6'/>,
                IconRight: ({...props}) => <ChevronRight className='h-6 w-6'/>,
            }}
            {...props}
        />
    )
}

export { Calendar }