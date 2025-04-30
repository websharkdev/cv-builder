'use client';

import { Badge } from '@/components/ui/badge';
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
import { removeSpacing } from '@/lib/string';
import { cn } from '@/lib/utils';
import { FieldProps, IDataItem } from '@/types/components.types';
import { ChevronsUpDown, Pen, Plus, Save, Trash2, X } from 'lucide-react';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import {
  IconSizeSmall,
  IconStrokeWidthDefault,
  IconStrokeWidthLight,
} from '@/lib/constants';

type FMultiselectProps = {
  multiselect: FieldProps['multiselect'];
  register: ControllerRenderProps<FieldValues, string>;
};

type StatusProps = {
  variant: 'default' | 'editing';
  value: string;
};

const FMultiselect = ({ multiselect, register }: FMultiselectProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<IDataItem[]>(multiselect?.data || []);
  const [search, setSearch] = useState<string>('');
  const [selected, setSelected] = useState<IDataItem[]>(register.value || []);

  const [status, setStatus] = useState<StatusProps>({
    variant: 'default',
    value: '',
  });

  const handleUnselect = useCallback((item: IDataItem) => {
    setSelected((prev) => prev.filter((s) => s.value !== item.value));
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === 'Delete' || e.key === 'Backspace') {
          if (input.value === '') {
            setSelected((prev) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === 'Escape') {
          input.blur();
        }
      }
    },
    [],
  );

  const selectables = data.filter((item) => !selected.includes(item));

  // CUSTOM

  const createOption = (name: string) => {
    const newItem = {
      value: removeSpacing(name),
      label: name,
    };
    setData((prev) => [...prev, newItem]);
    setSelected((prev) => [...prev, newItem]);
  };

  const updateOption = (option: IDataItem, newItem: IDataItem) => {
    setData((prev) =>
      prev.map((f) => (f.value === option.value ? newItem : f)),
    );
    //
    setSelected((prev) =>
      prev.map((f) => (f.value === option.value ? newItem : f)),
    );
  };

  const deleteOption = (option: IDataItem) => {
    setData((prev) => prev.filter((f) => f.value !== option.value));
    setSelected((prev) => prev.filter((f) => f.value !== option.value));
  };
  // CUSTOM

  useEffect(() => {
    if (
      register.value.length > 0 &&
      JSON.stringify(register.value) !== JSON.stringify(selected)
    )
      setSelected(register.value);
  }, [register.value]);

  useEffect(() => {
    register.onChange(selected);
  }, [selected]);

  return (
    <Popover modal>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            className={cn(
              'min-h-10 w-full justify-between',
              register!.value && 'text-muted-foreground',
            )}
          >
            {selected.length > 0 ? (
              <div className="flex max-h-8 flex-wrap gap-1 overflow-hidden py-1.5">
                {selected.map((item) => (
                  <Badge key={item.value} variant="secondary">
                    <span className="max-w-40 truncate text-xs font-medium">
                      {item.label}
                    </span>
                  </Badge>
                ))}
              </div>
            ) : (
              <Fragment>
                Select item
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Fragment>
            )}
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command onKeyDown={handleKeyDown} className="w-full max-w-xs">
          <CommandInput
            ref={inputRef}
            value={search}
            onValueChange={setSearch}
            placeholder={multiselect!.placeholder}
          />

          {selected.length > 0 && (
            <div className="flex w-full max-w-xs flex-wrap gap-1 p-1.5">
              {selected.map((item) => (
                <Badge key={item.value} variant="secondary">
                  <span className="w-full max-w-20 truncate" title={item.label}>
                    {item.label}
                  </span>
                  <button
                    className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleUnselect(item);
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={() => handleUnselect(item)}
                  >
                    <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                  </button>
                </Badge>
              ))}
            </div>
          )}

          <CommandList>
            <CommandEmpty>No items found.</CommandEmpty>
            <CommandGroup>
              {selectables!.map((options) => (
                <CommandItem
                  key={options.value}
                  className="group flex-1 cursor-pointer"
                >
                  {status.variant === 'default' &&
                    status.value !== options.label &&
                    status.value === '' ? (
                    <span
                      className="w-full max-w-40 truncate"
                      onClick={() => {
                        setSearch('');
                        setSelected((prev) => [...prev, options]);
                      }}
                    >
                      {options.label}
                    </span>
                  ) : (
                    <Input
                      onChange={(e) =>
                        setStatus({ ...status, value: e.target.value })
                      }
                      autoFocus
                      value={status.value}
                      className="h-8 flex-1 rounded bg-white"
                    />
                  )}

                  {multiselect?.editable
                    ? [
                      {
                        id: 'Edit',
                        icon: status.variant === 'default' ? Pen : Save,
                      },
                      {
                        id: 'Delete',
                        icon: Trash2,
                      },
                    ].map((action) => (
                      <Button
                        key={`field-multiselect-${options.value}-${action.id}`}
                        variant="ghost"
                        size="xsicon"
                        className="pointer-events-none opacity-0 transition-all duration-300 hover:bg-white group-hover:pointer-events-auto group-hover:opacity-100"
                        onClick={() => {
                          if (removeSpacing(action.id) === 'delete') {
                            deleteOption(options);
                          }

                          if (
                            status.variant === 'default' &&
                            removeSpacing(action.id) === 'edit'
                          ) {
                            setStatus({
                              value: options.label,
                              variant: 'editing',
                            });
                          }

                          if (
                            status.variant === 'editing' &&
                            removeSpacing(action.id) === 'edit'
                            // && status.value !== options.label
                          ) {
                            updateOption(options, {
                              label: status.value,
                              value: removeSpacing(status.value),
                            });
                            setStatus({
                              value: '',
                              variant: 'default',
                            });
                          }
                        }}
                      >
                        <action.icon
                          size={IconSizeSmall}
                          strokeWidth={IconStrokeWidthLight}
                        />
                      </Button>
                    ))
                    : null}
                </CommandItem>
              ))}
            </CommandGroup>

            {/* CREATE */}

            {multiselect?.create ? (
              <CommandCreate
                onSelect={() => createOption(search)}
                {...{ search, data }}
              />
            ) : null}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default FMultiselect;

const CommandCreate = ({
  search,
  data,
  onSelect,
}: {
  search: string;
  data: IDataItem[];
  onSelect: () => void;
}) => {
  const hasNoItems = !data
    .map(({ value }) => value)
    .includes(removeSpacing(search));

  const render = search !== '' && hasNoItems;

  if (!render) return null;

  // BUG: whenever a space is appended, the Create-Button will not be shown.
  return (
    <CommandItem
      key={`${search}`}
      value={`${search}`}
      className="m-1 flex-1 whitespace-nowrap text-xs text-muted-foreground"
      onSelect={onSelect}
    >
      <Plus size={IconSizeSmall} strokeWidth={IconStrokeWidthDefault} />
      <span>Create new label</span>
      <span className="w-full max-w-24 truncate">&quot;{search}&quot;</span>
    </CommandItem>
  );
};
