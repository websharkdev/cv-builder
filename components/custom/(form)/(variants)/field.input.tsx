'use client';

import { DateInput } from '@/components/ui/date-input';
import { FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PhoneNumber } from '@/components/ui/phone-number';
import { FieldProps } from '@/types/components.types';

const FInput = ({
  name,
  register,
  input,
}: Pick<FieldProps, 'name' | 'input' | 'register'>) => {
  if (input?.type === 'tel') {
    return (
      <FormControl>
        <PhoneNumber onChange={register.onChange} />
      </FormControl>
    );
  }

  if (input?.type === 'date') {
    return (
      <FormControl>
        <DateInput value={register.value} onChange={register.onChange} />
      </FormControl>
    );
  }

  return (
    <FormControl>
      <Input {...input} {...register} name={name} />
    </FormControl>
  );
};

export default FInput;
