import { ProductModel } from '../../models/Product';

export interface ProductRepository {

    getByCode: (code: string) => Promise<ProductModel|undefined> 
    getProducts: () => Promise<ProductModel[]>
    save: (product: ProductModel) => Promise<void>
    delete: (id: number) => Promise<void>

}