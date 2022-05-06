import { RepositoryFactory } from './../factories/Repository';
import { CategoryRepository } from './../contracts/repositories/CategoryRepository';
import { ProductCategoryModel } from '../models/ProductCategory';
import { GetCategory } from './../contracts/queries/GetCategory';

export default class GetCategoryQuery implements GetCategory {
    
    private categoryRepository: CategoryRepository;

    constructor(readonly repositoryFactory: RepositoryFactory) {
        this.categoryRepository = repositoryFactory.createCategoryRepository();
    }

    async handle(name: string): Promise<ProductCategoryModel|undefined> {
        return this.categoryRepository.getByName(name);
    }

}