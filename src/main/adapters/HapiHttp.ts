import { HttpResponse } from './../../presentation/contracts/HttpResponse';
import { Controller } from './../../presentation/contracts/Controller';
import Http from "../../presentation/contracts/Http";
import Hapi from '@hapi/hapi';

export default class HapiHttp implements Http {
    
    private server: Hapi.Server;

    constructor() {
        this.server = Hapi.server({});
    }

    async route(method: string, url: string, controller: Controller): Promise<any> {
        this.server.route({
            method, path: url,
            async handler(request: any, h: any) {
                const httpResponse: HttpResponse = await controller.handle();
                return httpResponse;
            }
        });
    }

    async listen(port: number): Promise<void> {
        this.server.settings.port = port;
        await this.server.start();
    }

}