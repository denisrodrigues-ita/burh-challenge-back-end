import { Request, Response } from "express";
import {
  createGrade,
  getGrades,
  deleteGrade,
  putGrade,
} from "../repositories/grades.repository";
import { gradesValidation } from "../validations/grades.validation";
import { GradeBodyProps } from "./grades.interface";

export const createGradeController = async (
  req: Request<GradeBodyProps>,
  res: Response
) => {
  try {
    const { bimestre, disciplina, nota } = req.body;

    await gradesValidation.validate({
      bimestre,
      disciplina,
      nota,
    });

    const grade = await createGrade(req.body);

    res.status(200).send(grade);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getGradeController = async (res: Response) => {
  try {
    const grades = await getGrades();
    res.status(200).send(grades);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteGradeController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const grades = await deleteGrade(req);
    res.status(200).send(grades);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const putGradeController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const { nota } = req.body;

    if (nota > 10)
      return res
        .status(400)
        .send({ message: "Nota não pode ser maior que 10" });
    if (nota < 0)
      return res.status(400).send({ message: "Nota não pode ser menor que 0" });

    const grades = await putGrade(req);
    res.status(200).send(grades);
  } catch (error) {
    return error;
  }
};
