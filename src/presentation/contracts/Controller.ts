import { HttpResponse } from './HttpResponse';
export interface Controller {

    handle: () => Promise<HttpResponse>

}