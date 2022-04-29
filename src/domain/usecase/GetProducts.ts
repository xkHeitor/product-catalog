import Product from "../entity/Product";

export interface GetProducts {

    execute: () => Promise<Product[]>

}