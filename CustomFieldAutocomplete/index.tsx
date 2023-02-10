import * as React from 'react';
import {
  TextField,
  Autocomplete,
  Box,
  styled,
  TextFieldProps,
  OutlinedInputProps,
} from '@mui/material';

export default function CustomFieldAutocomplete({
  options,
  selected,
  bindKey,
  bindLabel,
  onlyKey,
  placeHolder,
  inputLabel,
  disableClearable,
  onEvent,
}: any) {
  return (
    <Autocomplete
      size="small"
      options={options}
      autoHighlight
      disableClearable={disableClearable}
      isOptionEqualToValue={(option, value) =>
        value
          ? onlyKey
            ? option == value
            : option[bindKey] == value[bindKey]
          : false
      }
      value={
        selected
          ? onlyKey
            ? selected
            : options.find((e) => e[bindKey] == selected)
          : ''
      }
      getOptionLabel={(option) =>
        (onlyKey ? option : option[bindKey] + '') || ''
      }
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {(onlyKey ? option : option[bindLabel]) || ''}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          inputProps={{
            ...params.inputProps,
            value: onlyKey
              ? params.inputProps.value
              : options.find((e) => e[bindKey] == params.inputProps.value)?.[
                  bindLabel
                ] || '',
          }}
          label={inputLabel}
          placeholder={placeHolder}
        />
      )}
      onChange={onEvent}
    />
  );
}
