import { faker } from "@faker-js/faker";
import { Product } from "./products/product.model";
import { addProduct, products, updateProduct, findProducts } from "./products/product.service";

for (let index = 0; index < 50; index++) {
	addProduct({
		description: faker.commerce.productDescription(),
		image: faker.image.imageUrl(),
		color: faker.color.human(),
		price: parseInt(faker.commerce.price()),
		isNew: faker.datatype.boolean(),
		tags: faker.datatype.array(2).map((item) => item.toString()),
		title: faker.commerce.productName(),
		stock: faker.datatype.number({ min: 10, max: 100 }),
		categoryId: faker.datatype.uuid(),
	});
}

// console.log(products);

const p = products[0];
updateProduct(p.id, {
		title: "algo nuevo",
		stock: 80,

});

findProducts({
		stock: 10,
		color:"red",
})

