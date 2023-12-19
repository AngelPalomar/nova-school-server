import RoleController from "./controllers/RoleController"

const roleController = new RoleController();

const routeHandler = (req: Request) => (
  {
    'api/roles': {
      GET: () => roleController.get(req),
    }
  }
);

export default routeHandler;