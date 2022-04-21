// react redux
import React, { useCallback } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "../../services/hooks";

// services
import { register } from "../../services/actions/user";

// forms
import { FormProvider, useForm } from "react-hook-form";

// components
import FormInputText from "../../components/form-input-text";

// validation
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import validationSchema from "./validation";

// ui-components
import { Card, Typography, Button } from "@mui/material";

// styles
import styles from "./registration.module.css";

const Registration: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const methods = useForm({ resolver: yupResolver(validationSchema) });
  const { handleSubmit } = methods;

  const onSubmit = useCallback(
    (data) => {
      dispatch(register(data));
    },
    [dispatch]
  );

  if ("username" in user) {
    return (
      <Redirect
        to={{
          pathname: "/pre-login",
        }}
      />
    );
  }

  return (
    <Card variant="outlined" className={styles.registerContainer}>
      <Typography
        sx={{ fontWeight: 700, mb: 3 }}
        className={styles.title}
        variant="h4"
        component="div"
        gutterBottom
        align="center"
      >
        Регистрация
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.registerForm}>
          <FormInputText
            name="username"
            label="Уникальный никнейм"
            type="text"
          />
          <FormInputText name="email" label="E-mail" type="text" />
          <FormInputText name="password1" label="Пароль" type="password" />
          <FormInputText
            name="password2"
            label="Подтверждение пароля"
            type="password"
          />
          <FormInputText name="keyword" label="Контрольное слово" type="text" />
          <Button
            type="submit"
            variant="contained"
            disableElevation
            fullWidth
            sx={{ mt: 6, p: 2 }}
          >
            Зарегистрироваться
          </Button>
        </form>
      </FormProvider>
    </Card>
  );
};

export default Registration;
