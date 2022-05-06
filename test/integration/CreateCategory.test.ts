import { ProductCategory } from './../../src/domain/entity/ProductCategory';
import CreateCategoryService from '../../src/data/services/category/CreateCategory';
import MemoryRepositoryFactory from '../../src/infra/factory/repository/Memory';
import { RepositoryFactory } from '../../src/data/factories/Repository';


describe("Create a category", () => {
    
    let repository: RepositoryFactory;
    
    beforeEach(async () => {
        repository = new MemoryRepositoryFactory();
        const categoryRepository = repository.createCategoryRepository();
        await categoryRepository.clear();
    });

    it("Should create a category with success", async () => {
        const createCatService = new CreateCategoryService(repository);
        const productCategory: ProductCategory = { name: "Tesla" };
        const response = await createCatService.execute(productCategory);
        expect(response).toEqual(expect.objectContaining({
            id: 3, name: "Tesla"
        }));
    });

});