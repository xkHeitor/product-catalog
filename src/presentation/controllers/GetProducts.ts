import { GetProductsService } from '../../data/services/product/GetProducts';
import { ProductViewModel } from './../view-models/Product';
import { HttpResponse, ResponseError, ResponseOk } from '../contracts/HttpResponse';
import { Controller } from './../contracts/Controller';

export default class GetProductsController implements Controller {
    
    constructor(private readonly getProductsService: GetProductsService) {}

    async handle(): Promise<HttpResponse<ProductViewModel[]>> {
        try {
            const products = await this.getProductsService.execute();
            return ResponseOk(products);
        } catch(error: any) {
            return ResponseError(error);
        }
    }

}