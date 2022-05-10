import Product from '../../entity/Product';
import { ProductModel } from './../../../data/models/Product';

export interface CreateProduct {

    execute: (product: ProductModel) => Promise<Product>

}