import * as yup from "yup";

export const gradesValidation = yup.object().shape({
  bimestre: yup.string().required(),
  disciplina: yup.string().required(),
  nota: yup.number().required().min(0).max(10),
});
