import Product from '../../../domain/entity/Product';
import { ProductModel } from '../../models/Product';

export interface ProductRepository {

    getProducts: () => Promise<ProductModel[]>
    save: (product: ProductModel) => Promise<void>

}