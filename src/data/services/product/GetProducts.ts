import { ProductImageModel } from '../../models/ProductImage';
import { ProductCategoryModel } from '../../models/ProductCategory';
import { ProductModel } from '../../models/Product';
import { GetProducts } from '../../../domain/usecase/product/GetProducts';
import { ProductImage } from '../../../domain/entity/ProductImage';
import { ProductCategory } from '../../../domain/entity/ProductCategory';
import { ImageRepository } from '../../contracts/repository/ImageRepository';
import { ProductRepository } from '../../contracts/repository/ProductRepository';
import { RepositoryFactory } from '../../factory/Repository';
import { CategoryRepository } from '../../contracts/repository/CategoryRepository';
import Product from "../../../domain/entity/Product";

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