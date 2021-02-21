# BurgerVenueSeeker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.0.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## API

1. https://developer.foursquare.com/docs/api-reference/venues/search/

    > Returns a list of venues near the current location, optionally matching a search term.

2. https://developer.foursquare.com/docs/places-api/endpoints/

    > Endpoints

3. https://foursquare.com/developers/explore#req=venues%2Fsearch%3Fll%3D40.7484%2C-73.9857

    > API explorer

### Endpoints

1. Get Venues near Tartu

    https://api.foursquare.com/v2/venues/search?near=Tartu,EE

2. Get Categories related to burger

    https://api.foursquare.com/v2/venues/categories?name=burger

``` json
    "16": {
        "id": "4bf58dd8d48988d16c941735",
        "name": "Burger Joint",
        "pluralName": "Burger Joints",
        "shortName": "Burgers",
        "icon": {
        "prefix": "https://ss3.4sqi.net/img/categories_v2/food/burger_",
        "suffix": ".png",
    }
```

3. Get Burger venues near Tartu

    https://api.foursquare.com/v2/venues/search?near=Tartu,EE&categoryId=4bf58dd8d48988d16c941735
