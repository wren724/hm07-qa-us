// eslint-disable-next-line no-undef
const config = require('../config.js');

const requestBody = {
		"name": "My modified kit",
		"productsList": [
			{
				"id": 1,
				"quantity": 4
			},
			{
				"id": 5,
				"quantity": 2
			},
			{
				"id": 3,
				"quantity": 1
			},
			{
				"id": 4,
				"quantity": 1
			}
		]
	}

	test('Status Code 200', async () => {
		let response;
		try {
			response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestBody)
			});
	
			console.log("Status:", response.status);
	
		} catch (error) {
			console.error('Error:', error);
		}
	
		expect(response.status).toBeDefined();
		expect(response.status).toBe(200);

		});


	test('Kit Successfully Deleted, Expected Response Body', async () => {
		let response, data;
	
		try {
			response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestBody)
			});
			
			data = await response.json(); 
			console.log("Response body:", data);
	
		} catch (error) {
			console.error('Error:', error);
		}
		
		expect(data).toBeDefined();
		expect(data).toEqual(expect.objectContaining({
			"ok": true
		}));
	});