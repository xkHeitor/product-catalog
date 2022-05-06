import { GetCategories } from './../contracts/queries/Category';
import { CategoryRepository } from './../contracts/repositories/CategoryRepository';
import { ProductCategoryModel } from '../models/ProductCategory';


export default class GetCategoriesQuery implements GetCategories {
    
    constructor(private readonly categoryRepository: CategoryRepository) {}

    async handle(): Promise<ProductCategoryModel[]> {
        return this.categoryRepository.getAll();
    }
    

}