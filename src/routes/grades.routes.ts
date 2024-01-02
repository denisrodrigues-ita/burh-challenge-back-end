import {
  createGradeController,
  // getGradeController,
  // deleteGradeController,
} from "../controllers/grades.controller";

export const gradesRouter = (app: any) => {
  app.post("/grades", createGradeController);
  // app.get("/grades", getGradeController);
  // app.delete("/grades/:id", deleteGradeController);
};
