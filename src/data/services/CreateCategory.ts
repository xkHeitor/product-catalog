import { RepositoryFactory } from './../factory/Repository';
import { ProductCategory } from "../../domain/entity/ProductCategory";
import { CreateCategory } from "../../domain/usecase/CreateCategory";
import { ProductCategoryModel } from "../models/ProductCategory";
import { CategoryRepository } from '../contracts/CategoryRepository';
import ExistingCategory from '../../domain/errors/ExistingCategory';

export default class CreateCategoryService implements CreateCategory {
    
    private categoryRepository: CategoryRepository;

    constructor(repositoryFactory: RepositoryFactory) {
        this.categoryRepository = repositoryFactory.createCategoryRepository();
    }

    async execute(category: ProductCategory): Promise<ProductCategoryModel> {
        let productCategory = await this.categoryRepository.getByName(category.name);
        if(productCategory) throw new ExistingCategory();
        
        await this.categoryRepository.save(category.name);
        productCategory = await this.categoryRepository.getByName(category.name);
        if(!productCategory) throw "Could not save this category";
        return productCategory;
    }

}