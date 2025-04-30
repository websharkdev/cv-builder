import { FormControl } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { FieldProps } from '@/types/components.types';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

type FTextareaProps = {
  textarea: FieldProps['textarea'];
  register: ControllerRenderProps<FieldValues, string>;
};

const FTextarea = ({ register, textarea }: FTextareaProps) => {
  return (
    <FormControl>
      <Textarea {...register} {...textarea} />
    </FormControl>
  );
};

export default FTextarea;
