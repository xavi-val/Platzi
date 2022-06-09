"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.findProducts = exports.updateProduct = exports.addProduct = exports.products = void 0;
const faker_1 = require("@faker-js/faker");
exports.products = [];
const addProduct = (data) => {
    const newProduct = {
        ...data,
        id: faker_1.faker.datatype.uuid(),
        createdAt: faker_1.faker.date.recent(),
        updatedAt: faker_1.faker.date.recent(),
        category: {
            id: data.categoryId,
            createdAt: faker_1.faker.date.recent(),
            updatedAt: faker_1.faker.date.recent(),
            name: faker_1.faker.commerce.department(),
        }
    };
    exports.products.push(newProduct);
    return newProduct;
};
exports.addProduct = addProduct;
const updateProduct = (id, changes) => {
    const index = exports.products.findIndex(item => item.id === id);
    const prevData = exports.products[index];
    exports.products[index] = {
        ...prevData,
        ...changes
    };
    return exports.products[index];
};
exports.updateProduct = updateProduct;
const findProducts = (dto) => {
    return exports.products;
};
exports.findProducts = findProducts;
const deleteProduct = (id, changes) => {
};
exports.deleteProduct = deleteProduct;
