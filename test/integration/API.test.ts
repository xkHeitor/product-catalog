import axios from 'axios';

describe("API", () => {

    it("should testing the API and one route", async () => {

        const response = await axios({
            url: "http://localhost:5000/products",
            method: "GET" 
        });

        const products = response.data;
        expect(products).toHaveLength(2);

    });

});