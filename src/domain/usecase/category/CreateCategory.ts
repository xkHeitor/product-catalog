import { ProductCategoryModel } from '../../../data/models/ProductCategory';
import { ProductCategory } from '../../entity/ProductCategory';

export interface CreateCategory {

    execute: (category: ProductCategory) => Promise<ProductCategoryModel>

}