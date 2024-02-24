import * as React from 'react';
import * as DayPicker from 'react-day-picker';
import { cn } from '@/src/lib/util';

type CalendarProps = React.ComponentProps<typeof DayPicker.DayPicker>


const Calendar = ({className, classNames, showOutsideDays=false, ...props} : CalendarProps) => {
    return(
        <DayPicker.DayPicker
            showOutsideDays={showOutsideDays}
            className={cn("w-full max-w-[280px] ", className)}
            classNames={{
                months: "flex flex-col space-y-2 backdrop-blur-lg sm:flex-row sm:space-x-4 sm:space-y-0 bg-neutral-950/40 p-3 rounded-xl ",
                month: "space-y-4 w-full  ",
                caption: "flex flex-row items-center justify-between",
                caption_label: "font-semibold",
                nav: "",
                nav_button: "",
                nav_button_next: "",
                nav_button_previous: "",
                table: " w-full border-collapse space-y-1 ",
                head_row: "flex uppercase text-xs text-neutral-700",
                head_cell: "w-9 ",
                row: "flex w-full  ",
                cell: " text-center h-9 w-9 ",
                day: "h-9 w-9 flex items-center justify-center font-normal rounded-full" + 
                " hover:bg-green-500/20 p-0 aria-selected:bg-green-500/30 aria-selected:text-green-500 transition-all ease-in",
                day_range_end: "day-range-end",
                day_selected: "",
                day_today: "text-lg bg-green-500/30 text-green-500 rounded-full w-9 h-9 flex items-center justify-center",
                day_outside: "opacity-30",
                day_disabled: "text-neutral-700",
                day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                day_hidden: "invisible",
                ...classNames,
            }}
            components={{

            }}
            {...props}
        />
    )
}

export { Calendar }