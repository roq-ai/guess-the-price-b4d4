import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  image: yup.string().required(),
  price: yup.number().integer().required(),
  organization_id: yup.string().nullable().required(),
});
