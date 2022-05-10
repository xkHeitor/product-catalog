import { RepositoryFactory } from './../../src/data/factories/Repository';
import CreateProductService from '../../src/data/services/product/CreateProduct';
import { ProductModel } from './../../src/data/models/Product';
import MemoryRepositoryFactory from '../../src/infra/factory/repository/Memory';
import InvalidData from '../../src/domain/errors/InvalidData';

describe("Create Product", () => {

    const repositoryFactory: RepositoryFactory = new MemoryRepositoryFactory();

    it("Should create a product with success", async () => {
        const productModel: ProductModel = {
            name: "IPhone 13 Pro Max", description: "Phone", price: 8500, 
            code: "phone001", idCategory: 1, idImage: 1
        };
        const service: CreateProductService = new CreateProductService(repositoryFactory);
        expect(service).toEqual(expect.objectContaining({ ...productModel })); 
    });

    it("Should dont create a product", async () => {
        const productModel: any = {
            name: "IPhone 13 Pro Max", description: "Phone", price: 8500, 
            code: "phone001", idCategory: null, idImage: 1
        };
        expect(() => new CreateProductService(repositoryFactory)).toThrow(InvalidData);
    });

});