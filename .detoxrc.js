/** @type {Detox.DetoxConfig} */
module.exports = {
	logger: {
		level: process.env.CI ? 'debug' : undefined
	},
	testRunner: {
		$0: 'jest',
		args: {
			config: 'e2e/jest.config.js',
			_: ['e2e']
		}
	},
	artifacts: {
		plugins: {
			log: process.env.CI ? 'failing' : undefined,
			screenshot: 'failing'
		}
	},
	apps: {
		'ios.debug': {
			type: 'ios.app',
			binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/expotypescriptstorybook.app',
			build: 'xcodebuild -workspace ios/expotypescriptstorybook.xcworkspace -scheme expotypescriptstorybook -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build'
		},
		'ios.release': {
			type: 'ios.app',
			binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/expotypescriptstorybook.app',
			build: 'xcodebuild -workspace ios/expotypescriptstorybook.xcworkspace -scheme expotypescriptstorybook -configuration Release -sdk iphonesimulator -derivedDataPath ios/build'
		},
		'android.debug': {
			type: 'android.apk',
			binaryPath: 'bin/myapp-debug.apk',
			build: 'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
			reversePorts: [8081]
		},
		'android.release': {
			type: 'android.apk',
			binaryPath: 'bin/myapp.apk',
			build: 'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release'
		}
	},
	devices: {
		simulator: {
			type: 'ios.simulator',
			device: {
				type: 'iPhone 14 Pro Max'
			}
		},
		emulator: {
			type: 'android.emulator',
			device: {
				avdName: 'Pixel_3a_API_30_x86'
			}
		}
	},
	configurations: {
		'ios.sim.debug': {
			device: 'simulator',
			app: 'ios.debug'
		},
		'ios.sim.release': {
			device: 'simulator',
			app: 'ios.release'
		},
		'android.emu.debug': {
			device: 'emulator',
			app: 'android.debug'
		},
		'android.emu.release': {
			device: 'emulator',
			app: 'android.release'
		}
	}
};
