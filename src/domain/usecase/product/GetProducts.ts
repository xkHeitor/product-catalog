import { GetProductsModel } from './../../../data/models/GetProduct';

export interface GetProducts {

    execute: () => Promise<GetProductsModel[]>

}