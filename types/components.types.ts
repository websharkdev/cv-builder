
// import { RootModalProps } from '@/components/custom/modal/modal';
import { BorderBeamProps } from '@/components/ui/border-beam';
import { ButtonProps } from '@/components/ui/button';
import { InputProps } from '@/components/ui/input';
import { TextareaProps } from '@/components/ui/textarea';
import {
    SelectContentProps,
    SelectItemProps,
    SelectProps,
    SelectTriggerProps,
    SelectValueProps,
} from '@radix-ui/react-select';
import { SeparatorProps } from '@radix-ui/react-separator';
import { QueryStatus } from '@tanstack/react-query';
import { Matcher } from 'react-day-picker';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

export interface IButtonProps extends ButtonProps {
    icon?: React.ReactNode;
    content?: string;
}

// CARDS

export type ICardVariants =
    | 'list'
    | 'table'
    | 'message'
    | 'chart'
    | 'piechart'
    | 'default';

export interface ICardHeaderProps {
    status?: QueryStatus;
    image?: string;
    title: string;
    tooltip?: ICustomTooltip;
    description?: string;
    button?: IButtonProps;
    actions?: React.ReactNode;
}

export interface ICardClassNamesProps {
    container?: string;
    content?: string;
    header?: {
        container?: string;
        image?: string;
        title?: string;
        tooltip?: string;
        description?: string;
        button?: string;
        actions?: string;
    };
    footer?: {
        container?: string;
    };
    list?: {};
    chart?: {};
    table?: {};
}

export interface ICardProps {
    status?: QueryStatus;
    classNames?: ICardClassNamesProps;
    type: ICardVariants;
    header: ICardHeaderProps;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    beam?: BorderBeamProps & {
        visible: boolean;
    };
}

export interface ICustomTooltip {
    head: React.ReactNode;
    content: React.ReactNode;
    align?: 'center' | 'start' | 'end';
    delay?: number;
    copy?: boolean;
    copyValue?: string;
    classNames?: {
        head?: string;
        content?: string;
        container?: string;
        copy?: string;
    };
}

export interface IDataItem {
    label: string;
    value: number | string;
    icon?: Readonly<React.ReactNode>;
}

// FORM

export type FSelectProps = {
    settings?: {
        container?: SelectProps;
        content?: SelectContentProps;
        item?: SelectItemProps;
        value?: SelectValueProps;
        trigger?: SelectTriggerProps;
    };
    data: IDataItem[];
    classNames?: {
        option?: string;
        action?: string;
    };
};

export type FieldProps = {
    error?: boolean;
    name: string;
    title: string;
    description?: string;
    type:
    | 'otp'
    | 'input'
    | 'select'
    | 'autocomplete'
    | 'date'
    | 'time'
    | 'checkbox'
    | 'textarea'
    | 'separator'
    | 'image'
    | 'multiselect';
    register: ControllerRenderProps<FieldValues, string>;
    content?: Readonly<React.ReactNode>;
    classNames?: {
        container?: string;
        content?: string;
        label?: string;
        description?: string;
    };
    input?: InputProps;
    select?: FSelectProps;
    autocomplete?: {
        placeholder?: string;
        disabled?: boolean;
        data: IDataItem[];
        settings?: {
            trigger?: IButtonProps;
        };
    };
    multiselect?: {
        placeholder?: string;
        disabled?: boolean;
        data: IDataItem[];
        create?: boolean;
        editable?: boolean;
    };
    date?: {
        disabled?: Matcher | Matcher[];
        placeholder?: string;
        settings?: {
            minimum?: Date;
            maximum?: Date;
            default?: Date;
            showYearSwitcher?: boolean;
        };
        classNames?: {
            container?: string;
        };
    };
    textarea?: TextareaProps;
    separator?: SeparatorProps;
};

// export type IModalProps = {
//     modal: Omit<RootModalProps, 'children'>;
//     title: string;
//     description?: string;
//     children?: Readonly<React.ReactNode>;
//     actions?: {
//         close?: IButtonProps;
//         submit?: IButtonProps;
//     };
//     classNames?: {
//         content?: string;
//         header?: {
//             title?: string;
//             description?: string;
//             container?: string;
//         };
//         body?: string;
//         footer?: string;
//     };
// };
