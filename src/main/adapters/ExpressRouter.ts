import { HttpResponse } from './../../presentation/contracts/HttpResponse';
import { Controller } from './../../presentation/contracts/Controller';
import { Request, Response } from 'express';

export const adaptRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpResponse: HttpResponse = await controller.handle();
        res.status(httpResponse.statusCode).json(httpResponse.data);
    }
}