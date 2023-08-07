# Expo Typescript starter project with Storybook support

## Create a new project from this template

expo init APP_NAME --template @johanneswe91/expo-typescript-storybook

## App

Run the app using on of the following commands

- yarn start
- yarn web
- yarn android
- yarn ios

## Storybook

### Running storybook on device

Run storybook using on of the following commands

- yarn storybook
- yarn storybook:web
- yarn storybook:ios
- yarn storybook:android

## Customizing Fonts

### Adding Fonts

- Add your fonts in .ttf format in assets/fonts
- Open src/MyApp.tsx
    - Add references to your fonts in useFonts

## Tests

### Setup

Install Detox on your machine with the following commands
```
brew tap wix/brew
brew install --HEAD applesimutils
npm install -g detox-cli
```

### Writing Tests

### Running Tests

- Install eas-cli globally. npm i -g eas-cli
- Platform specific setup
    - iOS
        - brew install fastlane
    - Android
- Login to your Expo.io account using
    - eas login
- Start your local Development Server
    - yarn start
- Create a iOS or Android Development build using either
    - iOS
        - yarn detox:ios:debug:build
        - yarn detox:ios:release:build
    - Android
        - yarn detox:android:debug:build
        - yarn detox:android:release:build
    - Note: This step will take some time
- Run your tests
    - iOS
        - yarn detox:ios:debug:test
        - yarn detox:ios:release:build
    - Android
        - yarn detox:android:debug:test
        - yarn detox:android:release:test

## Working with translations
    ```
    import { useTranslation } from 'react-i18next';
    import { Text } from 'react-native'
    ...
    const MyComponent = ()=> {
        const { t } = useTranslation();

        return (
            <Text>{t('TRANSLATION_KEY')}</Text>
        )
    }
    ```
   
- Simply add all your translation keys in src/config/locales/LOCALE.json
- Then inside any component use the t function above to render your translations

### Switching language
```
import i18next from 'i18next';

i18next.changeLanguage(lng)
```
- Expects a 2 character country code

## Using env Variables
- Create a file named .env at the project top level
- In src/config/env.d.ts add the types for your environment variables
- To access your environment variables use the following snippet
```
import { YOUR_VARIABLE } from 'react-native-dotenv'
```
## Using Sentry
- Create a file named .env at the project top level
- Add the following keys and values in your .env file
```
SENTRY_DSN=
SENTRY_URL=
SENTRY_ORGANIZATION=
SENTRY_PROJECT=
SENTRY_AUTH_TOKEN=
```
- Further informations on how to setup Sentry see [here](https://docs.sentry.io/platforms/react-native/)

## Using Fonts
- Use your added Fotnts

    ```
    <Text style={{ fontFamily: Roboto }}>Text in your Font</Text>
    ```

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Feedback

If you have any feedback or encounter any problems please contact me at johanneswe91@gmail.com