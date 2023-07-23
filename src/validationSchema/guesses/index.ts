import * as yup from 'yup';

export const guessValidationSchema = yup.object().shape({
  guessed_price: yup.number().integer().required(),
  time_taken: yup.number().integer().required(),
  product_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
