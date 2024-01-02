import { prisma } from "../services/prisma";

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

// export const getGrades = async () => {
//   try {
//     const engaged = await prisma.engaged.findMany({});
//     return engaged;
//   } catch (error) {
//     throw new Error(error);
//   } finally {
//     await prisma.$disconnect();
//   }
// };

// export const deleteGrade = async (name) => {
//   try {
//     const engaged = await prisma.$queryRawUnsafe(
//       'SELECT * FROM "Engaged" WHERE (groom_name ILIKE $1 OR bride_name ILIKE $1)',
//       `%${name}%`
//     );
//     return engaged;
//   } catch (error) {
//     throw new Error(error);
//   } finally {
//     await prisma.$disconnect();
//   }
// };
