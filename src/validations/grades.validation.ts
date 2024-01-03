import * as yup from "yup";

export const gradesValidation = yup.object().shape({
  bimestre: yup.string().required(),
  disciplina: yup.string().required(),
  nota: yup
    .number()
    .min(0, "A nota não pode ser menor que 0")
    .max(10, "A nota não pode ser maior que 10")
    .required(),
});
