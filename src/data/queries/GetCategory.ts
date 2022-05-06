import { GetCategory } from './../contracts/queries/Category';
import { CategoryRepository } from './../contracts/repositories/CategoryRepository';
import { ProductCategoryModel } from '../models/ProductCategory';

export default class GetCategoryQuery implements GetCategory {
    
    constructor(private readonly categoryRepository: CategoryRepository) {}

    async handle(name: string): Promise<ProductCategoryModel|undefined> {
        return this.categoryRepository.getByName(name);
    }

}