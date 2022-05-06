import { GetCategory } from './../../src/data/contracts/queries/GetCategory';
import { ProductCategoryModel } from './../../src/data/models/ProductCategory';
import { GetCategories } from './../../src/data/contracts/queries/GetCategories';
import MemoryRepositoryFactory from '../../src/infra/factory/repository/Memory';
import { RepositoryFactory } from './../../src/data/factories/Repository';
import GetCategoriesQuery from '../../src/data/queries/GetCategories';
import GetCategoryQuery from '../../src/data/queries/GetCategory';
describe("Category Query", () => {

    let repositoryFactory: RepositoryFactory;

    beforeEach(() => {
        repositoryFactory = new MemoryRepositoryFactory();
    });

    it("Should get all categories", async () => {
        const query: GetCategories = new GetCategoriesQuery(repositoryFactory);
        const categories: ProductCategoryModel[] = await query.handle();
        const numberCategories = categories.length;
        expect(numberCategories > 0).toBeTruthy();
    });

    it("Should get a category by name", async () => {
        const query: GetCategory = new GetCategoryQuery(repositoryFactory);
        const category: ProductCategoryModel|undefined = await query.handle("Phone");
        expect(category?.id).toBe(2);
    });

});