import { ProductCategoryModel } from './../models/ProductCategory';
export interface CategoryRepository {

    getById(idCategory: number): Promise<ProductCategoryModel|undefined>
    getByName(name: string): Promise<ProductCategoryModel|undefined>
    save(name: string): Promise<void>
    clear(): Promise<void>

}