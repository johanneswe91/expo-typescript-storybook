const { openApp } = require('./utils/openApp');

describe('Example', () => {
	beforeAll(async () => {
		await openApp();
	});

	beforeEach(async () => {
		await device.reloadReactNative();
	});

	it('should have welcome screen', async () => {
		// Click button and go back on each tab
		await element(by.id('button_forward')).tap();
		await element(by.id('button_back')).tap();

		await element(by.id('tab2')).tap();
		await element(by.id('button_forward')).tap();
		await element(by.id('button_back')).tap();

		await element(by.id('tab3')).tap();
		await element(by.id('button_forward')).tap();
		await element(by.id('button_back')).tap();

		await element(by.id('tab4')).tap();
		await element(by.id('button_forward')).tap();
		await element(by.id('button_back')).tap();

		await element(by.id('tab1')).tap();
	});
});
