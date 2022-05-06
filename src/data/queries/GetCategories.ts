import { RepositoryFactory } from './../factories/Repository';
import { CategoryRepository } from './../contracts/repositories/CategoryRepository';
import { ProductCategoryModel } from '../models/ProductCategory';
import { GetCategories } from './../contracts/queries/GetCategories';


export default class GetCategoriesQuery implements GetCategories {
    
    private categoryRepository: CategoryRepository;

    constructor(readonly repositoryFactory: RepositoryFactory) {
        this.categoryRepository = repositoryFactory.createCategoryRepository();
    }

    async handle(): Promise<ProductCategoryModel[]> {
        return this.categoryRepository.getAll();
    }
    

}