'use client';

import { format, formatDate } from 'date-fns';
import { CalendarIcon, Clock } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { FieldProps } from '@/types/components.types';
import { useId, useMemo, useState } from 'react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

type FTimeProps = {
  register: ControllerRenderProps<FieldValues, string>;
  date: FieldProps['date'];
};

const FTime = ({ register, date }: FTimeProps) => {
  const id = useId();
  const [time, setTime] = useState<string>(formatDate(new Date(), 'HH:mm:00'));

  useMemo(() => {
    if (!!register.value) {
      const [hours, minutes] = time.split(':').map(Number);
      const value = new Date(register.value).setHours(hours, minutes, 0, 0);
      register.onChange(new Date(value));
    }
  }, [time]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant={'outline'}
            className={cn(
              'w-full pl-3 text-left font-normal',
              !register.value && 'text-muted-foreground',
            )}
          >
            {register.value ? (
              format(register.value, 'Pp')
            ) : (
              <span>{date?.placeholder}</span>
            )}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent
        className="grid w-full max-w-sm grid-cols-1 gap-2.5 p-0"
        align="start"
      >
        <Calendar
          mode="single"
          selected={register.value}
          onSelect={register.onChange}
          disabled={date?.disabled || false}
          initialFocus
        />
        <div className="border-t border-border p-3">
          <div className="flex items-center gap-3">
            <div className="relative grow">
              <Input
                id={id}
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                step="1"
                className="peer ps-9 [&::-webkit-calendar-picker-indicator]:hidden"
              />
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                <Clock size={16} strokeWidth={2} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FTime;
