const { openApp } = require('./utils/openApp');

describe('Example', () => {
	beforeAll(async () => {
		await openApp();
	});

	beforeEach(async () => {
		await device.reloadReactNative();
	});

	it('should have welcome screen', async () => {
		await expect(element(by.text('Open up App.tsx to start working on your app!'))).toBeVisible();
	});
});
