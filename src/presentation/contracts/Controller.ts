import { HttpResponse } from './HttpResponse';
export interface Controller {

    handle: (body?: any) => Promise<HttpResponse>

}