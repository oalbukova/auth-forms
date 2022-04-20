import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .email("Введите валидный email-адрес")
    .required('Поле "email" должно быть заполнено'),
  code: yup
    .string()
    .min(1, "код должен быть не короче 1 символа")
    .required('Поле "код" должно быть заполнено'),
});

export default schema;
