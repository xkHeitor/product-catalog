import { ProductCategoryModel } from './../../models/ProductCategory';

export interface GetCategory {

    handle: (name: string) => Promise<ProductCategoryModel|undefined>

}