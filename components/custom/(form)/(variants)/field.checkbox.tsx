import { Checkbox } from '@/components/ui/checkbox';
import { FormControl } from '@/components/ui/form';
import { FieldProps } from '@/types/components.types';

type Props = {
  register: FieldProps['register'];
};

const FCheckbox = ({ register }: Props) => {
  return (
    <FormControl>
      <Checkbox checked={register.value} onCheckedChange={register.onChange} />
    </FormControl>
  );
};

export default FCheckbox;
