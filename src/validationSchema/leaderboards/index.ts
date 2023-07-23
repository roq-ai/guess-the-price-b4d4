import * as yup from 'yup';

export const leaderboardValidationSchema = yup.object().shape({
  rank: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
