import { ProductCategoryModel } from './../models/ProductCategory';
export interface  CategoryRepository {

    getById(idCategory: number): Promise<ProductCategoryModel|undefined>

}