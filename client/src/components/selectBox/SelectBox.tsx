import React, { ChangeEvent } from 'react';
import Select from '@material-ui/core/Select';

export type Option = { value: string | number; text: string };

interface Props {
  options: Array<Option>;
}

export default function SelectBox({ options }: Props) {
  const [selectedValue, setSelectedValue] = React.useState<number | string>('');

  const handleChange = (e: ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
    setSelectedValue(e.target.value as string);
  };

  return (
    <>
      <Select
        native
        value={selectedValue}
        onChange={handleChange}
        inputProps={{
          name: 'age',
          id: 'age-native-simple',
        }}
      >
        <option aria-label='None' value='' />
        {options.map((option, index) => {
          return (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </Select>
    </>
  );
}
