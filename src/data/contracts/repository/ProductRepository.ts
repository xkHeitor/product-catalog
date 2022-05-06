import { ProductModel } from './../../models/Product';

export interface ProductRepository {

    getProducts: () => Promise<ProductModel[]>

}