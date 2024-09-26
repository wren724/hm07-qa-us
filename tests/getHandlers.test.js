// eslint-disable-next-line no-undef
const config = require('../config');

test('Status Code 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits?cardId=1`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBeDefined();
	expect(actualStatus).toBe(200);
		});

test('Kits Received', async () => {
	const expectedKits = [
		{
			"id": 1,
			"name": "For picnic",
			"productsList": [
				{
					"id": 1,
					"name": "Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free",
					"price": 2,
					"weight": 473,
					"units": "ml",
					"quantity": 1
				},
				{
					"id": 2,
					"name": "Mountain Dew Soft Drink",
					"price": 1,
					"weight": 1,
					"units": "l",
					"quantity": 1
				},
				{
					"id": 3,
					"name": "Pepsi Soft Drink",
					"price": 2,
					"weight": 1,
					"units": "l",
					"quantity": 1
				},
				{
					"id": 4,
					"name": "Sprite Soft Drink",
					"price": 1,
					"weight": 900,
					"units": "ml",
					"quantity": 1
				},
				{
					"id": 5,
					"name": "Fruit Power Juice - Litchi",
					"price": 5,
					"weight": 900,
					"units": "ml",
					"quantity": 1
				},
				{
					"id": 6,
					"name": "Baguette",
					"price": 1,
					"weight": 160,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 7,
					"name": "Potato Chips - Classic Salted",
					"price": 2,
					"weight": 150,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 8,
					"name": "Potato Chips - Paprika",
					"price": 3,
					"weight": 150,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 9,
					"name": "Potato Chips - Chili",
					"price": 2,
					"weight": 100,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 10,
					"name": "Pita",
					"price": 1,
					"weight": 300,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 11,
					"name": "Multigrain Bread",
					"price": 2,
					"weight": 400,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 12,
					"name": "Garlic Bread",
					"price": 1,
					"weight": 225,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 13,
					"name": "Mini Ciabatta",
					"price": 1,
					"weight": 107,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 14,
					"name": "Brioche",
					"price": 1,
					"weight": 79,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 15,
					"name": "Vienna Sausages",
					"price": 3,
					"weight": 350,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 16,
					"name": "Chicken Sausages",
					"price": 3,
					"weight": 200,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 17,
					"name": "Chorizo",
					"price": 4,
					"weight": 420,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 18,
					"name": "Salchichon",
					"price": 3,
					"weight": 464,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 19,
					"name": "Salami",
					"price": 1,
					"weight": 190,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 20,
					"name": "Bacon",
					"price": 4,
					"weight": 500,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 21,
					"name": "Pastrami",
					"price": 2,
					"weight": 200,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 22,
					"name": "Pepperoni",
					"price": 5,
					"weight": 500,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 23,
					"name": "Anti-Bacterial Hand Sanitizer",
					"price": 2,
					"weight": 50,
					"units": "ml",
					"quantity": 1
				},
				{
					"id": 24,
					"name": "Paper Napkin - Large",
					"price": 1,
					"weight": 60,
					"units": "pcs",
					"quantity": 1
				},
				{
					"id": 25,
					"name": "Anti Bacterial Disinfectant Sanitising Wipes - Alcohol Free",
					"price": 3,
					"weight": 48,
					"units": "pcs",
					"quantity": 1
				},
				{
					"id": 26,
					"name": "SMART Mosquito Repellent",
					"price": 5,
					"weight": 100,
					"units": "ml",
					"quantity": 1
				},
				{
					"id": 27,
					"name": "Green Apple",
					"price": 2,
					"weight": 500,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 28,
					"name": "Orange",
					"price": 2,
					"weight": 500,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 29,
					"name": "Cherry",
					"price": 4,
					"weight": 500,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 30,
					"name": "Raspberry",
					"price": 4,
					"weight": 250,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 31,
					"name": "Blackberry",
					"price": 2,
					"weight": 200,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 32,
					"name": "Lime",
					"price": 1,
					"weight": 1,
					"units": "pcs",
					"quantity": 1
				},
				{
					"id": 33,
					"name": "Red Grapes",
					"price": 4,
					"weight": 500,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 34,
					"name": "Green Grapes",
					"price": 3,
					"weight": 500,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 35,
					"name": "Banana",
					"price": 2,
					"weight": 1000,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 36,
					"name": "Pear",
					"price": 3,
					"weight": 650,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 37,
					"name": "Blueberry",
					"price": 3,
					"weight": 125,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 38,
					"name": "Pineapple",
					"price": 6,
					"weight": 1,
					"units": "pcs",
					"quantity": 1
				},
				{
					"id": 39,
					"name": "Melon",
					"price": 2,
					"weight": 800,
					"units": "g",
					"quantity": 1
				}
			],
			"productsCount": 39
		},
		{
			"id": 2,
			"name": "For movies and series",
			"productsList": [
				{
					"id": 7,
					"name": "Potato Chips - Classic Salted",
					"price": 2,
					"weight": 150,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 8,
					"name": "Potato Chips - Paprika",
					"price": 3,
					"weight": 150,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 9,
					"name": "Potato Chips - Chili",
					"price": 2,
					"weight": 100,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 40,
					"name": "Nacho Chips - Classic Salt",
					"price": 2,
					"weight": 150,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 41,
					"name": "Nacho Chips - Cheese",
					"price": 2,
					"weight": 60,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 42,
					"name": "Nacho Chips - Onion",
					"price": 1,
					"weight": 150,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 43,
					"name": "Classic Hummus Dip & Spread",
					"price": 4,
					"weight": 250,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 44,
					"name": "Gourmet Popcorn Kernels",
					"price": 3,
					"weight": 60,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 45,
					"name": "Caramel Popcorn",
					"price": 1,
					"weight": 45,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 46,
					"name": "Fruit Beer Non-Alcoholic",
					"price": 1,
					"weight": 450,
					"units": "ml",
					"quantity": 1
				},
				{
					"id": 47,
					"name": "Stella Artois Beer Non-Alcoholic",
					"price": 2,
					"weight": 450,
					"units": "ml",
					"quantity": 1
				},
				{
					"id": 2,
					"name": "Mountain Dew Soft Drink",
					"price": 1,
					"weight": 1,
					"units": "l",
					"quantity": 1
				},
				{
					"id": 3,
					"name": "Pepsi Soft Drink",
					"price": 2,
					"weight": 1,
					"units": "l",
					"quantity": 1
				},
				{
					"id": 4,
					"name": "Sprite Soft Drink",
					"price": 1,
					"weight": 900,
					"units": "ml",
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
					"id": 49,
					"name": "100% Belgian Dark Chocolate - Raisins",
					"price": 2,
					"weight": 97,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 50,
					"name": "100% Belgian Milk Chocolate - Sea Salt",
					"price": 1,
					"weight": 85,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 51,
					"name": "64% Mild Dark Chocolate",
					"price": 3,
					"weight": 160,
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
					"id": 53,
					"name": "Pure Chocolate - Creamy White",
					"price": 2,
					"weight": 100,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 54,
					"name": "Dairy Rich Chocolate Bar - Fruit & Nut",
					"price": 2,
					"weight": 80,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 55,
					"name": "Peanut Butter Nutty Cookies",
					"price": 3,
					"weight": 171,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 56,
					"name": "Cookies - Orange Splash",
					"price": 2,
					"weight": 50,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 57,
					"name": "Choco Nut Cookies",
					"price": 2,
					"weight": 228,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 58,
					"name": "Milk Cookies",
					"price": 2,
					"weight": 168,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 59,
					"name": "Sandwich Biscuits",
					"price": 1,
					"weight": 100,
					"units": "g",
					"quantity": 1
				},
				{
					"id": 60,
					"name": "Chocobakes Choc Filled Cookies",
					"price": 3,
					"weight": 250,
					"units": "g",
					"quantity": 1
				}
			],
			"productsCount": 27
		},
		{
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
		}
	];
	
	let actualBody = [];
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits?cardId=1`);
		
		if (response.ok) {
			actualBody = await response.json();
		} else {
			console.error(`Request failed with status ${response.status}`);
		}
			console.log(actualBody);
	} catch (error) {
		console.error('Error during fetch', error);
	}
const receivedKit = actualBody.find(kit => kit.id === 1);
expect(receivedKit).toBeDefined();
expect(actualBody).toEqual(expectedKits);
});