// eslint-disable-next-line no-undef
const config = require('../config');

test('Status Code 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBeDefined();
	expect(actualStatus).toBe(200);
});

test('Taste of Paris Set Received', async () => {
	let actualBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/search?name=Tastes%20of%20Paris`);
		actualBody = await response.json();
		console.log(actualBody);
	} catch (error) {
		console.error(error);
	}
	expect(actualBody).toEqual({
			"id": 3,
			"name": "Tastes of Paris",
			"productsList": [
				{
					"id": 61,
					"name": "Baguette French Recipe",
					"price": 3,
					"weight": 350,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 62,
					"name": "Cheese Croissant",
					"price": 3,
					"weight": 200,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 63,
					"name": "French Almond Croissant",
					"price": 4,
					"weight": 420,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 64,
					"name": "Chocolate Croissant",
					"price": 2,
					"weight": 464,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 65,
					"name": "Smoked Salmon Croissant",
					"price": 2,
					"weight": 190,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 66,
					"name": "Belgian Chocolate Cake Mix",
					"price": 4,
					"weight": 500,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 67,
					"name": "Cheese Spread - Cream Cheese",
					"price": 2,
					"weight": 200,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 68,
					"name": "Cheese Slices",
					"price": 5,
					"weight": 500,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 69,
					"name": "Cheese Spread - Roasted Garlic",
					"price": 1,
					"weight": 1,
					"units": "pcs",
					"quantity": 1
				},
				{
					"id": 70,
					"name": "Spicy Cheese Straw",
					"price": 1,
					"weight": 130,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 71,
					"name": "Processed Cheese Slices",
					"price": 6,
					"weight": 200,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 72,
					"name": "Processed Cheese Cubes",
					"price": 2,
					"weight": 180,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 73,
					"name": "Soyabean Tempeh Cubes",
					"price": 1,
					"weight": 250,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 52,
					"name": "Crunchy Dark Chocolate Peanut Butter",
					"price": 4,
					"weight": 100,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 48,
					"name": "100% Belgian Dark Chocolate - with Apricot",
					"price": 2,
					"weight": 100,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 74,
					"name": "Center Filled Dark Chocolate Cookies",
					"price": 2,
					"weight": 100,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 75,
					"name": "Enrobed Cinnamon Milk Chocolate Dipped Cookies",
					"price": 3,
					"weight": 100,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 76,
					"name": "Oreo & Crème Frozen Dessert",
					"price": 5,
					"weight": 300,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 77,
					"name": "Chocorich Eclairs Chocolate - Assorted",
					"price": 6,
					"weight": 200,
					"units": "g",
					"quantity": 1
				}
			],
			"productsCount": 19
		});
});