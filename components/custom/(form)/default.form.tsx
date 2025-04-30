import {
  ControllerRenderProps,
  FieldValues,
  UseFormReturn,
} from 'react-hook-form';
import DField from './default.field';
import { Form, FormField } from '@/components/ui/form';
import { Button, ButtonProps } from '@/components/ui/button';
import { FieldProps } from '@/types/components.types';
import { ScrollArea, ScrollAreaProps } from '@/components/ui/scroll-area';

type Props = {
  form: UseFormReturn;
  classNames?: {
    container?: string;
    content?: string;
    actions?: string;
  };
  actions: {
    onClose?: () => void;
    onSubmit: (values?: unknown) => void;
  };
  children?: Readonly<React.ReactNode>;
  status: 'pending' | 'success' | 'error';
  error: Error;
  fields: Omit<FieldProps, 'register' | 'form'>[];
  submit: ButtonProps;
  settings?: {
    scrollarea?: ScrollAreaProps;
  };
};

const DForm = ({
  fields,
  actions,
  children,
  error,
  form,
  classNames,
  submit,
  settings,
}: Props) => {
  error.name && console.log('ERROR:', error);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(actions.onSubmit)}
        className={classNames?.container}
      >
        <ScrollArea {...settings?.scrollarea}>
          <div className={classNames?.content}>
            {fields.map((ifield, index) => (
              <FormField
                key={`default-form--${ifield.name}-${index}`}
                control={form.control}
                name={ifield.name}
                rules={{
                  onChange: (e) =>
                    ifield.input?.type === 'number'
                      ? form.setValue(ifield.name, +e.target.value)
                      : form.setValue(ifield.name, e.target.value),
                }}
                render={({ field }) => (
                  <DField
                    {...ifield}
                    register={
                      field as ControllerRenderProps<FieldValues, string>
                    }
                  />
                )}
              />
            ))}

            {children}
          </div>
        </ScrollArea>

        <div className={classNames?.actions}>
          <Button {...submit}>{submit.children}</Button>
        </div>
      </form>
    </Form>
  );
};

export default DForm;
