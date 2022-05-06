import { ProductImageModel } from './../../models/ProductImage';

export interface GetImage {
    handle: (url: string) => Promise<ProductImageModel|undefined>
}

export interface GetImages {
    handle: () => Promise<ProductImageModel[]>
}