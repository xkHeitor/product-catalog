import { HttpResponse } from './../../presentation/contracts/HttpResponse';
import { Controller } from './../../presentation/contracts/Controller';
import Http from "../../presentation/contracts/Http";
import express, { Request, Response } from "express";

export default class ExpressHttp implements Http {
    
    private app: any;

    constructor() {
        this.app = express();
    }

    async route(method: string, url: string, controller: Controller): Promise<any> {
        this.app[method.toLowerCase()](url, async (req: Request, res: Response) => {
            const httpResponse: HttpResponse = await controller.handle();
            res.status(httpResponse.statusCode).json(httpResponse.data);
        });
    }

    async listen(port: number): Promise<void> {
        await this.app.listen(port);
    }

}