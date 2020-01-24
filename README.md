# Clientpanel

A client add/edit/delete panel with content persisted to Firebase firestore.

This was created following the hands-on Udemy course by Brad Traversy and custom adjustments for compatibility with the newer version of angular.

If you intend to use this, please update environment to your own firestore, described in the following steps:

1. Create a file called **config.ts** in _./src/environments/config.ts_ and add the following content:

   ```ts
   export const firebaseDev = {};

   export const firebaseProd = {};
   ```

2. Create a firebase project at: [Firebase Console](https://console.firebase.google.com/)

3. Setup email authentication.

4. Create web app, which will in turn provide you with apiKey, authDomain, databaseURL, projectId, and other goodies.

5. Copy the config key-value pair object into the created _config.ts_, updating both the _firebaseDev_ and _firebaseProd_ objects.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
