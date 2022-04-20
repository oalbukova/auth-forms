// react redux
import React from "react";
import { Redirect } from "react-router-dom";

// forms
import { FormProvider, useForm } from "react-hook-form";

// services
import { useDispatch, useSelector } from "../../services/hooks";
import { authorize } from "../../services/actions/user";

// components
import FormInputText from "../../components/form-input-text";
import FormInputPassword from "../../components/form-input-password";

// validation
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import validationSchema from "./validation";

// utils
import { TUser } from "../../utils/types";

// ui-components
import { Card, Typography, Button } from "@mui/material";

// styles
import styles from "./pre-login.module.css";

interface ILoginForm {
  email: string;
  password: string;
}

const PreLogin: React.FC = () => {
  const dispatch = useDispatch();
  const methods = useForm<ILoginForm>({
    resolver: yupResolver(validationSchema),
  });
  const { data } = useSelector((state) => state.userReducer);
  const { handleSubmit } = methods;

  const onSubmit = (data: TUser): void => {
    dispatch(authorize(data));
  };

  if ("preLoginRes" in data) {
    return (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  }

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
          <FormInputText name="login" label="E-mail" type="text" />
          <FormInputPassword name="password" />
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

export default PreLogin;
