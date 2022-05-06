import { RepositoryFactory } from '../../data/factories/Repository';
import { GetProductsService } from '../../data/services/product/GetProducts';
import { Controller } from "../../presentation/contracts/Controller";
import GetProductsController from "../../presentation/controllers/GetProducts";
import MemoryRepositoryFactory from '../../infra/factory/repository/Memory';

export const makeGetProductController = (): Controller => {
    const repositoryFactory: RepositoryFactory = new MemoryRepositoryFactory();
    const getProductsService =  new GetProductsService(repositoryFactory);
    return new GetProductsController(getProductsService);
}