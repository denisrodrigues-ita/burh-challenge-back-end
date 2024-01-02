-- CreateEnum
CREATE TYPE "Bimestre" AS ENUM ('PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO');

-- CreateEnum
CREATE TYPE "Disciplina" AS ENUM ('BIOLOGIA', 'ARTES', 'GEOGRAFIA', 'SOCIOLOGIA');

-- CreateTable
CREATE TABLE "Grade" (
    "id" SERIAL NOT NULL,
    "bimestre" "Bimestre" NOT NULL,
    "disciplina" "Disciplina" NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Grade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Grade_bimestre_disciplina_key" ON "Grade"("bimestre", "disciplina");
