// react redux
import React from 'react'

// form
import {Controller, useFormContext} from 'react-hook-form'

// ui-components
import {FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

//types
import {IFormPasswordInputProps} from "../../utils/types"

// styles
import styles from "./form-input-password.module.css";


interface State {
  showPassword: boolean;
}

const FormInputPassword = ({name}: IFormPasswordInputProps) => {
  const [values, setValues] = React.useState<State>({showPassword: false})

  const handleClickShowPassword = () => {
    setValues({
      ...values, showPassword: !values.showPassword,
    });
  };

  // const {control, formState: {errors}} = useFormContext();
  const {control} = useFormContext();


  return (<Controller
    name={name}
    control={control}
    defaultValue=""
    render={({field: {onChange, value}, fieldState: {error}, formState}) => (
      <FormControl variant="standard" className={styles.passwordInput}>
        <InputLabel sx={error && {color: '#d32f2f'}} htmlFor="password">Пароль</InputLabel>
        <Input
          id="password"
          type={values.showPassword ? 'text' : 'password'}
          value={value}
          error={!!error}
          onChange={onChange}
          endAdornment={<InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}

            >
              {values.showPassword ? <VisibilityOff/> : <Visibility/>}
            </IconButton>
          </InputAdornment>}
        />
        <FormHelperText sx={error && {color: '#d32f2f'}}
                        id="password-text">{error ? error.message : null}</FormHelperText>
      </FormControl>

    )}/>)
}

export default FormInputPassword;
