import { ProductModel } from './../../src/data/models/Product';
import { ProductRepository } from './../../src/data/contracts/repositories/ProductRepository';
import { RepositoryFactory } from './../../src/data/factories/Repository';
import MemoryRepositoryFactory from '../../src/infra/factory/repository/Memory';
import DeleteProductService from '../../src/data/services/product/DeleteProduct';
import NotFound from '../../src/domain/errors/NotFound';

describe("Delete Product", () => {

    const repositoryFactory: RepositoryFactory = new MemoryRepositoryFactory();
    const productRepository: ProductRepository = repositoryFactory.createProductRepository();
    const productModel: ProductModel = {
        id: 3, name: "IPhone 13 Pro Max", description: "Phone", price: 8500, 
        code: "phone001", idCategory: 1, idImage: 1
    };

    it("Should delete a product with success", async () => {
        await productRepository.save(productModel);
        const service: DeleteProductService = new DeleteProductService(productRepository); 
        await service.execute(productModel.code);
        const deletedProduct: ProductModel|undefined = await productRepository.getByCode(productModel.code);
        expect(deletedProduct).toBe(undefined);
    });

    it("Should delete a product with success", async () => {
        const service: DeleteProductService = new DeleteProductService(productRepository); 
        expect(async () => await service.execute(productModel.code)).rejects.toThrow(NotFound);
    });

});