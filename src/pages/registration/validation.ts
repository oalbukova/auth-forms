import * as yup from "yup";

const schema = yup.object({
  username: yup
    .string()
    .min(2, "никнейм должен быть не короче 4 символов")
    .max(100, "никнейм должен быть не длиннее 100 символов")
    .required('Поле "никнейм" должно быть заполнено'),
  email: yup
    .string()
    .email("Введите валидный email-адрес")
    .required('Поле "email" должно быть заполнено'),
  password1: yup
    .string()
    .min(8, "пароль должен быть не короче 8 символов")
    .required('Поле "пароль" должно быть заполнено'),
  password2: yup
    .string()
    .min(8, "пароль должен быть не короче 8 символов")
    .oneOf([yup.ref("password1")], "Пароли не совпадают")
    .required('Поле "подтверждение пароля" должно быть заполнено'),
  keyword: yup
    .string()
    .min(4, "контрольное слово должно быть не короче 4 символов")
    .required('Поле "контрольное слово" должно быть заполнено'),
});

export default schema;
