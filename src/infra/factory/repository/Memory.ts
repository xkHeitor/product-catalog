import { CategoryRepository } from '../../../data/contracts/CategoryRepository';
import { ImageRepository } from '../../../data/contracts/ImageRepository';
import { ProductRepository } from '../../../data/contracts/ProductRepository';
import { RepositoryFactory } from './../../../data/factory/Repository';
import CategoryMemoryRepository from '../../repository/memory/Category';
import ImageMemoryRepository from '../../repository/memory/Image';
import ProductRepositoryMemory from '../../repository/memory/Product';

export default class  MemoryRepositoryFactory implements RepositoryFactory {
    
    createProductRepository(): ProductRepository {
        return new ProductRepositoryMemory();
    }
    createCategoryRepository(): CategoryRepository {
        return new CategoryMemoryRepository();
    }
    createImageRepository(): ImageRepository {
        return new ImageMemoryRepository();
    }
}