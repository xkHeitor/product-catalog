import InvalidPrice from "../errors/invalid-price";
import ProductImage from "./ProductImage";

export default class Product {

    constructor(readonly name: string, readonly description: string, readonly code: string, readonly price: number, readonly image: ProductImage, readonly idCategory: number) {
        if(price < 0) throw new InvalidPrice();
    }

}