import { ProductCategory } from './../../src/domain/entity/ProductCategory';
import { CategoryRepository } from './../../src/data/contracts/repositories/CategoryRepository';
import { GetCategories, GetCategory } from './../../src/data/contracts/queries/Category';
import { ProductCategoryModel } from './../../src/data/models/ProductCategory';
import MemoryRepositoryFactory from '../../src/infra/factory/repository/Memory';
import { RepositoryFactory } from './../../src/data/factories/Repository';
import GetCategoriesQuery from '../../src/data/queries/GetCategories';
import GetCategoryQuery from '../../src/data/queries/GetCategory';
describe("Category Query", () => {

    let repositoryFactory: RepositoryFactory;
    let categoryRepository: CategoryRepository;
    const productCategory: ProductCategory = { name: "Phones" };

    beforeEach(() => {
        repositoryFactory = new MemoryRepositoryFactory();
        categoryRepository = repositoryFactory.createCategoryRepository();
    });

    it("Should get all categories", async () => {
        const query: GetCategories = new GetCategoriesQuery(categoryRepository);
        await categoryRepository.save(productCategory.name);
        const categories: ProductCategoryModel[] = await query.handle();
        const numberCategories = categories.length;
        expect(numberCategories > 0).toBeTruthy();
    });

    it("Should get a category by name", async () => {
        const query: GetCategory = new GetCategoryQuery(categoryRepository);
        await categoryRepository.save(productCategory.name);
        const category: ProductCategoryModel|undefined = await query.handle("Phones");
        expect(category?.name).toBe(productCategory.name);
    });

});