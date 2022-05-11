import { ProductModel } from './../../models/Product';
import { ProductRepository } from './../../contracts/repositories/ProductRepository';
import { DeleteProduct } from './../../../domain/usecase/product/DeleteProduct';
import NotFound from '../../../domain/errors/NotFound';

export class DeleteProductService implements DeleteProduct {
    
    constructor(private readonly productRepository: ProductRepository){}

    async execute(code: string): Promise<void> {
        const productData: ProductModel|undefined = await this.productRepository.getByCode(code);
        if(!productData) throw new NotFound();
        await this.productRepository.delete(productData.id);
    }

}