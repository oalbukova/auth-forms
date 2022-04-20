import * as yup from "yup";

const schema = yup.object({
  login: yup.string().email('Введите валидный email-адрес').required('Поле "email" должно быть заполнено'),
  password: yup.string().min(8, 'пароль должен быть не короче 8 символов').required('Поле "пароль" должно быть заполнено'),
});

export default schema;
