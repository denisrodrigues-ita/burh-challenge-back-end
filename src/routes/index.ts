import { gradesRouter } from "./grades.routes";

const routes = (app: any) => {
  gradesRouter(app);
};

export default routes;
