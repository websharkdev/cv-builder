'use client';

import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { FormControl } from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { FieldProps } from '@/types/components.types';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

type FDateProps = {
  register: ControllerRenderProps<FieldValues, string>;
  date: FieldProps['date'];
};

const FDate = ({ register, date }: FDateProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant={'outline'}
            className={cn(
              'h-10 w-full pl-3 text-left font-normal',
              !register.value && 'text-muted-foreground',
              date?.classNames?.container,
            )}
          >
            {register.value ? (
              format(register.value, 'P')
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
          startMonth={date?.settings?.minimum}
          endMonth={date?.settings?.maximum}
          defaultMonth={date?.settings?.default}
          showYearSwitcher={date?.settings?.showYearSwitcher}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default FDate;
