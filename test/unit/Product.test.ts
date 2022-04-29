import Product from "../../src/domain/entity/Product";
import ProductImage from "../../src/domain/entity/ProductImage";
import InvalidPrice from "../../src/domain/errors/invalid-price";

describe("Product catalog", () => {

    const productImg = new ProductImage("Foto iPhone", "none");

    it("should create a product", () => {
        const product = new Product("iPhone 13", "iPhone 13 Pro max - Red", "iphone13", 8450.35, productImg, 1);
        expect(product.code).toBe("iphone13");
    });

    it("should return a exception per invalid price", () => {
        expect(() => new Product("iPhone 13", "iPhone 13 Pro max - Red", "iphone13", -1, productImg, 1)).toThrow(InvalidPrice);
    });

});