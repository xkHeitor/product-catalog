import { RepositoryFactory } from '../../src/data/factories/Repository';
import { ProductModel } from '../../src/data/models/Product';
import { CreateProductService } from '../../src/data/services/product/CreateProduct';
import MemoryRepositoryFactory from '../../src/infra/factory/repository/Memory';
import InvalidData from '../../src/domain/errors/InvalidData';
import Product from '../../src/domain/entity/Product';

describe("Create Product", () => {

    const repositoryFactory: RepositoryFactory = new MemoryRepositoryFactory();

    it("Should create a product with success", async () => {
        const productModel: ProductModel = {
            id: 3, name: "IPhone 13 Pro Max", description: "Phone", price: 8500, 
            code: "phone001", idCategory: 1, idImage: 1
        };
        const service: CreateProductService = new CreateProductService(repositoryFactory);
        const response: Product = await service.execute(productModel);
        
        const { id, idCategory, idImage, ...productResponse }: Exclude<ProductModel, 'id'|'idImage'|'idCategory'>  = productModel;
        expect(response).toMatchObject(productResponse); 
    });

    it("Should dont create a product", async () => {
        const productModel: ProductModel = {
            id: 3, name: "IPhone 13 Pro Max", description: "Phone", price: 8500, 
            code: "phone001", idCategory: 5, idImage: 1
        };
        const service: CreateProductService = new CreateProductService(repositoryFactory)
        expect(async () => await service.execute(productModel)).rejects.toThrow(InvalidData);
    });

});