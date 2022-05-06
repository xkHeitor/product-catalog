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

    async execute(): Promise<Product[]> {
        const dataProducts: ProductModel[] = await this.productRepository.getProducts();
        const products: Product[] = [];

        for(const item of dataProducts) {
            const category:ProductCategoryModel|undefined = await this.categoryRepository.getById(item.idCategory);
            const productCategory: ProductCategory = { name: category?.name || "Empty" };

            const image: ProductImageModel|undefined = await this.imageRepository.getById(item.idImage);
            const productImage: ProductImage = { name: image?.name || "img", url: image?.url || "none" };

            const product: Product = new Product(item.name, item.description, item.code, item.price, productImage, productCategory);
            products.push(product);
        }

        return products;
    }

}