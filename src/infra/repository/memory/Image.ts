import { ImageRepository } from "../../../data/contracts/ImageRepository";
import { ProductImageModel } from "../../../data/models/ProductImage";

export default class ImageMemoryRepository implements ImageRepository {
    
    private images: ProductImageModel[];

    constructor() {
        this.images = [
            { id: 1, name: "iPhone no img", url: "none" },
            { id: 2, name: "iPhone img", url: "https://www.apple.com/v/iphone/home/be/images/overview/hero/iphone_13_pro_hero__gqclakbze4a6_large.png" },
        ];
    }

    async getById(idImage: number): Promise<ProductImageModel|undefined> {
        return this.images.find(img => img.id === idImage);
    }

    async getByURl(url: string): Promise<ProductImageModel | undefined> {
        return this.images.find(img => img.url === url);
    }

    async save(name: string, url: string): Promise<void> {
        const nextId = this.images.length +1;
        const productImage = { name, url, id: nextId };
        this.images.push(productImage);
    }

    async clear(): Promise<void> {
        this.images = [];
    }

}