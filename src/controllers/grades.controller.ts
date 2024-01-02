import { Request, Response } from "express";
import {
  createGrade,
  //   getGrades,
  //   deleteGrade,
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

// export const getGradeController = async (req: any, res: any) => {
//   try {
//     const engaged = await getGrades();
//     res.status(200).send(engaged);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

// export const deleteGradeController = async (req: any, res: any) => {
//   try {
//     const engaged = await deleteGrade(req, res);
//     res.status(200).send(engaged);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };
