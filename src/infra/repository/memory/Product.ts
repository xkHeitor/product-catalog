import { ProductModel } from './../../../data/models/Product';
import { ProductRepository } from '../../../data/contracts/repositories/ProductRepository';
import Product from '../../../domain/entity/Product';

export default class ProductRepositoryMemory implements ProductRepository {
    
    private products: ProductModel[];

    constructor() {
        this.products = [
            {
                name: "iPhone 13", description: "iPhone Pro max 13 - red", code: "phoneApple13", price: 7500.50, idImage: 1, idCategory: 1,
            },
            {
                name: "Teclado me", description: "iPhone Pro max 13 - red", code: "phoneApple13", price: 8200.88, idImage: 1, idCategory: 1,
            },
        ];
    }

    async save(product: ProductModel): Promise<void> {
        this.products.push(product);
    }
    
    async getProducts(): Promise<ProductModel[]> {
        return this.products;
    }

}