import { ResponseOk,ResponseError } from './../../contracts/HttpResponse';
import { HttpResponse } from '../../contracts/HttpResponse';
import { Controller } from './../../contracts/Controller';
import { CreateProductService } from '../../../data/services/product/CreateProduct';

export default class PostProductController implements Controller {
    
    constructor(private readonly postProductService: CreateProductService){}

    async handle(body?: any): Promise<HttpResponse<any>> {
        try {
            const products = await this.postProductService.execute(body);
            return ResponseOk(products);
        } catch(error: any) {
            return ResponseError(error);
        }
    }

}