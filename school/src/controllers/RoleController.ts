import { Role } from '../models/RoleSchema';
import IController from "../interfaces/IController";

export default class RoleController implements IController {
  constructor() { }

  private buildResponse(status: number, data: any): string {
    return JSON.stringify({ status, data });
  }

  async get(req: Request): Promise<Response> {
    try {
      const roles = await Role.find();

      if (!roles) {
        return new Response(this.buildResponse(200, []));
      } else {
        return new Response(this.buildResponse(200, roles));
      }
    } catch (error) {
      return new Response(this.buildResponse(500, { error: 'Internal Server Error' }));
    }
  }

  async getById(req: Request): Promise<Response> {
    const id = new URL(req.url).searchParams.get('id');

    try {
      const role = await Role.findById(id);

      if (!role) {
        return new Response(this.buildResponse(404, { message: 'Not found' }));
      } else {
        return new Response(this.buildResponse(200, role));
      }
    } catch (error) {
      return new Response(this.buildResponse(500, { error: 'Internal Server Error' }));
    }
  }

  post(req: Request): Promise<Response> {
    throw new Error("Method not implemented.");
  }

  put(req: Request): Promise<Response> {
    throw new Error("Method not implemented.");
  }

  delete(req: Request): Promise<Response> {
    throw new Error("Method not implemented.");
  }

}