import { RepositoryFactory } from './../../data/factories/Repository';
import { GetProductsService } from '../../data/services/product/GetProducts';
import { CreateProductService } from '../../data/services/product/CreateProduct';
import { Controller } from "../../presentation/contracts/Controller";
import GetProductsController from "../../presentation/controllers/products/Get";
import PostProductController from '../../presentation/controllers/products/Post';

export const makeGetProductController = (repositoryFactory: RepositoryFactory):
Controller => {
    const getProductsService: GetProductsService =  new GetProductsService(repositoryFactory);
    return new GetProductsController(getProductsService);
}

export const makePostProductController = (repositoryFactory: RepositoryFactory): 
Controller => {
    const createProductService: CreateProductService = new CreateProductService(repositoryFactory);
    return new PostProductController(createProductService);
} 