import { RepositoryFactory } from './../../data/factory/Repository';
import { GetProductsService } from './../../data/services/GetProducts';
import { ProductViewModel } from './../view-models/Product';
import { HttpResponse, ResponseError, ResponseOk } from '../contracts/HttpResponse';
import { Controller } from './../contracts/Controller';

export default class GetProductsController implements Controller {
    
    private getProductsService: GetProductsService;

    constructor(readonly repositoryFactory: RepositoryFactory) {
        this.getProductsService = new GetProductsService(repositoryFactory);
    }

    async handle(): Promise<HttpResponse<ProductViewModel[]>> {
        try {
            const products = await this.getProductsService.execute();
            return ResponseOk(products);
        } catch(error: any) {
            return ResponseError(error);
        }
    }

}