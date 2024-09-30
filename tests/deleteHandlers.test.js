// eslint-disable-next-line no-undef
const config = require('../config');

test('Status Code 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualStatus = await response.status;
		console.log(response.status);
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
	});

test('Kit Successfully Deleted', async () => {
    let data;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		data = await response.json();
		console.log(data);
	} catch (error) {
		console.error(error);
	}
	
	expect(data).toEqual(expect.objectContaining({
		"ok": true
	}));
});
