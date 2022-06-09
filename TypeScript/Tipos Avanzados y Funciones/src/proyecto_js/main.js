"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const product_service_1 = require("./products/product.service");
for (let index = 0; index < 50; index++) {
    (0, product_service_1.addProduct)({
        description: faker_1.faker.commerce.productDescription(),
        image: faker_1.faker.image.imageUrl(),
        color: faker_1.faker.color.human(),
        price: parseInt(faker_1.faker.commerce.price()),
        isNew: faker_1.faker.datatype.boolean(),
        tags: faker_1.faker.datatype.array(2).map((item) => item.toString()),
        title: faker_1.faker.commerce.productName(),
        stock: faker_1.faker.datatype.number({ min: 10, max: 100 }),
        categoryId: faker_1.faker.datatype.uuid(),
    });
}
// console.log(products);
const p = product_service_1.products[0];
(0, product_service_1.updateProduct)(p.id, {
    title: "algo nuevo",
    stock: 80,
});
(0, product_service_1.findProducts)({
    stock: 10,
    color: "red",
});
