export interface IResponseData {
  status: number;
  data: any;
}

export default interface IController {
  // Método para operación HTTP GET
  get(req: Request): Promise<Response>;

  // Método para operación HTTP GET por ID
  getById(req: Request): Promise<Response>;

  // Método para operación HTTP POST
  post(req: Request): Promise<Response>;

  // Método para operación HTTP PUT
  put(req: Request): Promise<Response>;

  // Método para operación HTTP DELETE
  delete(req: Request): Promise<Response>;
}