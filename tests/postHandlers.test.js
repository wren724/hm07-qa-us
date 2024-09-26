// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
		"ids": [
			1,
			4,
			44
		]
}

test('Status Code 200', async () => {
   let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
	actualStatus = response.status; // Assign status to actualStatus
    const actualBody = await response.json(); // Also capture the response body for the next test
    expect(actualStatus).toBeDefined();
    expect(actualStatus).toBe(200);
  } catch (error) {
    console.error(error);
  }
});

test('Correct Data', async () => {
    let actualBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualBody = await response.json();
		console.log(actualBody);
	} catch (error) {
	console.error(error);
	}
	expect(actualBody).toEqual({
		"Everything You Need": {
        "Sprite Soft Drink": 9,
        "Gourmet Popcorn Kernels": 6
    },
    "Food City": {
        "Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": 3,
        "Sprite Soft Drink": 12
    },
    "Big World": {
        "Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": 1
    },
    "Fresh Food": {
        "Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": 3,
        "Sprite Soft Drink": 12
    }
});
});
