'use client';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { FormControl } from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { FieldProps } from '@/types/components.types';
import { Check, ChevronsUpDown } from 'lucide-react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';
type FAutocompleteProps = {
  autocomplete: FieldProps['autocomplete'];
  register: ControllerRenderProps<FieldValues, string>;
};

const FAutocomplete = ({ autocomplete, register }: FAutocompleteProps) => {
  return (
    <Popover modal>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              'h-10 w-full justify-between',
              !register.value && 'text-muted-foreground',
            )}
          >
            <span className="max-w-44 truncate">
              {register.value
                ? autocomplete?.data.find(
                  (item) => item.value === register.value,
                )?.label
                : 'Select item'}
            </span>
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput
            placeholder={autocomplete?.placeholder}
            className="h-9"
          />
          <CommandList>
            <CommandEmpty>No items found.</CommandEmpty>
            <CommandGroup>
              {autocomplete?.data.map((item) => (
                <CommandItem
                  value={String(item.value)}
                  key={item.value}
                  onSelect={register.onChange}
                  className="cursor-pointer"
                >
                  <span className="max-w-44 truncate">{item.label}</span>
                  <Check
                    className={cn(
                      'ml-auto',
                      item.value === register.value
                        ? 'opacity-100'
                        : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default FAutocomplete;
