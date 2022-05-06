import { ProductImageModel } from '../../models/ProductImage';
import { ProductCategoryModel } from '../../models/ProductCategory';
import { ProductModel } from '../../models/Product';
import { GetProducts } from '../../../domain/usecase/product/GetProducts';
import { ImageRepository } from '../../contracts/repositories/ImageRepository';
import { ProductRepository } from '../../contracts/repositories/ProductRepository';
import { RepositoryFactory } from '../../factories/Repository';
import { CategoryRepository } from '../../contracts/repositories/CategoryRepository';

export class GetProductsService implements GetProducts {
    
    private productRepository: ProductRepository;
    private categoryRepository: CategoryRepository;
    private imageRepository: ImageRepository;

    constructor(readonly repositoryFactory: RepositoryFactory) {
        this.productRepository = repositoryFactory.createProductRepository();
        this.categoryRepository = repositoryFactory.createCategoryRepository();
        this.imageRepository = repositoryFactory.createImageRepository();
    }

    async execute(): Promise<ProductModel[]> {
        const dataProducts: ProductModel[] = await this.productRepository.getProducts();
        const products: ProductModel[] = [];

        for(const item of dataProducts) {
            const category:ProductCategoryModel|undefined = await this.categoryRepository.getById(item.idCategory);
            const image: ProductImageModel|undefined = await this.imageRepository.getById(item.idImage);
            
            if(!category?.id || !image?.id) continue;
            const product: ProductModel = { 
                name: item.name, description: item.description, code: item.code, 
                price: item.price, idImage: image?.id , idCategory: category?.id
            };
            products.push(product);
        }

        return products;
    }

}