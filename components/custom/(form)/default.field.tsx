'use client';

import {
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { FieldProps } from '@/types/components.types';
import { useMemo } from 'react';
import {
    FAutocomplete,
    FCheckbox,
    FDate,
    FInput,
    FMultiselect,
    FSelect,
    FTextarea,
    FTime,
} from './(variants)';

const DField = ({
    error,
    name,
    register,
    title,
    type,
    autocomplete,
    classNames,
    content,
    input,
    description,
    select,
    date,
    multiselect,
    textarea,
    separator,
}: FieldProps) => {
    error && console.log('FIELD ERROR:', error);

    const getChildren = useMemo(() => {
        switch (type) {
            case 'separator':
                return <Separator {...separator} />;
            case 'input':
                return <FInput input={input} register={register} name={name} />;
            case 'autocomplete':
                return (
                    <FAutocomplete autocomplete={autocomplete} register={register} />
                );
            case 'select':
                return <FSelect select={select} register={register} />;
            case 'checkbox':
                return <FCheckbox register={register} />;
            case 'multiselect':
                return <FMultiselect multiselect={multiselect} register={register} />;
            case 'date':
                return <FDate register={register} date={date} />;
            case 'time':
                return <FTime register={register} date={date} />;
            case 'textarea':
                return <FTextarea register={register} textarea={textarea} />;
        }
    }, [name, register, title, type, content, input, autocomplete, multiselect]);

    return (
        <FormItem className={classNames?.container}>
            <FormLabel className={classNames?.label}>{title}</FormLabel>
            <div className={classNames?.content}>{getChildren}</div>
            <FormDescription className={classNames?.description}>
                {description}
            </FormDescription>
            <FormMessage />
        </FormItem>
    );
};

export default DField;
