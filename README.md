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

### Using Fonts
- Use your added Fotnts

    ```
    <Text style={{ fontFamily: Roboto }}>Text in your Font</Text>
    ```


## License
[MIT](https://choosealicense.com/licenses/mit/)

## Feedback

If you have any feedback please contact me at johanneswe91@gmail.com