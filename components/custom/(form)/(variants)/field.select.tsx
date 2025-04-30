'use client';

import { FormControl } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { removeSpacing } from '@/lib/string';
import { FieldProps } from '@/types/components.types';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

type Props = {
  select: FieldProps['select'];
  register: ControllerRenderProps<FieldValues, string>;
};

const FSelect = ({ register, select }: Props) => (
  <Select
    onValueChange={register.onChange}
    defaultValue={register.value}
    {...select?.settings?.container}
  >
    <FormControl>
      <SelectTrigger
        {...select?.settings?.trigger}
        className={select?.classNames?.action}
      >
        <SelectValue {...select?.settings?.value} />
      </SelectTrigger>
    </FormControl>
    <SelectContent {...select?.settings?.content}>
      {select?.data.map((option) => (
        <SelectItem
          {...select?.settings?.item}
          key={`field-select--${option.value}`}
          value={removeSpacing(String(option.value))}
          className={select?.classNames?.option}
        >
          <div className="flex flex-nowrap items-center gap-1.5">
            {option.icon && <span>{option.icon}</span>}
            <span>{option.label}</span>
          </div>
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export default FSelect;
