// react redux
import React from 'react'

// form
import {Controller, useFormContext} from 'react-hook-form'

// ui-components
import TextField from '@mui/material/TextField';

//types
import {IFormTextInputProps} from "../../utils/types"

// styles
import styles from "./form-input-text.module.css";


const FormInputText = ({name, label, type}: IFormTextInputProps) => {
  const {control} = useFormContext();


  return (<Controller
    name={name}
    control={control}
    rules={{ required: "Обязательно для заполнения" }}
    defaultValue=""
    render={({field: {onChange, value}, fieldState: {error}, formState}) => (<TextField
      helperText={error ? error.message : null}
      error={!!error}
      onChange={onChange}
      value={value}
      size="small"
      label={label}
      margin="normal"
      variant='standard'
      className={styles.textInput}
      type={type}
    />)}
  />)
}

export default FormInputText;
