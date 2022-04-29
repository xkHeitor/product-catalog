import { CategoryRepository } from '../contracts/CategoryRepository';
import { ImageRepository } from '../contracts/ImageRepository';
import { ProductRepository } from '../contracts/ProductRepository';

export interface RepositoryFactory {

    createProductRepository(): ProductRepository;
    createCategoryRepository(): CategoryRepository;
    createImageRepository(): ImageRepository;

}