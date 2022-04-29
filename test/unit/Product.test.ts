import { ProductImage } from './../../src/domain/entity/ProductImage';
import { ProductCategory } from "../../src/domain/entity/ProductCategory";
import Product from "../../src/domain/entity/Product";
import InvalidPrice from "../../src/domain/errors/InvalidPrice";

describe("Product catalog", () => {

    const productImg: ProductImage = { name: "Foto iPhone", url: "none" };
    const productCategory: ProductCategory = { name: "Phone" };

    it("should create a product", () => {
        const product = new Product("iPhone 13", "iPhone 13 Pro max - Red", "iphone13", 8450.35, productImg, productCategory);
        expect(product.code).toBe("iphone13");
    });

    it("should return a exception per invalid price", () => {
        expect(() => new Product("iPhone 13", "iPhone 13 Pro max - Red", "iphone13", -1, productImg, productCategory)).toThrow(InvalidPrice);
    });

});