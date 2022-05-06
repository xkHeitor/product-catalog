import { ProductModel } from './../../../data/models/Product';

export interface GetProducts {

    execute: () => Promise<ProductModel[]>

}