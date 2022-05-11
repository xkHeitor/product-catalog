import { ProductModel } from './../../../data/models/Product';
import { ProductRepository } from '../../../data/contracts/repositories/ProductRepository';

export default class ProductRepositoryMemory implements ProductRepository {
    
    private products: ProductModel[];

    constructor() {
        this.products = [
            {
                id: 1, name: "iPhone 13", description: "iPhone Pro max 13 - red", code: "phoneApple13", price: 7500.50, idImage: 1, idCategory: 1,
            },
            {
                id: 2, name: "Teclado me", description: "iPhone Pro max 13 - red", code: "phoneApple13", price: 8200.88, idImage: 1, idCategory: 1,
            },
        ];
    }

    async getByCode(code: string): Promise<ProductModel|undefined> {
        const product: ProductModel|undefined = this.products.find(product => product.code == code);
        return product;
    };

    async delete(id: number): Promise<void> {
        this.products = this.products.filter(product => product.id !== id);
    }

    async save(product: ProductModel): Promise<void> {
        this.products.push(product);
    }
    
    async getProducts(): Promise<ProductModel[]> {
        return this.products;
    }

}