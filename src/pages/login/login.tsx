// react redux
import React from "react";

// forms
import { FormProvider, useForm } from "react-hook-form";

// services
import { useDispatch } from "../../services/hooks";
import { login } from "../../services/actions/user";

// components
import FormInputText from "../../components/form-input-text";

// validation
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import validationSchema from "./validation";

// utils
import { TUser } from "../../utils/types";

// ui-components
import { Card, Typography, Button } from "@mui/material";

// styles
import styles from "./login.module.css";

interface ILoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const methods = useForm<ILoginForm>({
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: TUser): void => {
    dispatch(login(data));
  };

  return (
    <Card variant="outlined" className={styles.loginContainer}>
      <Typography
        sx={{ fontWeight: 700, mb: 3 }}
        className={styles.title}
        variant="h4"
        component="div"
        gutterBottom
        align="center"
      >
        Вход в систему
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
          <FormInputText name="email" label="E-mail" type="text" />
          <Typography
            sx={{ fontWeight: 700, mt: 3 }}
            className={styles.title}
            variant="h5"
            component="div"
            gutterBottom
            align="center"
          >
            Код потверждения,
            <br /> полученный по e-mail
          </Typography>
          <FormInputText name="code" label="" type="text" />
          <Button
            type="submit"
            variant="contained"
            disableElevation
            fullWidth
            sx={{ mt: 6, p: 2 }}
          >
            Войти
          </Button>
        </form>
      </FormProvider>
    </Card>
  );
};

export default Login;
