import { prisma } from "../services/prisma";
import { Request } from "express";

export const createGrade = async (data: any) => {
  try {
    const grade = await prisma.grade.create({
      data: {
        bimestre: data.bimestre,
        disciplina: data.disciplina,
        nota: data.nota,
      },
    });

    return grade;
  } catch (error) {
    return error;
  } finally {
    await prisma.$disconnect();
  }
};

export const getGrades = async () => {
  try {
    const grades = await prisma.grade.findMany({});
    return grades;
  } catch (error) {
    return error;
  } finally {
    await prisma.$disconnect();
  }
};

export const deleteGrade = async (req: Request<{ id: string }>) => {
  try {
    const { id } = req.params;
    const parseId = parseInt(id);
    const grades = await prisma.grade.delete({
      where: {
        id: parseId,
      },
    });
    return grades;
  } catch (error) {
    return error;
  } finally {
    await prisma.$disconnect();
  }
};

export const putGrade = async (req: Request<{ id: string }>) => {
  try {
    const { id } = req.params;
    const parseId = parseInt(id);

    const grade = await prisma.grade.update({
      where: {
        id: parseId,
      },
      data: {
        nota: req.body.nota,
      },
    });
    return grade;
  } catch (error) {
    return error;
  } finally {
    await prisma.$disconnect();
  }
};
