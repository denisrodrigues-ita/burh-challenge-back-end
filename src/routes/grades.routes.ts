import {
  createGradeController,
  getGradeController,
  deleteGradeController,
  putGradeController
} from "../controllers/grades.controller";

export const gradesRouter = (app: any) => {
  app.post("/grades", createGradeController);
  app.get("/grades", getGradeController);
  app.put("/grades/:id", putGradeController);
  app.delete("/grades/:id", deleteGradeController);
};
